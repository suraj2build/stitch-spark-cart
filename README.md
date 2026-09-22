# Style Canvas

FASHION COMMERCE PLATFORM

CUSTOMER EXPERIENCE DESIGN — MASTER BRIEF V1

You are designing the CUSTOMER-FACING EXPERIENCE for a new Indian fashion ecommerce platform.

This task is primarily:

UX
UI
responsive experience
interaction design
visual system
fashion merchandising experience
prototype

It is NOT the task of defining the production commerce architecture.

A separate engineering system will own:

backend architecture
database
authentication implementation
inventory ledger
procurement
payments
orders
returns
security
production APIs
production integrations

Do NOT create a competing commerce architecture.

Your responsibility is to create an exceptional, implementation-ready CUSTOMER EXPERIENCE that can later be connected to the production commerce platform.

============================================================
01 — BRAND / EXPERIENCE DIRECTION

This is a fashion-first ecommerce experience for:

MEN
+
WOMEN

Initial focus:
APPAREL

Future categories may include:
FOOTWEAR
ACCESSORIES

The experience should feel:

modern
fashion-forward
editorial
premium
clean
aspirational
visual
confident
young
Indian
accessible rather than intimidating
high-quality without appearing ultra-luxury

DO NOT make it look like:

Amazon
Flipkart
a marketplace
an admin dashboard
a generic Shopify template
a Myntra clone
a crowded discount marketplace
a SaaS application

We want:

EDITORIAL FASHION
+
STRONG COMMERCE
+
SOCIAL DISCOVERY

The customer should feel:

"I want to explore this brand"

before:

"I am navigating a product database."

============================================================
02 — REFERENCE PHILOSOPHY

The Product Owner has studied fashion sites including:

Ambraee
Uptownie
FableStreet
Suta

and other contemporary Indian fashion experiences.

Useful concepts from the reference study include:

large campaign imagery
video-led hero areas
clean navigation
visual category discovery
strong product photography
colour variants
size visibility
size guides
offers
reviews
recommendations
Frequently Bought Together
fashion storytelling
Instagram content
Watch & Shop
Trending on Gram
trust/service information

DO NOT copy any reference site's:

layout
branding
colors
typography
copy
components
visual identity

Synthesize the strongest UX principles into an ORIGINAL design system.

============================================================
03 — DESIGN MOBILE FIRST

Design:

MOBILE
and
DESKTOP

Mobile is the primary UX priority.

Desktop must still be a first-class experience.

Do not simply shrink desktop into mobile.

Mobile should use:

touch-friendly controls
bottom sheets where appropriate
swipeable media
sticky commerce actions
compact navigation
fast filtering
clear size selection
excellent thumb reach
minimal cognitive load

Desktop should use its additional space for:

large imagery
editorial composition
comparison
persistent purchase information where appropriate
rich merchandising

============================================================
04 — DESIGN SYSTEM FIRST

Before polishing individual screens, establish a coherent design system.

Define:

typography hierarchy
spacing system
grid
border radius philosophy
buttons
icons
form controls
chips
badges
product cards
price presentation
discount presentation
colour swatches
size chips
cards
drawers
bottom sheets
modals
toast/feedback states
skeleton/loading states
empty states
error states

Keep it sophisticated and restrained.

Avoid excessive:

gradients
glassmorphism
rounded cards everywhere
drop shadows
animations
decorative UI
tiny text
visual clutter

Fashion imagery should carry much of the visual personality.

============================================================
05 — GLOBAL HEADER

Create a premium responsive header.

DESKTOP concept:

brand/logo
Women
Men
New
Collections
Trending
optional Stories/Edit
search
account
wishlist
bag

Navigation architecture must remain extensible.

MOBILE concept:

menu
centered/appropriate logo
search
wishlist where space permits
bag

Search should feel important without dominating the fashion experience.

Support an announcement/promotion bar that merchandising can enable/disable.

============================================================
06 — HOME PAGE

Design a rich but disciplined fashion homepage.

Recommended storytelling order:

ANNOUNCEMENT BAR

HEADER

HERO CAMPAIGN

Large immersive fashion image OR video.

Support:

headline
short supporting line
primary CTA
secondary CTA

Examples of CTA structure:

SHOP WOMEN
SHOP MEN

or campaign-specific destinations.

The hero should feel like a fashion campaign rather than an ecommerce banner.

NEW / TRENDING

Image-led product discovery.

Avoid immediately showing huge numbers of products.

SHOP BY CATEGORY

Highly visual categories.

Examples:

Dresses
Shirts
Tops
Trousers
Co-ords
Denim
Jumpsuits

Actual taxonomy remains configurable.

COLLECTION / EDITORIAL STORY

Large editorial module for:

season
occasion
campaign
trend
collection

BEST SELLERS

SHOP THE LOOK

Show complete styled outfits.

Products belonging to a look should be discoverable individually.

WATCH & SHOP

THIS IS IMPORTANT.

Create a premium shoppable vertical-video experience inspired by social/Reels discovery.

TRENDING / COMMUNITY

Customer/creator/editorial social content.

BRAND PROMISE / SERVICE STRIP

Potential concepts:

quality
easy returns
delivery
secure payments
made/designed in India where factually applicable

Do NOT make unsupported claims.

RECENTLY VIEWED

Only where customer history exists.

FOOTER

============================================================
07 — SHOPPABLE REELS / WATCH & SHOP

Treat this as a FIRST-CLASS PRODUCT EXPERIENCE.

Do NOT make it a basic Instagram embed.

Design:

vertical 9:16 content cards
thumbnail/poster
play state
view count only if genuine data exists
creator/campaign attribution
product tagging
multiple products per Reel
"Shop this look"
quick product preview
colour
price
size
wishlist
Add to Bag where appropriate
open PDP

MOBILE:

Reels should support an immersive vertical viewing experience.

Potential interaction:

video
↓
product tag
↓
product mini-sheet
↓
select colour/size
↓
ADD TO BAG

without unnecessarily leaving the Reel.

DESKTOP:

Do not stretch a vertical Reel across the screen.

Use a premium vertical video presentation with adjacent/overlay product information.

The architecture should visually anticipate future synchronization with:

Instagram
Meta
uploaded campaign videos

but DO NOT implement real integrations.

Use prototype data.

============================================================
08 — PLP / CATEGORY PAGE

Design a premium PRODUCT LISTING PAGE.

Primary objective:

make browsing fashion enjoyable while maintaining powerful filtering.

Include:

category title
optional editorial/category banner
product count
sort
filter
product grid

Filters should anticipate:

Category
Size
Colour
Price
Fit
Fabric
Occasion
Collection
Discount
Availability

DESKTOP:

filter sidebar or refined filter interaction

3–4 products per row depending viewport/content

MOBILE:

2 products per row

FILTER and SORT should be immediately accessible.

Use bottom sheets/drawers rather than overwhelming the page.

============================================================
09 — PRODUCT CARD

Product cards should prioritize photography.

Include:

primary image
optional secondary image on desktop hover
wishlist
brand where useful
product name
selling price
MRP
discount
colour indication
additional-colour count

Potential quick interaction:

QUICK ADD

But do not let Quick Add create accidental purchases.

If size selection is necessary, open a lightweight size selector.

Support badges such as:

NEW
BESTSELLER
LIMITED
LOW STOCK

only when backed by data.

Do not manufacture urgency.

============================================================
10 — PDP — PRODUCT DETAIL PAGE

The PDP is one of the most important screens in the platform.

It must combine:

VISUAL DESIRE
+
PRODUCT CONFIDENCE
+
FIT CONFIDENCE
+
PURCHASE CONFIDENCE

DESKTOP:

Use a large product-media area.

Explore:

two-column media grid
or
large image + thumbnails

Purchase panel can remain appropriately sticky.

MOBILE:

swipeable product gallery
clear image count
zoom
compact purchase information
sticky Add to Bag where useful

============================================================
11 — PDP PURCHASE AREA

Above the fold should communicate:

brand
product name
rating/review count
MRP
selling price
discount
tax-inclusive indication where applicable
available colours
selected colour
sizes
size availability
size guide
wishlist
ADD TO BAG
delivery/pincode check

BUY NOW may be explored but should not visually compete excessively with Add to Bag.

============================================================
12 — SIZE EXPERIENCE

Fashion sizing is critical.

Design:

size chips
unavailable size states
size guide
model information

Support:

MODEL HEIGHT
WEARING SIZE

Create a placeholder UX for:

MY SIZE

Future behavior may recommend size from saved customer sizing/profile information.

Do not pretend recommendation intelligence already exists.

============================================================
13 — PRODUCT INFORMATION

Use progressive disclosure.

Possible sections:

Product Details
Fit & Size
Fabric & Care
Style Notes
Shipping
Returns & Exchange
Manufacturing Information
Country of Origin

Do not create enormous walls of text.

============================================================
14 — DELIVERY

Create a pincode-delivery module.

Prototype states:

enter pincode
checking
deliverable
not deliverable
estimated delivery
COD availability where appropriate

This is visual/prototype behavior only.

============================================================
15 — PDP SOCIAL PROOF

Design:

ratings summary
rating distribution
review count
customer reviews
verified purchase indicator
customer images where available
write-a-review entry point

Do not generate fake review statistics as if they were real.

Prototype/sample data must clearly be sample content.

============================================================
16 — COMPLETE THE LOOK

Create an editorial cross-sell experience.

A primary fashion image/look can contain multiple tagged products.

Allow customers to:

inspect each product
select required size
add individual item
add multiple selected items

Do not automatically add the entire look.

============================================================
17 — FREQUENTLY BOUGHT TOGETHER

Design a clear bundle-style component.

Show:

products
individual prices
selected/unselected state
combined price
potential promotion if genuine
ADD SELECTED TO BAG

Keep this visually simpler than Shop the Look.

=========================================================

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://stitch-spark-cart.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e2f71fe7-ac20-4cef-afc6-b33727e8b807).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
