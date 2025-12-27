---
description: Sprint plan to implement responsive layouts and branding across the application
---

# 🚀 Responsive Layout & Branding Sprint

This workflow outlines the steps to refactor the application to use shared, responsive layouts for both Customer and Admin interfaces, ensuring the "My Boo" branding (logo and "pinky girly" aesthetic) is consistently applied.

## 📦 Phase 1: Asset & Foundation Setup
- [x] **Normalize Logo Asset**: Move the uploaded logo to `public/images/logo-full.jpg` and ensure it's used as the primary brand image.
- [x] **Create `CustomerLayout`**: Build a shared layout for customer-facing pages.
    -   **Mobile**: Sticky Top Header (Logo), content area, Fixed Bottom Nav.
    -   **Desktop**: Sticky Top Header (Logo + Nav Links), content area (centered `max-w-7xl`).
    -   **Elements**: Integrate `BottomNav` logic and the Header design from `Dashboard.tsx`.
- [x] **Create `AdminLayout`**: Build a shared layout for admin pages.
    -   **Sidebar**: Collapsible/Responsive sidebar with solid pink active states.
    -   **Header**: Standard admin header with "Good Morning, Boss!".
    -   **Responsive**: Hamburger menu for mobile sidebar toggling.

## 🎨 Phase 2: Refactor Customer Pages
- [x] **Dashboard (`/dashboard`)**: Wrap in `CustomerLayout`. Remove manual header/bottom-nav code. Verify 2-col (mobile) -> 4-col (desktop) grid.
- [x] **Menu (`/menu`)**: Wrap in `CustomerLayout`. Ensure sticky category filters work within the layout. Fixed product grid responsiveness.
- [x] **Cart (`/cart`)**: Wrap in `CustomerLayout`. Ensure proper max-width on desktop.
- [x] **Profile (`/profile`)**: Wrap in `CustomerLayout`. Fix mobile alignment issues.
- [x] **Product Detail (`/product/:id`)**: Wrap in `CustomerLayout`. Ensure back button/navigation works.

## 🛠️ Phase 3: Refactor Admin Pages
- [x] **Admin Dashboard (`/admin`)**: Wrap in `AdminLayout`. Remove manual sidebar/header.
- [x] **Orders (`/admin/orders`)**: Wrap in `AdminLayout`. Ensure tables are responsive (horizontal scroll or card view on mobile).
- [x] **Menu Management (`/admin/menu`)**: Wrap in `AdminLayout`.
- [x] **Customers (`/admin/customers`)**: Wrap in `AdminLayout`.
- [x] **Analytics (`/admin/analytics`)**: Wrap in `AdminLayout`.
- [x] **Settings (`/admin/settings`)**: Wrap in `AdminLayout`.

## ✨ Phase 4: Final Polish
- [ ] **Global CSS**: Verify `bg-bg-primary` (light pink) is the default background.
- [ ] **Typography**: Ensure font scaling is readable on mobile.
- [ ] **Touch Targets**: Verify all buttons (JellyButtons, IconButtons) are at least 44px on mobile.
