import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase credentials
const supabaseUrl = 'https://ocnuesakpdzksjeeyqkr.supabase.co';
const supabaseKey = `${process.env.SUPABASE_KEY}`;

export const supabase = createClient(supabaseUrl, supabaseKey);
