const recommendations = [
  {
    id: "bambino-encore",
    title: "Breville Bambino + Baratza Encore ESP",
    badge: "BEST STARTER PAIR",
    tone: "green",
    index: "01",
    intro: "An approachable semi-auto combo for learning espresso, with a separate grinder built into the budget.",
    machine: "Breville Bambino",
    machineNote: "BES450 · fast warm-up · manual steam wand",
    machineQuery: "Breville+Bambino+BES450+espresso+machine",
    grinder: "Baratza Encore ESP",
    grinderNote: "Espresso-focused grind adjustment",
    grinderQuery: "Baratza+Encore+ESP+espresso+grinder",
    verdictLabel: "Why this pair:",
    verdict: "It reaches a separate-grinder setup near the $500 planning band.",
    bestFor: "First-time buyers who want to learn espresso and mostly drink straight shots, with occasional milk drinks.",
    dailyRoutine: "Grind and dose, tamp, pull the shot, then steam milk by hand when wanted.",
    tradeoff: "You’ll need to dial in the grinder and learn to texture milk; this is not a push-button routine.",
    skipIf: "You make milk drinks every day but don’t want to steam milk or practice the workflow.",
    gearBudget: "$499.90 total: $299.95 machine + $199.95 grinder, using manufacturer list prices.",
    budget: 500,
    drinks: ["milk", "espresso", "both"],
    workflow: ["any", "hands-on"]
  },
  {
    id: "bambino-plus-encore",
    title: "Breville Bambino Plus + Encore ESP",
    badge: "MILK MADE EASIER",
    tone: "amber",
    index: "02",
    intro: "Keep the hands-on espresso routine, with automatic or manual milk texturing when you want it.",
    machine: "Bambino Plus",
    machineNote: "BES500 · automatic or manual milk texturing",
    machineQuery: "Breville+Bambino+Plus+BES500+espresso+machine",
    grinder: "Encore ESP",
    grinderNote: "Espresso-focused grind adjustment",
    grinderQuery: "Baratza+Encore+ESP+espresso+grinder",
    verdictLabel: "Advantage:",
    verdict: "Choose among milk temperature and texture settings, or take over steaming by hand.",
    bestFor: "Frequent latte or cappuccino drinkers who still want to make espresso with a portafilter.",
    dailyRoutine: "Grind, dose, tamp, and pull the shot yourself; choose automatic milk texture or steam manually.",
    tradeoff: "It costs about $200 more than the Bambino pair, and espresso prep still takes practice.",
    skipIf: "You mainly want one-button coffee with no separate grinder or hands-on espresso prep.",
    gearBudget: "$699.90 total: $499.95 machine + $199.95 grinder, using manufacturer list prices.",
    budget: 800,
    drinks: ["milk", "espresso", "both"],
    workflow: ["any", "hands-on", "easy-milk"]
  },
  {
    id: "magnifica-start",
    title: "De’Longhi Magnifica Start",
    badge: "LOW-FUSS ROUTINE",
    tone: "blue",
    index: "03",
    intro: "A bean-to-cup automatic with integrated grinding and one-touch drinks, including automatic milk on this variant.",
    machine: "Magnifica Start",
    machineNote: "ECAM22080B EX:1 · built-in grinder and LatteCrema milk",
    machineQuery: "De%27Longhi+Magnifica+Start+ECAM22080B+LatteCrema",
    verdictLabel: "Advantage:",
    verdict: "It handles grinding and brewing with one-touch drinks and automatic milk-system cleaning after use.",
    bestFor: "Households that want espresso-based drinks, including milk drinks, with very few preparation steps.",
    dailyRoutine: "Add beans and water, choose a drink, and let the machine grind and brew; LatteCrema froths and cleans automatically after use.",
    tradeoff: "You get fewer direct choices over grinding, dosing, tamping, and each shot than with a semi-automatic setup.",
    skipIf: "You want a portafilter routine, to learn manual espresso skills, or to adjust each shot yourself.",
    gearBudget: "$749.95 for the all-in-one machine, using the manufacturer’s listed price.",
    budget: 800,
    drinks: ["milk", "espresso", "both"],
    workflow: ["any", "push-button"]
  },
  {
    id: "gaggia-encore",
    title: "Gaggia Classic Pro E24 + Encore ESP",
    badge: "HANDS-ON CLASSIC",
    tone: "rose",
    index: "04",
    intro: "A traditional portafilter setup for someone who wants to learn a more involved manual routine.",
    machine: "Gaggia Classic Pro E24",
    machineNote: "E24 · brass boiler · manual steam wand",
    machineQuery: "Gaggia+Classic+Pro+E24+espresso+machine",
    grinder: "Baratza Encore ESP",
    grinderNote: "Espresso-focused grind adjustment",
    grinderQuery: "Baratza+Encore+ESP+espresso+grinder",
    verdictLabel: "Advantage:",
    verdict: "A 58 mm portafilter, single boiler, and traditional steam wand create a more hands-on setup.",
    bestFor: "Buyers who want a traditional portafilter setup and are interested in learning a hands-on routine.",
    dailyRoutine: "Grind, dose, tamp, and brew; then switch the single boiler to steam and texture milk by hand.",
    tradeoff: "The single boiler and manual controls call for more waiting, practice, and attention than the Bambino pair.",
    skipIf: "You want automatic milk, one-touch drinks, or the shortest route from waking up to coffee.",
    gearBudget: "$748.95 total: $549 machine + $199.95 grinder, using manufacturer list prices.",
    budget: 800,
    drinks: ["milk", "espresso", "both"],
    workflow: ["any", "hands-on"]
  }
];

function affiliateUrl(query) {
  return `https://www.amazon.com/s?k=${query}&tag=cofmac93-20`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderRecommendation(item) {
  const isAutomatic = !item.grinder;
  const machineBlock = `<div><span class="pair-label">${isAutomatic ? "ALL-IN-ONE MACHINE" : "MACHINE"}</span><strong>${escapeHtml(item.machine)}</strong><small>${escapeHtml(item.machineNote)}</small></div>`;
  const grinderBlock = item.grinder
    ? `<span class="pair-plus">+</span><div><span class="pair-label">GRINDER</span><strong>${escapeHtml(item.grinder)}</strong><small>${escapeHtml(item.grinderNote)}</small></div>`
    : "";
  const grinderLink = item.grinder
    ? `<a class="secondary-card-link affiliate-link" href="${affiliateUrl(item.grinderQuery)}" target="_blank" rel="sponsored nofollow noopener">See the ${escapeHtml(item.grinder)} too ↗</a>`
    : "";
  const recommendationFacts = [
    ["Best for", item.bestFor],
    ["Daily routine", item.dailyRoutine],
    ["Trade-off", item.tradeoff],
    ["Skip if", item.skipIf]
  ].map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("");
  return `<article class="setup-card ${item.id === "bambino-encore" ? "featured-card" : ""}">
    <div class="card-topline"><span class="pill pill-${item.tone}">${escapeHtml(item.badge)}</span><span class="card-index">${escapeHtml(item.index)}</span></div>
    <h3>${escapeHtml(item.title)}</h3><p class="card-intro">${escapeHtml(item.intro)}</p>
    <div class="pairing ${isAutomatic ? "single-pair" : ""}">${machineBlock}${grinderBlock}</div>
    <div class="card-verdict"><span class="verdict-icon">↗</span><p><b>${escapeHtml(item.verdictLabel)}</b> ${escapeHtml(item.verdict)}</p></div>
    <dl class="recommendation-facts">${recommendationFacts}</dl>
    <p class="gear-budget"><b>Expected main-gear budget</b><span>${escapeHtml(item.gearBudget)}</span><small>Before tax and accessories; estimate based on manufacturer list prices checked October 2026.</small></p>
    <a class="button button-card affiliate-link" href="${affiliateUrl(item.machineQuery)}" target="_blank" rel="sponsored nofollow noopener">See ${escapeHtml(item.machine)} on Amazon <span>(paid link)</span> ↗</a>
    ${grinderLink}
  </article>`;
}

function setupFinder() {
  const form = document.querySelector("#setup-finder");
  const grid = document.querySelector("#results-grid");
  if (!form || !grid) return;

  const summary = document.querySelector("#results-summary");
  const count = document.querySelector("#results-count");
  const searchInput = document.querySelector("#site-search-input");
  const initialQuery = new URLSearchParams(window.location.search).get("q")?.trim() ?? "";
  const phrases = {
    milk: "milk drinks",
    espresso: "straight espresso",
    both: "a mix of drinks"
  };

  if (initialQuery && searchInput) {
    searchInput.value = initialQuery;
    form.elements.budget.value = "any";
    form.elements.drink.value = "both";
    form.elements.workflow.value = "any";
  }

  function showMatches(event) {
    if (event) event.preventDefault();
    const formData = new FormData(form);
    const budget = formData.get("budget");
    const drink = formData.get("drink");
    const workflow = formData.get("workflow");
    const query = searchInput?.value.trim().toLowerCase() ?? "";
    const matches = recommendations.filter((item) => {
      const fitsBudget = budget === "any" || item.budget <= Number(budget);
      const fitsDrink = item.drinks.includes(drink);
      const fitsWorkflow = workflow === "any" || item.workflow.includes(workflow);
      const searchText = [item.title, item.intro, item.machine, item.machineNote, item.grinder, item.grinderNote, item.badge].filter(Boolean).join(" ").toLowerCase();
      const fitsQuery = !query || searchText.includes(query);
      return fitsBudget && fitsDrink && fitsWorkflow && fitsQuery;
    });

    summary.textContent = matches.length
      ? query
        ? `Search results for “${searchInput.value.trim()}”`
        : `Shortlist for ${phrases[drink]}${budget === "any" ? "" : ` · around $${Number(budget).toLocaleString("en-US")} max`}`
      : "No exact match for every filter — try widening your budget or workflow.";
    count.textContent = `${matches.length} ${matches.length === 1 ? "setup" : "setups"}`;
    grid.innerHTML = matches.length
      ? matches.map(renderRecommendation).join("")
      : `<div class="empty-results"><p>We don’t have a pick that fits all three answers yet.</p><button type="button" class="text-link" data-reset-finder>Show all matches ↗</button></div>`;
  }

  form.addEventListener("submit", showMatches);
  grid.addEventListener("click", (event) => {
    if (event.target.closest("[data-reset-finder]")) {
      form.elements.budget.value = "any";
      form.elements.workflow.value = "any";
      showMatches();
    }
  });
  showMatches();
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupFinder();
  setupNavigation();
  document.querySelectorAll(".current-year").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
});
