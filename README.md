# Espressaroo

A static, US-focused home espresso buying guide built with plain HTML, CSS, and JavaScript. The content is in English to match the intended Reddit audience and the Amazon.com Associates tag.

## Audience and scope

- **Market:** United States; prices and model variants are discussed in USD, and affiliate links lead to Amazon.com using `cofmac93-20`.
- **Primary reader:** a Reddit visitor choosing a first or next home espresso setup who wants a short, practical shortlist. The guide assumes some research interest, not specialist-level equipment knowledge.
- **Equipment:** semi-automatic espresso machines paired with espresso-capable grinders, plus bean-to-cup machines with an integrated grinder. Comparisons focus on manual vs. automatic workflow, milk vs. straight espresso, and machine/grinder pairing.
- **Current budget scope:** the shortlist plans around $500 and up to $800 for main equipment before tax and accessories. “Flexible” removes the filter within the available shortlist; it does not promise premium recommendations above its current range.
- **Outside the first release:** commercial café machines, capsule systems, standalone coffee or accessory reviews, and claims of hands-on product testing.
- **Homepage promise:** help U.S. buyers find a home espresso machine and grinder by total gear budget, drink style, and preferred amount of hands-on work.

## Pages

- `index.html` — homepage and interactive setup finder (budget, drink, workflow)
- `guides.html` — beginner guide, buying checklist, and recommendation methodology
- `compare.html` — semi-automatic and automatic machines plus espresso grinder comparisons

## Visual system

Editorial headings use Palatino with Trebuchet MS for product details and controls. The main canvas is white, with cacao-brown type, copper calls to action, and muted green as a secondary accent. Keep interface text at 13–16px where it carries information; reserve smaller type for short decorative labels. Most design tokens and responsive type rules live near the end of `styles.css`.

The finder runs entirely in the visitor’s browser. The header search filters the curated shortlist by model and workflow details. There is no backend, account, analytics, or cookie storage. It starts with a static shortlist if JavaScript is unavailable.

See [PRODUCT_SHORTLIST.md](PRODUCT_SHORTLIST.md) for the validated first-release models, price bands, selection rationale, and alternatives considered.

See [FINDER_SPEC.md](FINDER_SPEC.md) for the agreed budget, drink, workflow, search, empty-state, and reset behavior. The JavaScript implementation is roadmap step 6.

## Affiliate links and disclosures

Amazon links use the Associates tag `cofmac93-20` and open model-specific Amazon product pages. Check the selected variant, seller, current price, and stock before purchase. The site-wide banner and footer disclose these affiliate links; Amazon anchors use `rel="sponsored nofollow noopener"`.

The site includes the statement, “As an Amazon Associate I earn from qualifying purchases,” near the top and in every page footer, with a plain-language disclosure in the buying guide. Product photos are local files in `assets/`; their Amazon ASIN map is in [PRODUCT_SHORTLIST.md](PRODUCT_SHORTLIST.md). The site does not copy live prices, ratings, or review excerpts. Recheck product links and disclosures whenever the pages are substantially changed.

## Product and editorial notes

Recommendations compare published manufacturer specifications and everyday workflow fit. They are not claims of hands-on testing or product ownership. Product details were reviewed in October 2026. Recheck product names, model numbers, specifications, Amazon search queries, and budget bands before publishing and on a regular schedule.

Primary product references:

- [Breville Bambino](https://www.breville.com/en-us/product/bes450)
- [Breville Bambino Plus](https://www.breville.com/en-us/product/BES500)
- [Gaggia Classic Pro E24](https://www.gaggia-na.com/collections/color-industrial-gray/products/gaggia-classic-pro)
- [De’Longhi Magnifica Start](https://www.delonghi.com/en-us/c/coffee-e-espresso/coffee-machines/automatic-espresso-machines/magnifica/magnifica-start)
- [Baratza Encore ESP](https://www.baratza.com/en-us/product/ZCG495)
- [Fellow Opus 2](https://fellowproducts.com/products/opus-2-conical-burr-grinder)

## Publish with GitHub Pages

1. Create a GitHub repository and push these files to its default branch.
2. In **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
3. The root `CNAME` file is set to `espressaroo.com`. In Pages settings, confirm that custom domain. At your DNS provider, add the GitHub Pages apex records and a `www` CNAME pointing to your account’s `username.github.io` domain. Follow [GitHub’s current custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and enable **Enforce HTTPS** when GitHub offers it.
4. Once DNS and publishing finish, open `https://espressaroo.com/`, follow each page link, and confirm affiliate links open the expected Amazon product page with the tag intact.

If you want to preview at a repository URL before the custom domain is connected, temporarily remove the `CNAME` file and use relative page and asset URLs. The canonical URLs and sitemap in this launch configuration are for `https://espressaroo.com/`.

## Updating content

Edit product cards in `index.html`, the `recommendations` array in `app.js`, and the comparison details in `compare.html` together. Update `sitemap.xml` when adding or removing a page. Keep affiliate disclosures adjacent to new product links, and retain `rel="sponsored nofollow noopener"` on outbound Amazon links.
