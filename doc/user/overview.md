# LocalHelp – User Overview

This document describes the LocalHelp application from the user’s perspective.
It outlines the main pages, available actions, and differences between guest and
logged‑in experiences. It reflects the updated architecture defined in the
App Flow document.

---

# 1. Startup

- The app shows a splash screen when it starts.
- The app checks whether the device has an internet connection.

---

# 2. Splash Screen

- Displays a non‑interactive splash screen.
- Automatically transitions to the Welcome Page after initialization.

---

# 3. Welcome Page

Available to all users:

- Navigate to the **Enter Page**
- Navigate to the **Info Page**
- View **Credits**

Notes:

- Authentication actions are no longer here.
- The Welcome Page is intentionally minimal.

---

# 4. Enter Page (Authentication Hub)

Available to all users:

- Login
- Register
- Recover password
- Continue as guest (limited functionality)

Notes:

- Centralizes all authentication actions.
- Simplifies the Welcome Page.

---

# 5. Info Page

Available to all users:

- Terms of Use
- Disclaimer
- FAQ
- Help / Support
- Subscription Plans (view only)
- Credits (optional)

Logged‑in users:

- May select or upgrade their subscription plan.

---

# 6. Home Page

## Guests can:

- View help requests (limited: no contact details)
- View service offers (limited)
- View categories
- Access Info and Credits
- Attempt restricted actions, which prompt login/registration

## Logged‑in users can:

- Create, edit, and delete help requests
- Create, edit, and delete service offers
- Filter and search content
- Browse and create categories
- Access their profile and preferences via the navigation menu

---

# 7. User Profile (Logged‑in Users Only)

Accessible via the navigation menu.

Users can:

- Edit profile
- View activity history
- Manage preferences
- View or upgrade subscription plan
- Delete account
- Log out

---

# 8. Preferences

Available globally via the `<app-layout>` component.

- **All users** can select a language
- **All users** can change preferences (language, UI, accessibility)
- **Logged‑in users** can save their preferences to the backend
- **Guests** may have preferences stored locally (optional)

---

# 9. Help Requests

Guests:

- Can view help requests (limited)

Logged‑in users:

- Can create, edit, delete, and filter help requests

---

# 10. Service Offers

Guests:

- Can view service offers (limited)

Logged‑in users:

- Can create, edit, delete, and filter service offers

---

# 11. Categories

Guests:

- Can view categories

Logged‑in users:

- Can search categories
- Can create new subcategories
- Cannot create duplicates

---

# 12. Navigation Menu

Available on all pages except the splash screen.

Provides access to:

- Home
- User Profile
- Help Requests
- Service Offers
- Categories
- Info Page
- Credits
- Logout (if logged in)

---
