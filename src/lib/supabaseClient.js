console.log("URL Check:", import.meta.env.VITE_SUPABASE_URL); // هل بيطبع الرابط ولا undefined؟

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
