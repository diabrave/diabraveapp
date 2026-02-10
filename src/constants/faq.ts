export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  created_at: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'Hvad er diaBrave?',
    answer: 'diaBrave er et værktøj skabt til at hjælpe børn med diabetes og deres omsorgspersoner.',
    category: 'Generelt',
    created_at: '2025-02-10T12:00:00Z',
  },
  {
    id: '2',
    question: 'Hvad er Relay-mode?',
    answer: 'En funktion der gør det sikkert og nemt at overlevere ansvar til f.eks. skole eller pædagoger.',
    category: 'Funktioner',
    created_at: '2025-02-10T12:00:00Z',
  },
];
