import dotenv from 'dotenv';
import fs from 'fs';

// Only load .env.test if the URL is not already set in the environment
// This allows CI pipelines to inject the correct local Supabase keys dynamically
if (!process.env.EXPO_PUBLIC_SUPABASE_URL && fs.existsSync('.env.test')) {
  dotenv.config({ path: '.env.test' });
}

