document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const zip = form.zip.value;
  const itemType = form.itemType.value;
  const date = form.date.value;
  const time = form.time.value;

  // Basic price logic
  let price = 0;
  switch (itemType) {
    case "single": price = 75; break;
    case "furniture": price = 150; break;
    case "appliances": price = 125; break;
    case "full": price = 250; break;
  }

  // Dispatch logic placeholder
  const crewAssigned = assignCrew(zip);

  document.getElementById("bookingResult").innerHTML = `
    <p>Estimated Price: $${price}</p>
    <p>Pickup Scheduled: ${date} at ${time}</p>
    <p>Crew Assigned: ${crewAssigned}</p>
    <p><strong>Next:</strong> Stripe payment integration goes here.</p>
  `;
});

// Dummy crew assignment logic
function assignCrew(zip) {
  const crews = {
    "10001": "NYC Crew A",
    "30301": "Atlanta Crew B",
    "90001": "LA Crew C"
  };
  return crews[zip] || "Crew Pending Assignment";
}