# Fashion Commerce Customer Experience

## Goal
Build an implementation-ready, customer-facing fashion commerce prototype for Indian men and women, using sample content only and no production commerce backend.

## Scope
- Establish a restrained editorial design system: typography, semantic colors, spacing, controls, product cards, states, drawers, sheets, and responsive behavior.
- Build shared announcement bar, responsive navigation, search entry, wishlist/bag indicators, and footer.
- Build the home experience with campaign imagery, curated discovery, category merchandising, editorial stories, best sellers, Shop the Look, Watch & Shop, community content, and service information.
- Build a first-class Watch & Shop experience with vertical media, tagged products, product preview, size/color selection, wishlist, and prototype add-to-bag behavior.
- Build a category/product-listing experience with responsive grids, desktop filters, mobile filter/sort sheets, product badges, color choices, and guarded Quick Add.
- Build a product-detail experience with media gallery, purchase controls, size guide and My Size placeholder, model details, pincode states, progressive information, sample review presentation, Complete the Look, and Frequently Bought Together.
- Use local prototype data and clearly label sample content where it could otherwise be mistaken for live data.

## Responsive behavior
- Design mobile interactions independently: thumb-friendly controls, swipeable media, bottom sheets, compact navigation, and sticky purchase actions.
- Use desktop space for editorial image composition, comparison, persistent filters, and a sticky purchase panel.

## Visual direction
- Modern Indian fashion editorial: confident, youthful, premium but accessible.
- Image-led composition, strong type hierarchy, restrained surfaces, minimal shadow, small radii, and no marketplace or dashboard styling.
- Generate a cohesive local campaign/product image set so the prototype contains no placeholder imagery.

## Prototype behavior
- Local search/filter/sort controls, wishlist toggles, size and color selection, pincode checking states, media controls, and bag feedback.
- No real authentication, payment, inventory, order, review, social, or external service integration.

## Routes
- `/` — campaign-led home and curated commerce.
- `/shop` — category/product listing and filters.
- `/product/$slug` — complete product detail experience.
- `/watch` — immersive Watch & Shop experience.

## Validation
- Verify core browse-to-product and Watch & Shop interactions on mobile and desktop.
- Confirm each content route has unique page metadata and the layouts do not clip or overlap.
