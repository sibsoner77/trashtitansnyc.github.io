// Config
const TT_PHONE_DISPLAY = "1-347-321-4392";
const TT_PHONE_TEL = "13473214392";

// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Instant estimate calculator
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form && form.id === "estimate-form") {
    e.preventDefault();
    const load = parseFloat(form.load.value || "1");
    const type = form.type.value;
    const borough = form.borough.value;

    // Base pricing
    let base = 120;
    let perTruck = 420;
    let loadPrice = perTruck * load;

    // Type adjustment
    let typeAdj = 0;
    if (type === "heavy") typeAdj = 80;
    if (type === "appliance") typeAdj = 50;
    if (type === "mattress") typeAdj = 30;

    // Borough adjustment
    let boroughAdj = 0;
    if (borough === "Manhattan") boroughAdj = 40;

    // Final estimate
    const est = Math.round((base + loadPrice + typeAdj + boroughAdj) / 5) * 5;
    const low = Math.max(95, est - 40);
    const high = est + 40;

    const out = document.getElementById("estimate-result");
    if (out) {
      out.innerHTML = `
        <strong>Estimated price:</strong> $${low}–$${high} before tax and disposal nuances.<br/>
        <small>Exact price confirmed on arrival. Call <a href="tel:${TT_PHONE_TEL}">${TT_PHONE_DISPLAY}</a> for a firm quote.</small>
      `;
    }
  }
});

// Gallery filters
document.addEventListener("change", (e) => {
  const bSel = document.getElementById("filter-borough");
  const tSel = document.getElementById("filter-type");
  if (!bSel || !tSel) return;

  const b = bSel.value;
  const t = tSel.value;

  document.querySelectorAll(".gallery-card").forEach(card => {
    const okB = !b || card.dataset.borough === b;
    const okT = !t || card.dataset.type === t;
    card.style.display = (okB && okT) ? "" : "none";
  });
});