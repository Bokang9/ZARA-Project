# ZARA Clothing Store - Changelog

## Part 2 Updates - Based on Part 1 Feedback

### Date: 2026

#### 1. Fixed File Naming (Part 1 Feedback)
- Renamed Home page to index.html
- Reason: GitHub Pages does not support spaces in file names, caused 404 errors

#### 2. Fixed Navigation Links (Part 1 Feedback)
- Updated all navigation hrefs 
- Example: `href="Home Page.html"` changed to `href="index.html"`
- Fixed footer links to match new file names

#### 3. Added Responsive Images (Requirement 3.3 - Part 2)
- Added CSS: `img { max-width: 100%; height: auto; object-fit: cover; }`
- Changed image from fixed height to responsive with max-width
- Added missing alt attributes for accessibility: `alt="ZARA Customers"`

#### 4. Implemented External Stylesheet Correctly (Part 2 Requirement)
- Ensured `<link rel="stylesheet" href="styles.css">` is on all 5 pages
- Removed all inline `<style>` tags from HTML files
- Moved all styling to external styles.css

#### 5. Added CSS Reset and Default Styles
- Added: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- Added body default: `font-family: Arial, sans-serif; background-color: #fff; color: #333;`

#### 6. Added Responsive Design - Layout Adjustments
- Added Flexbox for header: `display: flex; justify-content: space-between; align-items: center;`
- Added Grid for support cards: `display: grid; grid-template-columns: repeat(3, 1fr);`
- Added Grid for 2-column layout: `grid-template-columns: 1fr 1fr;`

#### 7. Added Media Queries for Tablet and Mobile
- Tablet breakpoint: `@media (max-width: 768px) { support-layout 1 column, cards 2 columns }`
- Mobile breakpoint: `@media (max-width: 480px) { cards 1 column, header stacks vertically }`
- Added typography adjustments: `h1 { font-size: 2.5rem; }` reduces to `1.8rem` on mobile

#### 8. Added Typography and Decoration Styles
- Typography: `font-size in rem, font-weight, line-height: 1.6`
- Decoration: `background-color, border, border-radius: 8px, box-shadow`
- Visual consistency across all pages

#### 9. Added Pseudo-Classes
- `a:hover { color: #000; text-decoration: underline; }`
- `button:hover { background-color: #333; transform: scale(1.02); }`
- `input:focus { border-color: #000; outline: none; }`

#### 10. Added New Content Sections
- Added detailed Careers section with 4 job roles
- Added Customer Reviews section with 3 reviews
- Added FAQ section using <details> and <summary> elements
- Added hidden anchor sections for footer links to work

## References
- W3Schools CSS Guide
- MDN Web Docs - Responsive Design