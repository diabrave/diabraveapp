import { FaqService } from '../../src/services/faq.service';

describe('FaqService Integration', () => {
  // Increase timeout for database operations
  jest.setTimeout(10000);

  it('should fetch FAQs from the database', async () => {
    // 1. Fetch using service
    const faqs = await FaqService.getFaqs();

    // 2. Verify
    expect(Array.isArray(faqs)).toBe(true);
    // We expect at least the existing FAQ to be there
    expect(faqs.length).toBeGreaterThan(0);

    const firstFaq = faqs[0];
    expect(firstFaq).toHaveProperty('id');
    expect(firstFaq).toHaveProperty('question');
    expect(firstFaq).toHaveProperty('answer');

    // Check if the known FAQ is there (optional but good for confidence)
    const knownQuestion = 'Hvordan måler jeg mit blodsukker?';
    const found = faqs.find(f => f.question === knownQuestion);
    expect(found).toBeDefined();
  });
});
