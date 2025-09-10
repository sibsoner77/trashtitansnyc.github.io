document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const zip = e.target[0].value;
  const type = e.target[1].value;
  let price = 0;

  switch (type) {
    case "Single Item":
      price = 75;
      break;
    case "Full Load":
      price = 250;
      break;
    case "Furniture":
      price = 150;
      break;
    case "Appliances":
      price = 125;
      break;
  }

  document.getElementById("quoteResult").innerText = `Estimated Price: $${price} in ${zip}`;
});