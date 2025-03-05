document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
      this.querySelector(".dropdown-menu").style.display = "none";
    });
  });
});
