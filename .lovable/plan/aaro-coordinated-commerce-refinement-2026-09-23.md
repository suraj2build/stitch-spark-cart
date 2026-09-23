# AARO Coordinated Commerce Refinement

## Goal
Refine the existing AARO prototype into one coherent, responsive shopping journey while preserving its approved editorial identity, imagery, typography, warm neutral palette, and complete Home/PDP scope.

## Build
- Rework shared shopping state from a counter into demo line items with size, colour, quantity, removal, and wishlist movement; keep all data local and non-production.
- Upgrade the header into working navigation for search, wishlist, and bag, with compact mobile behavior and consistent count feedback.
- Refine Home ordering to: campaign hero, Women/Men discovery, New & Trending, categories, collection story, best sellers, interactive Shop the Look, Watch & Shop, community, services, footer.
- Upgrade PLP filters with realistic values per category, selected-filter feedback, clear/apply behavior, functional sorting, dedicated mobile Filter and Sort sheets, richer swatches, availability-aware Quick Add, and polished empty results.
- Refine PDP gallery and purchase controls, preserve every requested information module, improve unavailable-product handling, add customer-photo presentation, make Complete the Look individually configurable, and keep the mobile purchase bar compact and clear.
- Upgrade Watch & Shop with unobtrusive story navigation and tagged-product previews supporting colour, size, wishlist, Add to Bag, and product navigation without leaving the media context.
- Add a full responsive Bag page with line-item editing, delivery messaging, coupon/credit placeholders, price summary, empty state, and checkout entry.
- Add a low-friction Checkout page with a compact Bag → Details → Delivery → Payment → Confirmation progression, equal Guest and Sign-in entry, saved/new address states, serviceability, COD/prepaid choices, order summary, failure recovery, and mobile sticky continuation.
- Add a dedicated Search experience with recent searches, suggestions, trending categories/products, results, and recovery-focused no-results state.
- Add a Wishlist page so the existing wishlist control has a complete destination and branded empty state.

## Technical details
- Reuse the current TanStack routes, semantic Tailwind tokens, local imagery, product data, and shared Button/ProductCard patterns.
- Create route files for `/search`, `/wishlist`, `/bag`, and `/checkout`; each receives unique title, description, Open Graph metadata, and Twitter card metadata.
- Extend local demo catalog data only where needed for size/colour/filter behavior; do not add Cloud, authentication, payments, inventory, or external integrations.
- Use shared drawers/sheets and focused commerce components rather than duplicating screen-level controls.
- Unknown product slugs render a branded unavailable-product state instead of silently showing another item.

## Validation
- Exercise browse → product → select size/colour → add to bag → edit bag → guest checkout → confirmation on mobile and desktop.
- Verify search results and no-results recovery, empty bag/wishlist, filter/sort sheets, Watch & Shop product preview, and Shop the Look multi-item selection.
- Check all routes for clipping, overlap, usable touch targets, correct metadata, and browser errors at 390×844 and 1280×1800.

## Boundaries
This remains a design-reference prototype with local demo state. No production backend, login, payment processing, stock service, review submission, social metrics, or Instagram integration will be introduced.
