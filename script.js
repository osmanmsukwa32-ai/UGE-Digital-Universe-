
/* =====================================
   UGE DIGITAL UNIVERSE
   JavaScript - Main Functions
===================================== */

// 1. MOBILE NAVIGATION MENU
const menuToggle = document.querySelector(
  ".menu-toggle, .hamburger, #menuToggle"
);

const navigation = document.querySelector(
  ".nav-links, .navigation, nav"
);

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}


// 2. UNIVERSAL SEARCH
const searchInput = document.querySelector(
  "#searchInput, #search, .search-box input, input[type='search']"
);

const searchForm = document.querySelector(
  ".search-box, #searchForm, form"
);

const searchableCards = document.querySelectorAll(
  ".card, .category-card, .tool-card, .quick-card, .access-card, .feature-card, .universe-card"
);

if (searchInput) {

  function performSearch() {
    const searchText = searchInput.value
      .toLowerCase()
      .trim();

    let resultsFound = 0;

    searchableCards.forEach(function (card) {
      const cardText = card.textContent.toLowerCase();

      if (cardText.includes(searchText)) {
        card.style.display = "";
        resultsFound++;
      } else {
        card.style.display = "none";
      }
    });

    if (searchText === "") {
      searchableCards.forEach(function (card) {
        card.style.display = "";
      });
    }

    console.log("Search results:", resultsFound);
  }

  searchInput.addEventListener("input", performSearch);

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      performSearch();
    });
  }
}


// 3. BUTTON INTERACTIONS
const actionButtons = document.querySelectorAll(
  ".btn, .button, .action-btn"
);

actionButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const buttonText = button.textContent.trim();

    if (buttonText !== "") {
      console.log("Button clicked:", buttonText);
    }

  });

});


// 4. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = link.getAttribute("href");

    if (targetId && targetId !== "#") {

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    }

  });

});


// 5. FOOTER CURRENT YEAR
const yearElement = document.querySelector(
  "#currentYear, .current-year"
);

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// 6. WEBSITE READY MESSAGE
document.addEventListener("DOMContentLoaded", function () {

  console.log(
    "UGE Digital Universe is ready!"
  );

});
