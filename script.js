document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // Shared state
  // ==========================================
  const bagKey = "zaraBagCount";
  const cookieKey = "zaraCookieConsent";
  const savedBag = Number(localStorage.getItem(bagKey) || 0);
  let bagCount = Number.isFinite(savedBag) ? savedBag : 0;

  function updateBagDisplay() {
    document.querySelectorAll(".bag").forEach((bagEl) => {
      bagEl.textContent = `★ Bag (${bagCount})`;
    });
    localStorage.setItem(bagKey, String(bagCount));
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  updateBagDisplay();

  // ==========================================
  // Cookie consent popup
  // ==========================================
  const cookieModal = document.getElementById("cookieModal");

  function openCookieModal() {
    if (cookieModal) {
      cookieModal.classList.add("show");
    }
  }

  function closeCookieModal() {
    if (cookieModal) {
      cookieModal.classList.remove("show");
    }
  }

  if (!localStorage.getItem(cookieKey)) {
    openCookieModal();
  }

  document.querySelectorAll("[data-cookie-choice]").forEach((btn) => {
    btn.addEventListener("click", function () {
      const choice = this.dataset.cookieChoice;
      localStorage.setItem(cookieKey, choice);
      closeCookieModal();
      showToast(choice === "accepted" ? "Cookies accepted." : "Cookies declined.");
    });
  });

  // ==========================================
  // Search redirect
  // ==========================================
  const topSearchForm = document.getElementById("topSearchForm");
  const topSearchInput = document.getElementById("topSearchInput");

  if (topSearchForm && topSearchInput) {
    topSearchForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const value = topSearchInput.value.trim().toLowerCase();

      if (!value) {
        showToast("Please enter a search term.");
        return;
      }

      const routes = [
        { match: ["home", "index", "main", "landing"], url: "index.html" },
        { match: ["product", "products", "shop", "fashion"], url: "products.html" },
        { match: ["store", "locator", "location", "store locator"], url: "store-locator.html" },
        { match: ["support", "customer support", "help", "contact"], url: "customer-support.html" },
        { match: ["about", "about us", "company"], url: "about-us.html" }
      ];

      const match = routes.find((route) =>
        route.match.some((key) => value.includes(key))
      );

      if (match) {
        window.location.href = match.url;
      } else {
        window.location.href = "products.html";
      }
    });
  }

  // ==========================================
  // Home newsletter form
  // ==========================================
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("newsletterEmail");
      const email = emailInput.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("Please enter a valid email address.");
        return;
      }

      showToast("Successfully subscribed.");
      newsletterForm.reset();
    });
  }

  // ==========================================
  // Product page sorting + search filtering
  // ==========================================
  const sortSelect = document.getElementById("productSort");
  const productSearch = document.getElementById("productSearch");
  const productGrid = document.querySelector(".product-grid");
  const productCards = Array.from(document.querySelectorAll(".product-card"));

  function getVisibleProducts() {
    if (!productGrid) return [];

    let cards = productCards.filter((card) => {
      const query = productSearch ? productSearch.value.trim().toLowerCase() : "";
      const text = card.textContent.toLowerCase();

      if (!query) return true;
      return text.includes(query);
    });

    if (sortSelect) {
      const selected = sortSelect.value;

      cards = [...cards].sort((a, b) => {
        const aPrice = Number(a.dataset.price || 0);
        const bPrice = Number(b.dataset.price || 0);

        if (selected === "low-high") return aPrice - bPrice;
        if (selected === "high-low") return bPrice - aPrice;
        return 0;
      });
    }

    return cards;
  }

  function renderProducts() {
    if (!productGrid) return;

    const visibleProducts = getVisibleProducts();
    productCards.forEach((card) => {
      card.style.display = "none";
    });

    visibleProducts.forEach((card) => {
      card.style.display = "block";
      productGrid.appendChild(card);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", renderProducts);
  }

  if (productSearch) {
    productSearch.addEventListener("input", renderProducts);
  }

  // ==========================================
  // Product favorites
  // ==========================================
  const favoriteButtons = document.querySelectorAll(".heart-btn");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("liked");
      showToast("Added 1 item to favorites.");
    });
  });

  // ==========================================
  // Add to bag
  // ==========================================
  const addToBagButtons = document.querySelectorAll(".add-button");
  addToBagButtons.forEach((button) => {
    button.addEventListener("click", function () {
      bagCount += 1;
      updateBagDisplay();
      showToast("Added item to bag.");
    });
  });

  // ==========================================
  // Pagination
  // ==========================================
  const pageButtons = document.querySelectorAll(".page-btn");
  pageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const page = Number(this.dataset.page || 1);
      const cardsPerPage = 2;
      const startIndex = (page - 1) * cardsPerPage;
      const cards = getVisibleProducts();

      productCards.forEach((card) => {
        card.style.display = "none";
      });

      const pageCards = cards.slice(startIndex, startIndex + cardsPerPage);

      if (pageCards.length === 0) {
        showToast("No products on this page.");
        return;
      }

      pageCards.forEach((card) => {
        card.style.display = "block";
        productGrid.appendChild(card);
      });

      pageButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const firstCard = pageCards[0];
      if (firstCard) firstCard.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ==========================================
  // Support form validation
  // ==========================================
  const supportForm = document.getElementById("supportForm");
  if (supportForm) {
    supportForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("customerName");
      const email = document.getElementById("customerEmail");
      const message = document.getElementById("customerMessage");

      let valid = true;

      if (!name.value.trim()) {
        valid = false;
      }

      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        valid = false;
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        valid = false;
      }

      if (!valid) {
        showToast("Please complete all required fields correctly.");
        return;
      }

      showToast("Message sent.");
      supportForm.reset();
    });
  }

  // ==========================================
  // Mobile nav toggle
  // ==========================================
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-navigation");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // ==========================================
  // FAQ toggles optional
  // ==========================================
  document.querySelectorAll(".faq-section details").forEach((detail) => {
    detail.addEventListener("toggle", function () {
      if (this.open) {
        document.querySelectorAll(".faq-section details").forEach((other) => {
          if (other !== this) other.removeAttribute("open");
        });
      }
    });
  });

  // Do initial render if product page
  renderProducts();
});

document.addEventListener("DOMContentLoaded", function () {
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(function () {
      toast.classList.remove("show");
    }, 2500);
  }

  const supportForm = document.getElementById("supportForm");
  if (supportForm) {
    supportForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("customerName");
      const email = document.getElementById("customerEmail");
      const message = document.getElementById("customerMessage");
      const errorBox = supportForm.querySelector(".form-error");
      const successBox = supportForm.querySelector(".form-success");

      let valid = true;

      if (!name.value.trim()) {
        valid = false;
      }

      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        valid = false;
      }

      if (!message.value.trim() || message.value.trim().length < 10) {
        valid = false;
      }

      if (!valid) {
        if (errorBox) {
          errorBox.textContent = "Please complete all required fields correctly.";
        }
        if (successBox) {
          successBox.textContent = "";
        }
        showToast("Please complete all required fields correctly.");
        return;
      }

      if (errorBox) errorBox.textContent = "";
      if (successBox) successBox.textContent = "Message sent successfully.";

      showToast("Message sent.");

      supportForm.reset();
    });
  }
});