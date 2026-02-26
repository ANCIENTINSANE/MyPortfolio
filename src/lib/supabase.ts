import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';
const PUBLIC_SUPABASE_URL = env.PUBLIC_SUPABASE_URL;
const PUBLIC_SUPABASE_ANON_KEY = env.PUBLIC_SUPABASE_ANON_KEY;


// console.log('Initializing Supabase client with URL:', PUBLIC_SUPABASE_URL);

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
