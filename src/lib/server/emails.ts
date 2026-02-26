import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
const GMAIL_USER = env.GMAIL_USER;
const GMAIL_APP_PASSWORD = env.GMAIL_APP_PASSWORD;
const CONTACT_EMAIL = env.CONTACT_EMAIL;

import { siteConfig } from '@/data.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
    }
});

// App Brand Colors
const COLORS = {
    primary: '#3b82f6',
    background: '#f8fafc',
    card: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
    border: '#e2e8f0'
};

export async function sendContactEmail(name: string, email: string, message: string) {
    const mailOptions = {
        from: `"Portfolio Contact" <${GMAIL_USER}>`,
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: `🚀 New Inquiry: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif; background-color: #f8fafc; padding: 48px 20px; color: #0f172a;">
    <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden;">
        <!-- Accent Bar -->
        <div style="height: 4px; background: linear-gradient(90deg, #3b82f6, #6366f1);"></div>
        
        <div style="padding: 48px;">
            <!-- Brand -->
            <div style="margin-bottom: 32px;">
                <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">
                    Surendra<span style="color: #3b82f6;">.</span>
                </h1>
                <p style="margin: 6px 0 0; font-size: 13px; color: #64748b;">
                    New Inquiry Received
                </p>
            </div>

            <!-- Inquiry Details -->
            <div style="margin-bottom: 32px;">
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">From</label>
                    <p style="margin: 0; font-size: 16px; font-weight: 600;">${name}</p>
                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${email}</a>
                </div>
                
                <div style="background-color: #f1f5f9; padding: 24px; border-radius: 16px; border-left: 4px solid #3b82f6;">
                    <label style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 8px;">Message</label>
                    <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
                </div>
            </div>

            <!-- Action Button -->
            <div style="text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px;">
                    Reply to ${name.split(' ')[0]}
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 18px; text-align: center; font-size: 11px; color: #64748b;">
            Sent from your portfolio contact form.
        </div>
    </div>
</div>
`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Notification email sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending notification email:', error);
        return false;
    }
}

export async function sendConfirmationEmail(name: string, email: string) {
    const mailOptions = {
        from: `"Surendra" <${GMAIL_USER}>`,
        to: email,
        subject: `✨ Thanks for reaching out, ${name}!`,
        text: `Hi ${name},\n\nThank you for contacting me. This is a confirmation that I've received your message. I'm usually able to get back to inquiries within 24 hours.\n\nLooking forward to speaking with you!\n\nBest regards,\nSurendra`,
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif; background-color: #f8fafc; padding: 48px 20px; color: #0f172a;">
    
    <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden;">
        
        <!-- Accent Bar -->
        <div style="height: 4px; background: linear-gradient(90deg, #3b82f6, #6366f1);"></div>
        
        <div style="padding: 48px;">
            
            <!-- Brand -->
            <div style="margin-bottom: 32px;">
                <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">
                    Surendra<span style="color: #3b82f6;">.</span>
                </h1>
                <p style="margin: 6px 0 0; font-size: 13px; color: #64748b;">
                    Founder • Systems Architect • SaaS Engineer
                </p>
            </div>

            <!-- Greeting -->
            <h2 style="margin: 0 0 18px; font-size: 22px; font-weight: 700;">
                Hi ${name},
            </h2>

            <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.7; color: #334155;">
                Thank you for reaching out. I’ve successfully received your message and will review it shortly.
            </p>

            <p style="margin: 0 0 28px; font-size: 16px; line-height: 1.7; color: #334155;">
                I typically respond within <strong>24 hours</strong>. Looking forward to exploring how we can build something meaningful together.
            </p>

            <!-- Divider -->
            <div style="height: 1px; background-color: #e2e8f0; margin: 32px 0;"></div>

            <!-- Signature -->
            <div>
                <p style="margin: 0; font-weight: 600;">Surendra Kumar M</p>
                <p style="margin: 4px 0 14px; font-size: 14px; color: #64748b;">
                    Founder • Systems Architect • SaaS Engineer
                </p>

                <div>
                    <a href="${siteConfig.links.linkedin}" 
                       style="color: #3b82f6; text-decoration: none; font-size: 13px; font-weight: 600; margin-right: 16px;">
                       LinkedIn
                    </a>
                    <a href="${siteConfig.links.github}" 
                       style="color: #3b82f6; text-decoration: none; font-size: 13px; font-weight: 600;">
                       GitHub
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 18px; text-align: center; font-size: 11px; color: #64748b;">
            This is an automated confirmation that your message has been received.
        </div>
    </div>
</div>
`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        return false;
    }
}
