# ZARA South Africa Website Redesign

## 1. Project Title
**ZARA South Africa Website Redesign**

---

## 2. Student Information

Student Name      **Bokang Molelle**            
Student Number    **ST10524905**       
Module / Subject  **Web development**
Lecturer          **Angel Rakhumba**        
Submission Date   **18 September 2026**
Live Site         **https://bokang9.github.io/ZARA-Project/**
GitHub Repo       **https://github.com/bokang9/ZARA-Project**

---

## 3. Project Overview

The ZARA South Africa Website Redesign is a modern, responsive and user-friendly online experience for ZARA customers in South Africa.

ZARA is one of the world's foremost international fashion retailers and operates under the Inditex Group. Founded in Spain in 1975 by Amancio Ortega and Rosalia Mera, ZARA has expanded to more than 90 countries worldwide, including South Africa.

The redesigned website maintains ZARA's clean, modern and minimalist brand identity while improving how users find products, access customer support and locate physical stores.

The website was developed using HTML5, CSS3 and JavaScript, with responsive web design using Flexbox, CSS Grid, relative units and media queries.

Improvements made after initial development include: correcting file names for GitHub Pages (index.html), fixing image loading issues, correcting page alignment with Flexbox/Grid, fixing the View Careers button to Customer-support.html#careers with auto-open details JS, updating Store Locator from static map.jpg to 3 Google Maps iframes, fixing Customer Support image with max-width:100%, updating footer to responsive grid with correct links (Contact Us -> contact.html, Careers -> Customer-support.html#careers), implementing hamburger menu, product search/sort, lightbox gallery, form validation with AJAX, contact and enquiry forms, and SEO files robots.txt and sitemap.xml.

---

## 4. Website Goals and Objectives

### Goals
* Increase online clothing sales
* Improve the online shopping experience
* Increase customer engagement
* Promote new fashion collections
* Make products easier to find and explore
* Improve access to customer support
* Help customers locate physical ZARA stores
* Provide consistent experience across desktop, tablet and mobile

### Objectives
* Provide clear and simple navigation with flex-wrap to prevent 375px overflow
* Allow users to browse products in an organised product grid
* Allow users to filter by keyword and sort by price Low-High / High-Low
* Provide wishlist functionality via heart button
* Provide Bag counter functionality using localStorage
* Provide customer support with FAQ accordion and contact forms
* Provide enquiry and contact forms with validation and AJAX simulation
* Provide store locator with embedded Google Maps
* Provide responsive experience with breakpoints at 1024px, 768px, 480px
* Improve accessibility with focus-visible, labels, aria attributes
* Ensure buttons and links redirect correctly (Contact Us -> contact.html, Careers -> Customer-support.html#careers)
* Ensure images display correctly on GitHub Pages with global img rule
* Use responsive CSS techniques with relative units rem, %, em
* Maintain consistent styling across all pages with external style.css

### KPIs
* Increase website traffic by 25%
* Improve online sales conversions
* Reduce cart abandonment rates
* Increase registered customer accounts
* Improve customer satisfaction ratings

---

## 5. Technologies and Tools Used
* HTML5 — Structure and content
* CSS3 — Styling, layouts, responsive design, hover effects, transitions, box-shadow, animations
* Flexbox — Align information boxes, images, navigation, footer, button layouts
* CSS Grid — Product grids, information sections, content layouts
* CSS Media Queries — Breakpoints at 1024px and above, 768px, 480px, plus 800px and 500px fine-tuning
* Relative CSS Units — rem, %, em, min(), clamp()
* JavaScript — Hamburger toggle, product search/sort filtering, bag counter, favorites, toast notifications, cookie consent modal, lightbox gallery, form validation, AJAX simulation, auto-open details for #careers #faqs #shipping etc
* GitHub — Version control and repository management
* GitHub Pages — Hosting at https://bokang9.github.io/ZARA-Project/
* Visual Studio Code — Development environment

---

## 6. Key Features and Functionality

### Home Page (index.html)
* Promotional banner with hero image and Shop Now button
* Navigation menu with hamburger for mobile
* Search box functional - filters products on Product Page or redirects with localStorage
* Newsletter signup with label, required, email validation and toast
* Cookie consent modal with Accept/Decline stored in localStorage
* Consistent footer with 4 columns

### About Us Page (About-Us.html)
* ZARA company information, history, mission
* View Careers button redirects to Customer-support.html#careers (auto-opens details via script.js)
* Footer links fixed: Contact Us -> contact.html, Careers -> Customer-support.html#careers

### Product Page (Product-Page.html)
* Product display: 6 products with images, names, prices R500-R1500, data-price attributes
* Category strip, Search filtering, Sorting: Recommended, Price Low to High, Price High to Low
* Wishlist, Add to Bag counter stored in localStorage, lightbox gallery

### Store Locator (Store-Locator.html)
* 3 Google Maps iframes: ZARA Sandton City, ZARA Rosebank, ZARA V&A Waterfront
* Store cards with View on Map links

### Customer Support Page (Customer-support.html)
* Support cards: Customer Ratings 4.8/5, FAQs
* FAQ accordion using details/summary with IDs: faqs, shipping, returns, careers, contact, giftcard, account, privacy, terms, cookies
* JavaScript auto-open details when URL hash present (in script.js, separated from HTML)
* Careers section with 4 jobs: Sales Assistant, Department Manager, Visual Merchandiser, Stockroom Assistant

### Contact Page (contact.html)
* Contact form: Name, Email, Subject, Message, labels, required, novalidate, contactStatus aria-live
* Validation: email regex, message >=10 chars, aria-invalid
* AJAX simulation with async/await setTimeout 800ms, try/catch
* Linked from footer Customer Service -> Contact Us and main navigation

### Enquiry Page (enquiry.html)
* Enquiry form: Full Name, Email Address, Enquiry Type select (Products, Services, Sponsorship, Volunteering), Message
* Validation and AJAX simulation, enquiryStatus aria-live
* Linked from main navigation Enquiry

### Footer Updates
* Fixed Contact Us -> contact.html, Careers -> Customer-support.html#careers
* Verified FAQs, Shipping, Returns, Gift Card, My Account, Privacy, Terms, Cookies -> Customer-support.html#anchors
* Added JS to auto-open details when hash present

---

## 7. Responsive Design

### External CSS
style.css linked to all pages

### CSS Reset
* {box-sizing:border-box; margin:0; padding:0}

### Relative Units
rem, %, em, min(), clamp()

### Flexbox & Grid
Flexbox for navigation, header-actions, footer, career-callout, form-row. Grid for product grids, about-section, locator-layout, support-cards, support-layout, site-footer

### Media Queries
| Device | Breakpoint | Changes |
| Desktop | 1024px+ | 3 col product grid, 4 col footer |
| Tablet | 768px | Hamburger, 2 col product grid, 1 col about/locator/support, 2 col footer |
| Mobile | 480px | 1 col product grid, 1 col footer |

Fix 375px overflow: flex-wrap on header-actions and main-navigation, search-box min-width:0 flex:1 1 100%

### Global Image Rule
img { max-width:100%; height:auto; display:block; }

## 8. Box-Shadow and Animations
* :root --shadow: 0 8px 24px rgba(0,0,0,0.08)
* Used on .store-card, .support-card, .form-page, .cookie-modal, .product-card:hover, .button
* Hover: 0.25s ease, translateY, scale 1.04, fadeIn

## 9. Website Navigation
* Home (index.html)
* About Us (About-Us.html) -> View Careers -> Customer-support.html#careers
* Product Page (Product-Page.html) -> Search, Sort, Wishlist, Bag
* Store Locator (Store-Locator.html) -> Google Maps iframes
* Customer Support (Customer-support.html) -> FAQ anchors with auto-open JS
* Enquiry (enquiry.html) -> Enquiry form
* Contact (contact.html) -> Contact form
* Footer: Contact Us -> contact.html, Careers -> Customer-support.html#careers

## 10. SEO
* robots.txt with Allow: / and Sitemap
* sitemap.xml with 8 URLs: index.html, About-Us.html, Product-Page.html, Store-Locator.html, Customer-support.html, enquiry.html, contact.html + root
* Meta description, keywords, og:title, og:description, canonical on all pages

---

## 11. References

1. Mozilla Developer Network (MDN) Web Docs, 2024. HTML: HyperText Markup Language - HTML5 semantics, forms, accessibility attributes (aria-live, aria-expanded, required, novalidate). [online] Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 15 Oct 2026].

2. Mozilla Developer Network (MDN) Web Docs, 2024. CSS: Cascading Style Sheets - Flexbox, Grid, Media Queries, box-shadow, transitions, animations, relative units. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 15 Oct 2026].

3. Mozilla Developer Network (MDN) Web Docs, 2024. JavaScript Guide - DOM manipulation, localStorage, event listeners, async/await, try/catch, form validation. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 20 Oct 2026].

4. W3Schools, 2024. HTML details and summary tags - FAQ accordion implementation. [online] Available at: https://www.w3schools.com/tags/tag_details.asp [Accessed 21 Oct 2026].

5. W3Schools, 2024. CSS Responsive Web Design - Media Queries. [online] Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp [Accessed 22 Oct 2026].

6. W3Schools, 2024. JavaScript Form Validation - Email regex and required fields. [online] Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 29 Oct 2026].

7. ZARA Official Website, 2024. ZARA South Africa - Product layout, minimalist design inspiration, navigation structure. [online] Available at: https://www.zara.com/za/ [Accessed 10 Oct 2026].

8. Inditex Group, 2024. About ZARA - Company history, founded 1975 by Amancio Ortega and Rosalia Mera. [online] Available at: https://www.inditex.com/about-us/our-brands/zara [Accessed 10 Oct 2026].

9. Inditex Careers, 2024. Careers at ZARA - Job descriptions for Sales Assistant, Department Manager, Visual Merchandiser, Stockroom Assistant. [online] Available at: https://www.inditexcareers.com/ [Accessed 28 Oct 2026].

10. GitHub Docs, 2024. GitHub Pages - Hosting static websites, case-sensitive file naming, index.html requirement. [online] Available at: https://docs.github.com/en/pages [Accessed 12 Oct 2026].

11. Google Maps Platform, 2024. Embed a map - Using iframes for store locator (Sandton City, Rosebank, V&A Waterfront). [online] Available at: https://developers.google.com/maps/documentation/embed [Accessed 26 Oct 2026].

12. Google Developers, 2024. SEO Starter Guide - robots.txt, sitemap.xml, canonical tags, meta description, Open Graph. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 24 Oct 2026].

13. WCAG 2.1 Guidelines, 2024. Web Accessibility - Labels, focus-visible, alt text, aria-live for forms and toasts. [online] Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ [Accessed 27 Oct 2026].
