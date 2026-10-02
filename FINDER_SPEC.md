# Espressaroo setup finder behavior

This specification defines the finder experience before its JavaScript implementation in roadmap step 6. The finder recommends complete main-gear setups, not individual products, and never calls a setup a match when it violates a selected budget or workflow.

## Filter rules

All selected filters combine with **AND**. Budget and workflow are eligibility filters; drink style ranks eligible setups rather than excluding machines that can still make the selected drink.

### Budget

- **Around $500** means a maximum main-gear setup cost of $500 before tax and accessories. The only current match is Breville Bambino + Baratza Encore ESP at about $499.90.
- **Up to $800** means a maximum main-gear setup cost of $800 before tax and accessories. All four featured setups fit the planning band.
- **I’m flexible** removes the budget ceiling but still uses the four featured setups. It does not add unreviewed premium gear.
- Compare setup totals using the manufacturer list-price estimates in `PRODUCT_SHORTLIST.md`; do not use a temporary sale price as the finder threshold.

### Drink style

All four featured setups can make espresso and milk drinks. The drink answer changes the order and the “best fit” cue, not eligibility. This avoids implying that a machine cannot make a drink just because another workflow is a better fit.

- **Milk drinks:** Bambino Plus + Encore ESP, Magnifica Start, Bambino + Encore ESP, Gaggia E24 + Encore ESP.
- **Straight espresso:** Bambino + Encore ESP, Gaggia E24 + Encore ESP, Bambino Plus + Encore ESP, Magnifica Start.
- **A mix of everything:** use the editorial default order: Bambino + Encore ESP, Bambino Plus + Encore ESP, Magnifica Start, Gaggia E24 + Encore ESP.

After other filters remove setups, preserve this relative order among the remaining matches. Identify the first result as the strongest workflow fit for that drink preference. These rankings reflect the trade-offs described on Espressaroo; they are not taste-test scores or hands-on quality ratings.

### Amount of hands-on work

- **Some learning is fine** is the neutral choice and includes all featured setups.
- **I want to learn the craft** includes the semi-automatic setups: Bambino, Bambino Plus, and Gaggia E24. All require manual shot preparation; the Bambino Plus can automate milk texturing.
- **Easier milk, real espresso workflow** includes Bambino Plus + Encore ESP. It keeps manual espresso preparation while offering automatic or manual milk texturing.
- **One button, please** includes De’Longhi Magnifica Start ECAM22080B EX:1 with LatteCrema. Do not treat the Barista Express as a one-touch setup: it is a semi-automatic with an integrated grinder and manual milk steaming.

## Search rules

- Search filters setup results in addition to any budget and workflow selections. A search from the site header starts with neutral budget, drink, and workflow values so old selections cannot unexpectedly hide the requested item.
- Normalize the query case-insensitively: trim whitespace, ignore accents and apostrophe/dash differences, and match all meaningful query terms in any order. A partial model or product name can match.
- Search product titles, machine and grinder names, exact model numbers, aliases, and descriptive tags for workflow and features. Include common spelling variants such as `DeLonghi` and `De’Longhi`.
- Featured setup search terms include Bambino/BES450, Bambino Plus/BES500, Gaggia Classic Pro/E24, Encore ESP/ZCG495, and Magnifica Start/ECAM22080B EX:1/LatteCrema.
- Recognize comparison-only products too. A search for Barista Express/BES870XL or Fellow Opus 2 shows a separate **In the comparison guide** result linking to the relevant comparison section. It is not counted or styled as a featured setup and does not claim to meet the selected budget or workflow.
- Count only complete featured setups in the setup result count. Keep comparison-guide links in a separate count-free area.

## Empty and recovery states

- Never silently remove a selected filter or show an item that fails the budget or workflow rules.
- If a query has no match, keep the filters and query visible. Offer **Clear search** (remove only the query) and **Clear all** (reset the whole finder). If a comparison-only product matched, still show its separate comparison-guide link.
- If budget and workflow have no exact match, explain the conflict and offer two explicit ways forward: relax the workflow while keeping the budget, or raise the budget while keeping the workflow. Keep the selected drink preference in both paths. For example, at $500 the Bambino pair is the semi-automatic option but requires manual milk steaming; the easier-milk Bambino Plus pair is about $699.90, while the one-touch Magnifica is about $749.95.
- For any other zero-result combination, show that no current pick meets every selection, preserve the controls, and offer **Clear all**. Do not invent an in-range or exact-fit recommendation.

## Initial state and reset

- A fresh homepage visit and **Clear all** use neutral values: flexible budget, a mix of drinks, some learning is fine, and an empty search. Show all four setups in their editorial default order.
- **Clear search** removes only the query and its `q` URL parameter; keep budget, drink, and workflow selections intact.
- **Clear all** resets every selector and the search field, removes `q` from the URL, clears any comparison-only search notice, and restores all four featured setups.
- A header search URL such as `index.html?q=Encore+ESP` populates the search field and uses the neutral selector values above. Changing filters afterward applies them together with that query.

## Implementation boundary

This is the behavior contract for roadmap step 6. It does not change the existing JavaScript, product shortlist, or page controls; implement and review those in the next step.
