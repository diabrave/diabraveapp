import { db } from '../db/client';
import { FAQItem } from '../components/ui/accordion';

/**
 * Service for handling FAQ related database operations.
 */
export const FaqService = {
  /**
   * Fetches all FAQs from the database.
   * @returns A promise that resolves to an array of FAQ items.
   */
  async getFaqs(): Promise<FAQItem[]> {
    const { data, error } = await db
      .from('faqs')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching FAQs:', error);
      throw error;
    }

    return (data as FAQItem[]) || [];
  },
};

export default FaqService;
