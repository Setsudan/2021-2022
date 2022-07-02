import { createClient } from "@supabase/supabase-js";

// Here we create the connection to the db using supabase
const supabaseUrl = import.meta.env.VITE_DB_URL;
const supabaseKey = import.meta.env.VITE_DB_TOKEN;

export const supabase = createClient(supabaseUrl, supabaseKey);
