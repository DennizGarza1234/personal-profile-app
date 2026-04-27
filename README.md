# React Native Portfolio App (Expo Router)

## Overview

This project is a multi-page mobile portfolio application built using React Native and Expo Router. It demonstrates modern navigation techniques, reusable components, and structured UI design with themed project pages.

---

## Features

- File-based routing using Expo Router
- Multi-page navigation system
- Dynamic routing for project detail pages
- Programmatic navigation (push, replace, back)
- Reusable card-based UI components
- Themed project pages with unique color styling
- Image integration for project previews
- Consistent back navigation across all screens

---

## Projects Included

### 1. CTE Bank App
A school-based credit tracking system where admins manage students, assign credits/debits, and monitor performance. Includes Supabase integration and an admin dashboard.

**Theme:** Navy blue and gold

---

### 2. Calendar App
A scheduling and planning system designed for managing events, reminders, and daily productivity.

**Theme:** Purple, white, and navy

---

### 3. Profile App
A personal profile application that displays user data, settings, and UI customization in a clean dark-themed interface.

**Theme:** Black, red, and green accents

---

## Navigation Techniques Used

- `<Link />` for declarative navigation
- `router.push()` for programmatic navigation
- `router.replace()` for stack control
- `router.back()` for returning to previous screens
- File-based routing with Expo Router

---

## Design Choices

The app uses a dark global background for consistency across screens, with each project having its own distinct color theme for visual identity.

A card-based layout was used to improve readability and maintain a clean, modern portfolio structure. Reusable components such as `BrandCard` and `BackButton` were implemented to ensure consistency and reduce code duplication.

---

## Challenges

One of the main challenges was resolving layout and TypeScript issues caused by inconsistent component props and navigation structure.

Another challenge was fixing UI overlap and missing back navigation when restructuring screens. This was solved by standardizing a header + content layout across all pages.

---

## Conclusion

This project demonstrates practical experience with React Native, component-based architecture, and mobile navigation systems using Expo Router. It reflects an understanding of real-world app structure, reusable UI design, and multi-page application development.