-- Enable RLS
ALTER TABLE "public"."connection_status" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all actions for anonymous users (using the public/anon key)
-- This is useful for simple connection testing. 
-- In a production app, you might want to restrict this further (e.g. only authenticated users).
CREATE POLICY "Allow public access to connection_status"
ON "public"."connection_status"
FOR ALL
TO anon
USING (true)
WITH CHECK (true);
