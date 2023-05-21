const priceScope = document.querySelectorAll(".price_scope_action > button");
const cardWrapper = document.querySelectorAll("section .card_wrapper");
const priceValue = document.querySelectorAll("section .card_content h3 b");

priceScope.forEach((scope) => {
  scope.addEventListener("click", (e) => {
    priceScope.forEach((action) => action.classList.remove("active"));
    scope.classList.add("active");
    scopeItem(scope.dataset.scope);
  });
});

cardWrapper.forEach((card) => {
  card.addEventListener("click", (e) => {
    cardWrapper.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});

function scopeItem(scope) {
  if (scope === "monthly") {
    priceValue.forEach((val) => {
      val.textContent = calculatePricing(val.dataset.value, 0);
    });
  } else {
    priceValue.forEach((val) => {
      val.textContent = Math.round(
        calculatePricing(val.dataset.value * 12, -20)
      );
    });
  }
}

function calculatePricing(current, percent) {
  return current * (1 + percent / 100);
}
