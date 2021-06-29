const navToggle = document.querySelector(".hamburger-toggle");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("hamburger-open");
});

const sidebarToggle = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  document.body.classList.remove("hamburger-open");
});
