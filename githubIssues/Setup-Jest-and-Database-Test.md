## Oversigt
Vi har brug for et solidt test-setup for at sikre, at vores database-interaktioner fungerer som forventet. Jules skal konfigurere Jest og skrive en integrationstest for FAQ-tabellen.

## Opgaver for Jules

### 1. Konfiguration af Jest
- Installer og konfigurer **Jest** og **ts-jest** (da vi bruger TypeScript).
- Opsæt et test-script i `package.json`.
- Konfigurer miljøet til at understøtte React Native/Expo (brug f.eks. `jest-expo`).
- Sørg for at `.env` eller test-miljøvariabler håndteres korrekt for Supabase URL og Key.

### 2. Database Integrationstest
- Opret en testfil: `__tests__/database/faq_integration.test.ts`.
- Skriv en test, der verificerer forbindelsen til den lokale Supabase-instans.
- Testen skal:
    1. Indsætte en test-række i `public.faqs` (brug schema fra `supabase/migrations/20260210113430_create_faq_table.sql`).
    2. Hente rækken ud igen og verificere, at indholdet matcher.
    3. Slette test-rækken igen for at efterlade databasen ren.

## Tekniske Krav
- Brug den eksisterende Supabase-klient konfiguration.
- Følg TypeScript best-practices.
- Testen skal kunne køres lokalt med `npm test`.

## Labels
`jules`, `testing`, `backend`, `supabase`