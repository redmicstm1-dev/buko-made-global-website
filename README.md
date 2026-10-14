# Buko Made Global Concept — Medical & Hospital Equipment

A responsive Next.js lead-generation MVP for medical-equipment discovery, quotation requests and direct contact.

## Included
- Responsive homepage and equipment-category grid.
- Individual product-detail pages at `/products/[slug]`, with use cases, selection guidance, enquiry details, pricing notes and related products.
- Ten fully written product guides covering common equipment and consumable enquiries.
- Featured product-guide cards on the homepage linking to the detail pages.
- Product-category enquiry path and quotation form for single products or bulk lists.
- Email, phone, WhatsApp and business address sections.
- Two editable SVG logo concept drafts in `public/brand/`.
- Navy / teal / white / cool-grey visual system with muted-gold accent.
- Basic metadata and environment-variable example.

## Important MVP behaviour
The quotation form currently prepares an email in the visitor's mail app and opens WhatsApp with the same request. It does **not** silently store leads or guarantee delivery. A proper central inbox/database needs a server-side email provider or verified form service and, if desired, an admin dashboard. Do not advertise the form as a stored CRM until that is implemented and tested.

## Before public launch
1. Confirm company name, address and contact details.
2. Verify the preferred domain and configure `metadataBase` in `app/layout.tsx`.
3. Review the two logo SVG concepts and approve one.
4. Replace the CSS-made hero illustration with properly licensed or approved product photography when available. It is intentionally an abstract illustration, not a claim to depict a particular real product/model.
5. Review each product guide and add model-specific product listings only when the exact model and its specifications are confirmed. Current product guides deliberately use quotation-led pricing because Buko's actual selling prices, supplier availability, shipping and tax terms have not yet been confirmed. Competitor listings are market references only; do not present them as Buko's own prices.
6. Confirm sourcing, delivery, warranty, certifications and any applicable product-registration claims before publishing them.
7. Test all form flows on mobile and desktop before launch.

## Local development
Requires Node.js compatible with the chosen Next.js version.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open the local address printed by Next.js.

## Deployment
Push this folder to a Git repository and import it into Vercel. Set the optional `NEXT_PUBLIC_BUSINESS_EMAIL`, `NEXT_PUBLIC_BUSINESS_PHONE` and `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variables in Vercel. The values in `.env.example` are public contact details, not secrets.

## Project structure
- `app/page.tsx` — homepage sections and category data
- `app/products/[slug]/page.tsx` — product detail template and static routes
- `lib/products.ts` — product-guide copy, selection points and enquiry guidance
- `app/globals.css` — responsive visual system
- `app/layout.tsx` — metadata and root layout
- `components/Logo.tsx` — brand lockup
- `components/QuoteForm.tsx` — email/WhatsApp handoff form
- `public/brand/` — two logo concept SVGs
