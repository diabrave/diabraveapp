# Project context: diaBrave

## Core Info

- **Tech:** React Native (Expo), SQLite (local-first), Supabase (Auth/Sync).
- **Brand:** diaBrave (Helping kids & parents manage T1D).
- **Architecture:** "Relay" mode for schools/caregivers using RLS, and a fun gamification app target kids.
- **License:** AGPL-3.0.

## Tech Stack Details

- **Sync Strategy:** On-demand synchronization via Supabase (Edge Functions or REST).
- **Local DB:** Expo SQLite managed by Drizzle ORM (SDK 55 JSI optimized).
- **Dev Env:** Docker-hosted Supabase for local dev.

## Current Progress

- Expo SDK 55 (Beta) initialized with React 19 and RN 0.83.
- New Architecture (Fabric/JSI) enabled and verified.
- GitHub Repo & Organization established.

## Next Tasks

- [ ] Initialize Supabase local environment (Docker).
- [ ] Setup Drizzle ORM with Expo SQLite.
- [ ] Define first Code-First models (Measurements & User Profiles).
- [ ] Implement manual "Backup/Sync" logic.

## DB - Supabase + Drizzle/SQLite (Local-First)

What I want:

- **Data separation**:
  1. **Public Data**: Global data available for all users, fetched on-demand.
  2. **User Specific Data**: Personal history and settings, stored locally in SQLite and only synced to the cloud when the user requests it (Manual Sync).

- **Code-First Approach**: The entire environment (local and server) should be defined in code/migration files.

- **Easy Development Environment**:
  - A Docker setup (via Supabase CLI) to spin up the entire data hub locally.
  - Seeding capabilities for both Public and User test data.

- **Deployment & Migrations**:
  - Clear path for database migrations using Drizzle Kit (Local) and Supabase CLI (Server) without data loss.
