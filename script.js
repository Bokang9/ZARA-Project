document.addEventListener("DOMContentLoaded", function () {
  const bagKey = "zaraBagCount"; const cookieKey = "zaraCookieConsent";
  let bagCount = Number(localStorage.getItem(bagKey) || 0);
  const productGrid = document.querySelector(".product-grid");
  const initialCards = Array.from(document.querySelectorAll(".product-card"));
  
  function updateBagDisplay() {
    document.querySelectorAll(".bag").forEach(el => el.textContent = `★ Bag (${bagCount})`);
    localStorage.setItem(bagKey, String(bagCount));
  }
  function showToast(message) {
    const toast = document.getElementById("toast"); if (!toast) return;
    toast.textContent = message; toast.classList.add("show");
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 2500);
  }
  updateBagDisplay();

  // Cookie Modal
  const cookieModal = document.getElementById("cookieModal");
  if (cookieModal && !localStorage.getItem(cookieKey)) cookieModal.classList.add("show");
  document.querySelectorAll("[data-cookie-choice]").forEach(btn => {
    btn.addEventListener("click", function() {
      localStorage.setItem(cookieKey, this.dataset.cookieChoice);
      cookieModal.classList.remove("show");
      showToast(this.dataset.cookieChoice === "accepted" ? "Cookies accepted." : "Cookies declined.");
    });
  });

  // Hamburger - REQUIRED
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-navigation");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open"); hamburger.setAttribute("aria-expanded","false");
    }));
  }

  // Dynamic Product Loading + Search + Sort - REQUIRED
  const productsData = [
    {name:"Men's Clothing", price:1200, img:"Media/product 5.jpg", cat:"men"},
    {name:"Women's Clothing", price:1000, img:"Media/product 2 .jpg", cat:"women"},
    {name:"Kids' Clothing", price:850, img:"Media/product 3.jpg", cat:"kids"},
    {name:"New Arrivals - Jacket", price:1500, img:"Media/product image.jpg", cat:"new"},
    {name:"Accessories", price:900, img:"Media/product 6.jpg", cat:"accessories"},
    {name:"Sale Item", price:500, img:"Media/product 4.jpg", cat:"sale"}
  ];

  function renderProducts() {
    if (!productGrid) return;
    const query = (document.getElementById("productSearch")?.value || "").toLowerCase();
    const sort = document.getElementById("productSort")?.value || "recommended";
    let filtered = [...initialCards];
    if (query) filtered = filtered.filter(c => c.textContent.toLowerCase().includes(query));
    if (sort === "low-high") filtered.sort((a,b) => Number(a.dataset.price) - Number(b.dataset.price));
    if (sort === "high-low") filtered.sort((a,b) => Number(b.dataset.price) - Number(a.dataset.price));
    initialCards.forEach(c => c.style.display = "none");
    filtered.forEach(c => { c.style.display = "block"; productGrid.appendChild(c); });
    document.querySelector(".product-count")?.replaceChildren(document.createTextNode(`${filtered.length} Items`));
  }
  document.getElementById("productSort")?.addEventListener("change", renderProducts);
  document.getElementById("productSearch")?.addEventListener("input", renderProducts);
  renderProducts();

  // Header Search - REQUIRED functional
  document.getElementById("topSearchForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const q = document.getElementById("topSearchInput").value.trim().toLowerCase();
    if (!q) { showToast("Please enter a product name."); return; }
    if (productGrid) {
      document.getElementById("productSearch").value = q; renderProducts();
      const visible = initialCards.filter(c => c.style.display !== "none").length;
      showToast(visible ? `${visible} product(s) found.` : "No products match.");
    } else {
      // Redirect to product page with search
      localStorage.setItem("pendingSearch", q);
      window.location.href = "Product Page.html";
    }
  });
  // Handle pending search from other pages
  const pending = localStorage.getItem("pendingSearch");
  if (pending && productGrid) {
    const input = document.getElementById("productSearch");
    if (input) { input.value = pending; renderProducts(); }
    localStorage.removeItem("pendingSearch");
  }

  // Lightbox Gallery - REQUIRED for interactive elements
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox"; lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><img alt="Product view">';
  document.body.appendChild(lightbox);
  const lbImg = lightbox.querySelector("img");
  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.classList.remove("show"));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("show"); });
  document.querySelectorAll(".product-image img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => { lbImg.src = img.src; lbImg.alt = img.alt; lightbox.classList.add("show"); });
  });

  // Favorites & Bag
  document.querySelectorAll(".heart-btn").forEach(btn => btn.addEventListener("click", function(){
    this.classList.toggle("liked"); showToast(this.classList.contains("liked") ? "Added to favorites." : "Removed from favorites.");
  }));
  document.querySelectorAll(".add-button").forEach(btn => btn.addEventListener("click", () => { bagCount++; updateBagDisplay(); showToast("Added item to bag."); }));

  // Forms Validation + AJAX - REQUIRED
  function validateAndSubmit(form, statusEl, successMsg){
    form.addEventListener("submit", async function(e){
      e.preventDefault();
      let valid = true;
      form.querySelectorAll("[required]").forEach(input => {
        const val = input.value.trim();
        let fieldValid = !!val;
        if (input.type === "email") fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (input.tagName === "TEXTAREA") fieldValid = val.length >= 10;
        input.setAttribute("aria-invalid", String(!fieldValid));
        if (!fieldValid) valid = false;
      });
      if (!valid) { statusEl.textContent = "Please complete all required fields correctly."; statusEl.style.color = "red"; showToast("Please fix form errors."); return; }
      statusEl.textContent = "Submitting..."; statusEl.style.color = "black";
      try {
        // Simulate AJAX submission
        await new Promise(r => setTimeout(r, 800));
        // await fetch("submit-form.php", {method:"POST", body:new FormData(form)});
        statusEl.textContent = successMsg; statusEl.style.color = "green";
        showToast(successMsg); form.reset();
      } catch {
        statusEl.textContent = "There was an error. Please try again."; statusEl.style.color = "red";
      }
    });
  }
  const supportForm = document.getElementById("supportForm");
  if (supportForm) validateAndSubmit(supportForm, supportForm.querySelector(".form-success") || supportForm.querySelector(".form-error"), "Message sent successfully.");
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(e){
      e.preventDefault();
      const email = document.getElementById("newsletterEmail");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { showToast("Enter valid email."); email.focus(); return; }
      showToast("Successfully subscribed."); newsletterForm.reset();
    });
  }
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) validateAndSubmit(enquiryForm, document.getElementById("enquiryStatus"), "Your enquiry has been submitted successfully.");
  const contactForm = document.getElementById("contactForm");
  if (contactForm) validateAndSubmit(contactForm, document.getElementById("contactStatus"), "Your message has been sent successfully.");
});