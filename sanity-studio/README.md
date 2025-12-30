# Sanity Studio for Kovio Blog

This is the Sanity Studio for managing blog content.

## Setup

1. Install dependencies:
   ```bash
   cd sanity-studio
   npm install
   ```

2. Make sure your `.env.local` file in the root directory has:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. Run the Studio:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3333 in your browser

## Deploy Studio

To deploy the Studio to Sanity's hosting:

```bash
npm run deploy
```

This will make your Studio available at `https://your-project-id.sanity.studio`

