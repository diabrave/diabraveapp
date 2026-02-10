import { supabase } from '../../src/lib/supabase';

describe('FAQ Database Integration', () => {
  // Increase timeout for database operations
  jest.setTimeout(10000);

  it('should insert, fetch, and delete a test FAQ', async () => {
    const testFaq = {
      question: 'Test Question?',
      answer: 'Test Answer',
      category: 'testing',
      author: 'Jest Test'
    };

    // 1. Insert
    const { data: insertData, error: insertError } = await supabase
      .from('faqs')
      .insert([testFaq])
      .select()
      .single();

    if (insertError) {
      // If we get a connection error or 401, we might want to know why
      console.error('Supabase Error:', insertError.message);
    }

    expect(insertError).toBeNull();
    expect(insertData).toMatchObject(testFaq);
    expect(insertData.id).toBeDefined();

    const faqId = insertData.id;

    // 2. Fetch
    const { data: fetchData, error: fetchError } = await supabase
      .from('faqs')
      .select('*')
      .eq('id', faqId)
      .single();

    expect(fetchError).toBeNull();
    expect(fetchData).toMatchObject(testFaq);

    // 3. Delete
    const { error: deleteError } = await supabase
      .from('faqs')
      .delete()
      .eq('id', faqId);

    expect(deleteError).toBeNull();

    // 4. Verify deletion
    const { data: verifyData } = await supabase
      .from('faqs')
      .select('*')
      .eq('id', faqId)
      .single();

    expect(verifyData).toBeNull();
  });
});
