# Jules  

Script til at lave setup på googles async agent [jules](https://jules.google.com/)  

Scriptet kan sættes ind ved at gå til Repo -> Configure repo -> Environment 



## Setup script

Dette script sikrer et rent miljø til Jules' snapshots:

```bash
# 1. Installer alle dependencies
npm install

# 2. Ryd op i git (vigtigt!)
# Jules kræver et rent working tree for at lave et snapshot.
# npm install kan nogle gange ændre i package-lock.json.
git checkout package-lock.json

# 3. Bekræft installationer
npx supabase --version
node -v
npm -v

echo "Setup complete! 🚀"
```

## Hvornår skal jeg køre setup igen?

Du skal trykke på **"Run and snapshot"** i Jules hver gang du:
- Tilføjer eller fjerner pakker i `package.json`.
- Ændrer væsentlige konfigurationsfiler.
- Opdaterer din database-schema, hvis Jules skal bruge den lokale database.

Jules tager et "billede" af din container efter dette script. Hvis du ikke opdaterer snapshottet, vil nye pakker ikke være tilgængelige for Jules i hendes opgaver.


## Environment variables

For at Jules kan interagere med dit projekt (hvis det kræver hemmeligheder), bør du tilføje følgende i "Environment variables" sektionen i Jules interfacet:

| Key | Description |
| :--- | :--- |
| `EXPO_PUBLIC_SUPABASE_URL` | Din Supabase URL (fra .env) |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Din Supabase Anon Key (fra .env) |

## Netværksadgang
Husk at sikre, at **"Network access"** er slået **TIL**, så Jules kan hente pakker og tale med Supabase API'et under kørsel.
 