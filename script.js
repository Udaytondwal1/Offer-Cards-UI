document.querySelectorAll('input[name="offer"]').forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelectorAll(".offer-card").forEach((card) => {
      card.classList.remove("active");
      card.style.height = "75px";

      const options = card.querySelector(".options2");
      if (options) {
        options.style.display = "none";
      }

      // Remove Style to new active card
      ToggleStyle("remove", card);
    });

    const activeCard = document.querySelector(
      `.offer-card[data-offer="${input.value}"]`
    );

    if (activeCard) {
      activeCard.classList.add("active");
      activeCard.style.height = "auto";

      const options = activeCard.querySelector(".options2");
      if (options) {
        options.style.display = "flex";
      }

      // Add Style to new active card
      ToggleStyle("add", activeCard);
    }
  });
});

function ToggleStyle(action, activeCard) {
  const popularCard = activeCard.querySelector("#hf");
  if (popularCard) {
    const parent = popularCard.parentElement;
    if (action === "add") {
      parent.style.height = "auto";
      parent.style.paddingTop = "20px";
    } else if (action === "remove") {
      parent.style.height = "75px";
      parent.style.paddingTop = "10px";
    }
  }
}
