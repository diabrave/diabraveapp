import { pgTable, text, timestamp, uuid, bigint, smallint } from 'drizzle-orm/pg-core';

export const faqs = pgTable('faqs', {
  id: uuid('id').primaryKey().defaultRandom(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: text('category'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export const connectionStatus = pgTable('connection_status', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  status: smallint('status').default(0),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
