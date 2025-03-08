document.querySelectorAll('input[name="offer"]').forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelectorAll(".offer-card").forEach((card) => {
      card.classList.remove("active");
      card.style.height = "75px";
      const options = card.querySelector(".options2");
      if (options) {
        options.style.display = "none";
      }
    });
    const activeCard = document.querySelector(
      `.offer-card[data-offer="${input.value}"]`
    );
    activeCard.classList.add("active");
    activeCard.style.height = "auto";
    const options = activeCard.querySelector(".options2");
    if (options) {
      options.style.display = "flex";
    }
  });
});
