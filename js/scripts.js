const seeMoreBtn = document.querySelector(".button");
const modal = document.getElementById("photoModal");
const closeBtn = document.querySelector(".close-button");

seeMoreBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
