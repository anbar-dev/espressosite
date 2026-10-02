# Espressaroo project roadmap

This is the agreed sequence for taking Espressaroo from its current draft to a reviewed, publishable GitHub Pages site. Complete each step separately and review its result before moving on.

## 1. Define the audience and scope — complete

- **Market:** United States; USD; Amazon.com affiliate links with Associates tag `cofmac93-20`.
- **Primary audience:** Reddit visitors selecting a first or next home espresso setup. The main reader is a beginner or informed newcomer comparing a practical shortlist; the content does not claim to be expert lab testing.
- **Included equipment:** semi-automatic espresso machines and espresso-capable grinder pairings, plus bean-to-cup automatic machines with an integrated grinder.
- **Questions covered:** total main-gear budget, milk drinks vs. straight espresso, manual vs. low-fuss workflow, and which machine/grinder combination fits.
- **Budget boundary for the current release:** planning bands around $500 and up to $800 before tax and accessories. “Flexible” means show the available shortlist without a budget filter; the site does not promise models above its current range.
- **Out of scope:** commercial equipment, capsule machines, standalone coffee or accessory reviews, and unsupported claims of hands-on testing.
- **Homepage promise:** “Find your home espresso machine and grinder” by budget, drink style, and preferred amount of hands-on work. The homepage now names U.S. home espresso buyers and these choices directly.

## 2. Review the product shortlist — complete

The four featured setups cover a separate-grinder pair near $500, a semi-automatic with easier milk, a more traditional E24 machine, and a one-touch bean-to-cup option. Manufacturer-listed planning totals are $499.90, $699.90, $748.95, and $749.95 respectively, before tax and accessories. The exact De’Longhi variant is ECAM22080B EX:1 (LatteCrema, listed at $749.95); the silver ECAM22080SB is listed at $799.95 and the ECAM22022B has manual milk frothing. A Barista Express with an integrated grinder is retained as a comparison-page alternative. Current U.S. model, price, source, and selection notes are in [PRODUCT_SHORTLIST.md](PRODUCT_SHORTLIST.md).

The matching homepage and comparison links were updated to search Amazon for the selected ECAM22080B variant. Recheck listing identity and availability as part of step 9.

## 3. Strengthen each recommendation — complete

Each homepage setup now states who it suits, its practical advantage, expected daily workflow, chief trade-off, who should choose something else, and expected main-gear budget. The budgets use the manufacturer list-price estimates from step 2 and exclude tax and accessories. Copy is based on manufacturer-published information and is presented as research-based guidance, not hands-on review.

## 4. Make the comparisons decision-ready — complete

The comparison page now starts with quick answers for a ~$500 starter setup, frequent milk drinks, one-touch convenience, and a traditional manual routine. Its semi-automatic table explains grinder role, milk workflow, learning curve, setup budget, and the trade-off for spending more on the Bambino Plus. The Barista Express is included as the single relevant alternative for buyers who want a semi-automatic with an integrated grinder; the main four-pick shortlist is unchanged. The grinder section now contrasts the espresso-focused Encore ESP with the multi-brew Opus 2, and the automatic-machine section spells out the exact Magnifica variant and daily workflow.

## 5. Specify the finder behavior — complete

The behavior contract is in [FINDER_SPEC.md](FINDER_SPEC.md). Budget and workflow are hard eligibility filters, drink preference ranks eligible setups, and search combines with filters while recognizing comparison-only products as separate guide links. The spec defines zero-result recovery, header-search defaults, and full versus search-only reset. Step 6 implements these rules in JavaScript.

## 6. Fix and implement the finder and search — complete

The plain-JavaScript finder now uses flexible budget, mixed drinks, and a neutral workflow on first visit. Budget and workflow are hard filters; drink choice reorders eligible matches and labels the strongest fit. Search normalizes case, accents, apostrophes, dashes, and partial model terms across recommendations, and returns comparison-only Barista Express and Opus 2 links separately from the setup count. Empty states preserve selections and offer the specified clear, relax-workflow, or raise-budget actions. Clear search removes only `q`; Clear all restores every neutral choice and removes `q`.

## 7. Refine the homepage journey — planned

Bring the audience, budget selector, and fastest path to relevant recommendations into the first screen, especially on mobile. Make navigation labels accurately describe what their controls do.

## 8. Refine and inspect the visual system — planned

Keep the white background and espresso-specific palette, improve type consistency and contrast, and check layout and text sizes at desktop and mobile widths. Use product imagery only when its usage is authorized.

## 9. Verify affiliate links and disclosures — planned

Check model-specific Amazon search links, tag `cofmac93-20`, sponsored link attributes, and disclosure placement. Confirm each destination makes the intended model or variant easy to identify.

## 10. Complete technical SEO and GitHub Pages deployment — planned

Review titles, descriptions, canonical URLs, sitemap, robots file, and relative paths. Configure GitHub Pages and the custom domain, then verify DNS, HTTPS/certificate status, page navigation, and affiliate links on the published site.
