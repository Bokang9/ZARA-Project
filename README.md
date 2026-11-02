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

Improvements made after initial development include: correcting file names for GitHub Pages (index.html), fixing image loading issues, correcting page alignment with Flexbox/Grid, fixing the View Careers button, updating Store Locator from static map.jpg to 3 Google Maps iframes, fixing Customer Support image with max-width:100%, updating footer to responsive grid, implementing hamburger menu, product search/sort, lightbox gallery, form validation with AJAX, and SEO files robots.txt and sitemap.xml.

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
* Provide store locator with embedded Google Maps
* Provide responsive experience with breakpoints at 1024px, 768px, 480px
* Improve accessibility with focus-visible, labels, aria attributes
* Ensure buttons and links redirect correctly
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
* JavaScript — Hamburger toggle, product search/sort filtering, bag counter, favorites, toast notifications, cookie consent modal, lightbox gallery, form validation, AJAX simulation
* GitHub — Version control and repository management
* GitHub Pages — Hosting at https://bokang9.github.io/ZARA-Project/
* Visual Studio Code — Development environment

---

## 6. Key Features and Functionality

### Home Page (index.html)
Features:
* Promotional banner with hero image (homepage.jpg) and Shop Now button
* Navigation menu with hamburger for mobile
* Search box functional - filters products on Product Page or redirects with localStorage
* Newsletter signup with label, required, email validation and toast
* Cookie consent modal with Accept/Decline stored in localStorage
* Slider dots visual
* Consistent footer with 4 columns
* Button hover effects with box-shadow and transitions
* Toast notification system

Functionality: Users can view promotions, navigate sections, search products, subscribe to newsletter, manage cookies.

File was renamed from home page.html to index.html for GitHub Pages compatibility.

### About Us Page (About Us.html)
Features:
* ZARA company information, history, mission
* About ZARA eyebrow text and image (about us 2.jpg)
* View Careers button redirects to Customer support.html#careers
* Information boxes aligned with Flexbox and Grid
* Image with border-radius and responsive sizing
* Career callout with image (zara careers.jpg)

Improvements Made:
* Fixed information boxes and images misalignment
* Fixed image not displaying on GitHub Pages with case-sensitive path
* Added global img rule max-width:100%; height:auto; display:block

### Product Page (Product Page.html)
Features Implemented:
* Product display: 6 products with images, names, prices R500-R1500, data-price attributes
* Product images with lightbox enlargement on click (cursor zoom-in, overlay with close button)
* Category strip: Women, Men, Kids, New Arrivals, Sale (anchor links)
* Search filtering by keyword via productSearch input and topSearchInput
* Sorting: Recommended, Price Low to High, Price High to Low (functional via JavaScript sorting data-price)
* Wishlist via heart button ♡ toggle with liked class and toast
* Add to Bag button with counter ★ Bag (0) stored in localStorage zaraBagCount
* Responsive product grid: 3 columns desktop, 2 tablet (768px), 1 mobile (480px)
* Box-shadow and hover animation: translateY(-4px), image scale 1.04, fadeIn animation
* Pagination buttons
* Product count display (X Items)

Functionality: Users can search, sort, add to bag, add to favorites, view enlarged images in lightbox. Dynamic filtering without page reload using renderProducts() function.

### Store Locator (Store Locator.html)
Implemented:
* Removed old static map.jpg
* Added 3 Google Maps iframes: ZARA Sandton City, ZARA Rosebank, ZARA V&A Waterfront
* Store cards with background var(--light-grey), padding, border-radius 12px, box-shadow var(--shadow)
* Each card has h2, address, distance, and View on Map link to https://www.google.com/maps/search/ with target="_blank" rel="noopener"
* Responsive 2-column layout: store-column and map-column (1 column at 768px)
* Map containers min-height 260px with iframe border:0

### Customer Support Page (Customer support.html)
Features:
* Support cards: Customer Ratings 4.8/5, What our Customers Say, FAQs (3 columns with box-shadow)
* Customer Reviews section with Sarah M., Thabo K., Priya N. reviews
* Customer service hours and social handles
* Contact form with labels, required, validation
* Form fields: customerName, customerEmail, customerMessage with form-error and form-success
* FAQ accordion using details/summary: How long is delivery, Can I return items, Shipping, Returns, Careers at ZARA
* Career Opportunities section with 4 items: Sales Assistant, Department Manager, Visual Merchandiser, Stockroom Assistant
* Responsive image customer reviews.jpg with max-width:100%
* Responsive layout: 2 columns desktop, 1 column tablet

Functionality: Users can view FAQs (interactive reveal/hide), view customer feedback, send enquiry via validated form.

### Forms Pages (Part 3 Requirement)
* enquiry.html: Full Name, Email Address, Enquiry Type select (Products, Services, Sponsorship, Volunteering), Message, Submit button, enquiryStatus with aria-live
* contact.html: Name, Email, Subject, Message, contactStatus
* Both have labels, required, novalidate, form-group styling, box-shadow form-page
* Client-side JavaScript validation: name trim, email regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message length >=10, aria-invalid true/false
* AJAX submission simulation: async/await with setTimeout 800ms, try/catch, status messages green/red, form reset, toast

### Footer Updates
* Improved alignment with grid
* Consistent styling across all pages
* Consistent links
* Improved spacing
* Responsive: 4 columns desktop, 2 columns at 768px, 1 column at 480px

---

## 7. Responsive Design

### External CSS
style.css linked to all pages for consistent styling.

### CSS Reset
* {box-sizing:border-box; margin:0; padding:0} to reduce browser differences.

### Relative Units
* rem, %, em, min(), clamp() used for responsiveness

### Flexbox
Used for: information boxes, images, navigation (.main-navigation flex-wrap), header-actions flex-wrap, footer, button layouts, career-callout, form-row

### CSS Grid
Used for: product grids, about-section, locator-layout, support-cards, support-layout, site-footer

### Media Queries Implemented
| Device | Breakpoint | Changes |
| Desktop | 1024px and above | 3 column product grid, 4 column footer, full header |
| Tablet | 768px | Hamburger displays, navigation hidden until open, 2 column product grid, about/locator/support 1 column, community-section column, 2 column footer |
| Mobile | 480px | 1 column product grid, 1 column footer, hero content adjusts, form-row column |

Additional: 800px and 500px breakpoints for fine-tuning header, hero height 560px to 440px, padding adjustments.

Responsive fix for 375px: Added flex-wrap to header-actions and main-navigation, removed pipe separators, search-box min-width:0 flex:1 1 100%, no horizontal scrolling.

### Global Image Rule
```css
img { max-width:100%; height:auto; display:block; }

### 8. Box-Shadow and Animations
* :root --shadow: 0 8px 24px rgba(0,0,0,0.08)
* Used on .store-card, .support-card, .form-page, .cookie-modal, .product-card:hover, .button
* Hover effects: smooth transitions 0.25s ease, transform translateY, image scale
* Keyframes fadeIn for product cards
* Toast and cookie modal transitions

### 9. Website Navigation
* Home (index.html) -> Main landing page with hero, newsletter, search
About Us (About Us.html)
* View Careers button -> Redirects to Customer support.html#careers
Product Page (Product Page.html)
* Women #women
* Men #men
* Kids #kids
* New Arrivals #new
* Sale #sale
* Search input #productSearch
* Sort select #productSort
Store Locator (Store Locator.html)
* View on Map links -> https://www.google.com/maps/search/?api=1&query=ZARA+...
* Embedded iframes for Sandton City, Rosebank, V&A Waterfront
Customer Support (Customer support.html)
* FAQs accordion
* Customer Reviews
* Career Opportunities
* Contact Form #supportForm

