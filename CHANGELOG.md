# Changelog - Part 3

| Date | Update | Description |
|------|--------|-------------|
| 20 Oct 2026 | Added JavaScript Code | Added JavaScript for header search that filters products on Product Page and uses localStorage pendingSearch to redirect from other pages |
| 20 Oct 2026 | Added JavaScript Code | Added JavaScript for product search filtering by keyword and product sorting by Recommended, Price Low to High, Price High to Low |
| 21 Oct 2026 | Added JavaScript Code | Added JavaScript for Add to Bag counter using localStorage zaraBagCount and Favorite heart toggle |
| 21 Oct 2026 | Added JavaScript Code | Added JavaScript for hamburger menu toggle with aria-expanded and mobile navigation |
| 22 Oct 2026 | Added Animation | Added fadeIn animation for product cards, transform translateY and box-shadow on hover, image scale 1.04, smooth transitions 0.25s ease |
| 22 Oct 2026 | Added Animation | Added lightbox gallery animation - click product image to enlarge with overlay, close button and zoom-in cursor |
| 23 Oct 2026 | Added Animation | Added toast notifications animation and cookie consent modal animation with fade and transform |
| 24 Oct 2026 | Added Sitemap | Added sitemap.xml with all 8 URLs (index, About-Us, Product-Page, Store-Locator, Customer-support, enquiry, contact) using https://bokang9.github.io/ZARA-Project/ |
| 24 Oct 2026 | Added Robots | Added robots.txt with Allow: / and Sitemap: https://bokang9.github.io/ZARA-Project/sitemap.xml |
| 25 Oct 2026 | Updated Code | Updated code by fixing script.js crash - removed duplicate DOMContentLoaded and stray fetch() that caused enquiryForm undefined error |
| 26 Oct 2026 | Updated Code | Updated code by adding flex-wrap to header-actions and main-navigation to fix 375px horizontal scroll and remove pipe separators |
| 27 Oct 2026 | Updated Code | Updated code by adding global img rule img {max-width:100%; height:auto; display:block} to fix overflow |
| 28 Oct 2026 | Updated Code | Updated code by verifying box-shadow on store cards, support cards, product cards, form pages and buttons |
| 29 Oct 2026 | Added Forms | Added enquiry.html with Full Name, Email, Enquiry Type select (Products, Services, Sponsorship, Volunteering), Message, labels, required, novalidate, JS validation and AJAX simulation |
| 29 Oct 2026 | Added Forms | Added contact.html with Name, Email, Subject, Message, labels, required, novalidate, JS validation (email regex, message >=10 chars) and AJAX simulation |
| 30 Oct 2026 | Updated Code | Fixed footer navigation - Contact Us now correctly redirects to contact.html (was Customer-support.html#contact), Careers now redirects to Customer-support.html#careers |
| 30 Oct 2026 | Updated Code | Fixed Customer-support.html - added auto-open JS in script.js (separated from HTML) to open <details id="careers"> etc when URL hash present, so View Careers button works |
| 30 Oct 2026 | Updated Code | Fixed image paths with spaces - renamed Media/about us 2.jpg to about-us-2.jpg, Media/zara careers.jpg to zara-careers.jpg, Media/customer reviews.jpg to customer-reviews.jpg for GitHub Pages compatibility |
| 01 Nov 2026 | Final Deploy | Deployed all Part 3 changes including contact.html and enquiry.html to https://bokang9.github.io/ZARA-Project/ and verified robots.txt and sitemap.xml load |