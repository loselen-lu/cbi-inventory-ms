import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl) {
  throw new Error("Supabase URL was not found.");
}
if (!supabaseKey) {
  throw new Error("Supabase key was not found.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
