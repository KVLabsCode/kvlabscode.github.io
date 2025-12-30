# Troubleshooting Sanity Studio

## Add Button is Greyed Out

If the "Add" button is greyed out in Sanity Studio, try these solutions:

### 1. Check Browser Console for Errors
- Open browser DevTools (F12)
- Check the Console tab for any error messages
- Look for schema validation errors or import issues

### 2. Verify Project ID is Set
- Make sure `sanity.config.ts` has your actual project ID (not 'YOUR_PROJECT_ID')
- Check that `.env.local` exists in the `sanity-studio` folder with:
  ```env
  SANITY_STUDIO_PROJECT_ID=your-actual-project-id
  SANITY_STUDIO_DATASET=production
  ```

### 3. Restart the Studio
```bash
# Stop the dev server (Ctrl+C)
# Then restart:
cd sanity-studio
npm run dev
```

### 4. Clear Cache and Reinstall
```bash
cd sanity-studio
rm -rf node_modules .sanity
npm install
npm run dev
```

### 5. Check Schema Exports
Make sure your schema files export default objects:
- `schemas/post.ts` should have `export default { ... }`
- `schemas/category.ts` should have `export default { ... }`

### 6. Verify Schema is Registered
In `sanity.config.ts`, make sure schemas are in the `schema.types` array:
```typescript
schema: {
  types: [post, category],
}
```

### 7. Check Sanity Project Permissions
- Go to https://www.sanity.io/manage
- Select your project
- Go to **API** → **API tokens**
- Make sure you have a token with **Editor** permissions

### 8. Try Creating Schema via Web Interface
If local Studio still doesn't work:
1. Go to https://www.sanity.io/manage
2. Click "Open Studio"
3. Use the visual schema builder to create your `post` type
4. This will work immediately without local setup

### 9. Check for TypeScript Errors
```bash
cd sanity-studio
npx tsc --noEmit
```
Fix any TypeScript errors that appear.

### 10. Verify Sanity Version
Make sure you're using compatible versions:
```bash
cd sanity-studio
npm list sanity
```
Should show version 3.x.x

