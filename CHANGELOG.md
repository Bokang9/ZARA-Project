# Changelog

| Date | Update | Description |
|------|--------|-------------|
| 30 Jul - 01 Aug 2026 | Proposal | Prepared website proposal for approval, researched ZARA brand and target audience |
| 04 - 08 Aug 2026 | Initial Build | Developed website structure in VS Code using HTML5, created 5 pages: index.html, About Us.html, Product Page.html, Store Locator.html, Customer support.html |
| 09 - 11 Aug 2026 | GitHub Setup | Created GitHub repository bokang9/ZARA-Project and pushed initial files, enabled GitHub Pages at https://bokang9.github.io/ZARA-Project/ |
| 15 Sep 2026 | Fix: File Naming | Renamed home page.html to index.html so GitHub Pages loads correctly, fixed Media folder case sensitivity |
| 15 Sep 2026 | Fix: About Us Layout | Fixed information boxes and image misalignment using Flexbox and CSS Grid, moved all repeated inline styling into styles.css |
| 16 Sep 2026 | Fix: Image Paths | Fixed About Us image not displaying on GitHub Pages, added global rule img {max-width:100%; height:auto; display:block} to prevent overflow |
| 16 Sep 2026 | Fix: Careers Button | Fixed View Careers button redirect - now correctly redirects to Customer support.html#careers where Career Opportunities section is available |
| 16 Sep 2026 | Update: Store Locator | Replaced static map.jpg with 3 embedded Google Maps iframes for Sandton City, Rosebank Mall, V&A Waterfront, added View on Map links with target="_blank" rel="noopener" |
| 16 Sep 2026 | Fix: Customer Support Image | Fixed Customer Support image sizing and responsiveness using max-width:100% and height:auto |
| 16 Sep 2026 | Update: Footer | Updated footer across all pages - improved alignment, consistent styling, responsive grid (4 columns desktop, 2 tablet at 768px, 1 mobile at 480px) |
| 17 Sep 2026 | Feature: Responsive Design | Implemented responsive breakpoints at 1024px and above, 768px, 480px, plus 800px and 500px fine-tuning, linked style.css to all pages, added CSS reset |
| 17 Sep 2026 | Feature: Units & Layout | Replaced fixed pixel units with relative units rem, %, em, min(), clamp(), implemented Flexbox for info boxes, images, navigation, footer, button layouts and CSS Grid for product grids |
| 17 Sep 2026 | Feature: Hover Effects | Added hover effects, transitions 0.25s ease, and box-shadow effects --shadow: 0 8px 24px rgba(0,0,0,0.08) used on .store-card, .support-card, .product-card:hover, .form-page, .cookie-modal, .button |
| 18 Sep 2026 | Fix: Navigation Responsiveness | Added mobile hamburger menu with aria-expanded toggle functionality, added flex-wrap to .header-actions and .main-navigation to fix horizontal scroll at 375px, removed pipe separators |
| 18 Sep 2026 | Feature: Product Interactions | Added product search filtering by keyword and sort by Recommended, Price Low to High, Price High to Low (functional via JavaScript sorting data-price), added Add to Bag counter using localStorage zaraBagCount and Favorite heart toggle with toast notifications |
| 18 Sep 2026 | Fix: Header Search | Made header search field functional - filters products on Product Page, or stores query in localStorage pendingSearch and redirects from other pages to Product Page.html |
| 18 Sep 2026 | Feature: Form Validation | Added labels and required attributes to newsletter form and support form, added JavaScript validation for names, emails, messages with regex, aria-invalid, error handling, success messages |
| 18 Sep 2026 | Feature: Lightbox Gallery | Added interactive lightbox gallery - click on product images to enlarge with zoom-in cursor, fixed overlay with close button, fadeIn animation for product cards |
| 18 Sep 2026 | Feature: Interactive Elements | Added FAQ accordion using details/summary tags, cookie consent modal with Accept/Decline using localStorage, interactive maps, toast notifications, animations and transitions |
| 18 Sep 2026 | Update: SEO | Added meta titles, meta descriptions, meta keywords, semantic headings H1 H2 H3, alt text on all images, internal links, lazy loading, Open Graph tags, created robots.txt and sitemap.xml |
| 18 Sep 2026 | Fix: SEO Files | Fixed robots.txt and sitemap.xml - replaced placeholder your-website-link.netlify.app with real link https://bokang9.github.io/ZARA-Project/ and encoded file names with spaces as %20 for GitHub Pages compatibility |
| 01 Nov 2026 | Feature: Forms Pages | Added enquiry.html with Full Name, Email, Enquiry Type select (Products, Services, Sponsorship, Volunteering), Message and contact.html with Name, Email, Subject, Message, both with labels, required, novalidate, form-group styling, JS validation and AJAX submission simulation with try/catch |
| 01 Nov 2026 | Fix: JavaScript Crash | Fixed script.js crash - removed duplicate DOMContentLoaded listeners and stray fetch() outside scope that caused enquiryForm undefined error, merged into single clean script with one DOMContentLoaded listener |
| 01 Nov 2026 | Update: Accessibility | Improved keyboard focus states with focus-visible outline 2px solid, ensured all form fields have labels and correct focus indications, added aria-live, aria-label, aria-expanded |
| 01 Nov 2026 | Final Testing | Tested navigation, file paths, image loading, GitHub Pages compatibility, button redirects, About Us alignment, Store Locator iframes, Customer Support image, footer alignment, responsive layouts at 1024px, 768px, 480px, 375px, button hover effects, website consistency |
| 02 Nov 2026 | Submit: Part 3 | Final submission preparation with truthful changelog table, README documentation, live site https://bokang9.github.io/ZARA-Project/, robots.txt and sitemap.xml validated |