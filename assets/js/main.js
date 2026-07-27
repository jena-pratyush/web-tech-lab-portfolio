const cards = document.querySelectorAll(".exercise-card");

cards.forEach((card, index) => {
  card.style.setProperty("--order", index + 1);
});
