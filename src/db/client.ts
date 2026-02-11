import { supabase } from '../lib/supabase';

/**
 * Reusable database client.
 * Currently uses the Supabase client as it is the most suitable for the React Native environment
 * using the provided API URL and Anon Key.
 *
 * This can be expanded to include Drizzle ORM if a compatible driver for the
 * Supabase REST API or a direct Postgres connection becomes available.
 */
export const db = supabase;

export default db;
