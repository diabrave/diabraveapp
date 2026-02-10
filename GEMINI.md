# Context for Gemini AI - Project: diaBrave

## Project Specs
- **User:** Senior Developer (10+ years experience).
- **Core Goal:** T1D management with a focus on "Relay" (delegating care).
- **Architecture:** Local-first with WatermelonDB syncing to Supabase via RPC.
- **Language:** Primary focus is the Danish market, but branding is international.

## Development Rules
- Use TypeScript for everything.
- Prefer functional components and hooks.
- Security first: RLS is mandatory for all user-specific tables.
- Keep UI child-friendly and empowering.

## Next Milestones
1. Initialize Expo project with `expo-dev-client`.
2. Set up WatermelonDB schema for `measurements` and `instructions`.
3. Configure Supabase CLI for local Docker development.