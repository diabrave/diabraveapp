# Project context: diaBrave

## Core Info
- **Tech:** React Native (Expo), WatermelonDB (local-first), Supabase (Auth/Sync).
- **Brand:** diaBrave (Helping kids & parents manage T1D).
- **Architecture:** "Relay" mode for schools/caregivers using RLS, and a fun gamification app target kids.
- **License:** AGPL-3.0.

## Tech Stack Details
- **Sync Strategy:** WatermelonDB synchronization via Supabase RPC functions.
- **Local DB:** SQLite (via WatermelonDB).
- **Dev Env:** Docker-hosted Supabase for local dev.

## Current Progress
- Expo initialized with blank-typescript.
- Babel configured for Decorators (WatermelonDB).
- GitHub Repo & Organization established.

## Next Tasks
- [ ] Define WatermelonDB Schema & Models.
- [ ] Initialize Supabase local environment.
- [ ] Implement first sync-ready model (Measurements).