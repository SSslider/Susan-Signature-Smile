# Susan Signature Smile - Premium Dental Clinic

## Architecture & Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4) with `shadcn/ui` based approach
- **i18n:** `next-intl` (Hebrew and Arabic support, both RTL configured)
- **Animations:** Framer Motion (for refined scroll reveals)
- **Database/RAG:** Supabase (pgvector) seed prepared in `supabase` folder.

## Key Instructions
### 1. Running Locally
Ensure you have Node.js 20+ installed.
```bash
npm install
npm run dev
```

### 2. Localization
The project defaults to Hebrew (`/he`) and has a toggle for Arabic (`/ar`). You can edit the dictionaries in `messages/he.json` and `messages/ar.json`. RTL directions are automatically managed in the root layout file.

### 3. Updating Content
- Text for homepage sections can be edited in the React components under `src/components/home/`.
- To swap the generated placeholder images (`hero_portrait.png`, `dental_chair.png`, `diagnostic_machine.png`, `team_portrait.png`, `gloved_hand.png`), replace them in the `public/images/` directory.

### 4. Supabase RAG AI Chatbot
The AI Assistant widget logic is wired up to a Next.js API route (`src/app/api/chat/route.ts`).
To implement the backend vector search:
1. Run `supabase/schema.sql` and `supabase/seed.sql` on your Supabase Postgres database.
2. Initialize the OpenAI client in the API route.
3. Modify the placeholder JSON response to return real embeddings.

### 5. SEO & Accessibility
Basic Meta Tags and Open Graph setups have been written in `src/lib/seo.ts` and loaded by the main layout. An accessibility floating widget was built into the chat bubble space which handles basic UI modifications like textual toggles. 

## Quality Assurance Checklist Status
- [x] **Mobile First Build**: Tested 375px width via Tailwind breakpoints.
- [x] **Monochrome Luxury UI**: Dark themed aesthetic, clean grid-based spacing.
- [x] **RTL Configuration**: CSS logical properties (`start-0`, `ltr:`, `rtl:`) implemented.
- [x] **Forms**: A booking skeleton form connects seamlessly to the dark footer CTA.
- [x] **A11y/Accessibility**: Built with accessible contrast ratios, visible semantic focus flows, and an A11y toggle boilerplate menu. 
- [x] **SEO**: Integrated global metadata mappings.

## Next Steps
- Link the actual clinic WhatsApp number to the `final-cta` links.
- Create real endpoints for form submissions (e.g. Supabase inserts or SendGrid).
