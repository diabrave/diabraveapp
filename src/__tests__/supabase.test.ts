import { supabase } from '@/lib/supabase';

describe('Supabase Connection', () => {
  it('should be initialized with a URL and Anon Key', () => {
    // We can't easily check the private properties of the client in a clean way,
    // but we can check if the client itself is defined.
    expect(supabase).toBeDefined();
    expect(supabase.auth).toBeDefined();
    expect(supabase.from).toBeDefined();
  });

  it('should have the correct URL format', () => {
    // Accessing the internal supabaseUrl property
    const client = supabase as any;
    expect(client.supabaseUrl).toContain('supabase.co');
  });
});
