import { fail, type RequestEvent } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { sendContactEmail, sendConfirmationEmail } from '$lib/server/emails';

export const actions = {
    default: async ({ request }: RequestEvent) => {
        const formData = await request.formData();
        const name = formData.get('name')?.toString();
        const email = formData.get('email')?.toString();
        const message = formData.get('message')?.toString();

        // Validation
        if (!name || !email || !message) {
            return fail(400, {
                error: 'All fields are required',
                values: { name, email, message }
            });
        }

        // 1. Store in Supabase
        const { error: dbError } = await supabase
            .from('messages')
            .insert([{ name, email, message }]);

        if (dbError) {
            console.error('Supabase error:', dbError);
            // We still try to send email even if DB fails, but we'll notify fail if it's critical
            // For now, let's treat DB as optional or handle it gracefully
        }

        // 2. Send Email
        const emailSent = await sendContactEmail(name, email, message);

        if (!emailSent) {
            return fail(500, {
                error: 'Message received but failed to send notification. We will still get back to you!',
                values: { name, email, message }
            });
        }

        // 3. Send Confirmation Email to User (Async, don't block for long)
        await sendConfirmationEmail(name, email);

        return {
            success: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        };
    }
};
