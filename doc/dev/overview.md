# Technical Notes (For Developers)

This document mirrors the User Overview exactly in structure and numbering,
but focuses on implementation details. It reflects the updated architecture
defined in the App Flow document.

See also the Master BDD Spec for high‑level behavioral definitions.

Every feature must include a top‑level Feature Spec.

---

# 1. Startup — Technical Notes

- Internet connectivity is checked programmatically at startup.
- The initial connectivity state is read synchronously.

---

# 2. Splash Screen — Technical Notes

- Displays a non‑interactive splash screen during initialization.
- Automatically transitions to the Welcome Page once startup tasks complete.

---

# 3. Welcome Page — Technical Notes

- Minimal page containing:
  - Language selection (via `<app-layout>`)
  - Navigation to Enter Page
  - Navigation to Info Page
  - Credits
- Authentication actions are not present here.
- `<app-layout>` provides global UI (header, language selector, offline banner).

---

# 4. Enter Page — Technical Notes

- Centralizes all authentication actions:
  - Login
  - Registration
  - Password recovery
  - Guest access
- Uses router navigation for all actions.
- Simplifies the Welcome Page.

---

# 5. Info Page — Technical Notes

- Provides legal and informational content:
  - Terms of Use
  - Disclaimer
  - FAQ
  - Help / Support
  - Subscription Plans (view only)
- Logged‑in users may select or upgrade subscription plans.
- Accessible to all users.

---

# 6. Home Page — Technical Notes

Guests:

- Can view help requests and service offers (limited)
- Cannot access contact details
- Restricted actions trigger login/register prompts

Logged‑in users:

- Can create, edit, delete, and filter help requests
- Can create, edit, delete, and filter service offers
- Can browse and create categories
- Access profile and preferences via the navigation menu

---

# 7. User Profile — Technical Notes

- Accessible only via the navigation menu.
- Logged‑in users can:
  - Edit profile
  - View activity history
  - Manage preferences
  - View/upgrade subscription plan
  - Delete account
  - Log out

---

# 8. Preferences — Technical Notes

- Preferences UI is provided globally via `<app-layout>`.
- All users can change preferences (language, UI, accessibility).
- Logged‑in users have preferences persisted to the backend.
- Guests may have preferences stored locally (optional).
- Language changes trigger UI refresh and translation updates.

---

# 9. Help Requests — Technical Notes

- Viewing requests loads data from the backend.
- Creating/editing/deleting requires authentication.
- Filtering may be client‑side or server‑side.

---

# 10. Service Offers — Technical Notes

- Same technical structure as Help Requests.
- CRUD operations require authentication.

---

# 11. Categories — Technical Notes

- Search uses lookup against existing subcategories.
- Suggestions are generated dynamically.
- New subcategories created only if no match exists.
- Duplicate prevention enforced in the data layer.

---

# 12. Navigation Menu — Technical Notes

- Menu icon triggers the side navigation controller.
- Overlay click detection closes the menu.
- Selecting a menu item triggers navigation and closes the menu.
- Contains links to:
  - Home
  - User Profile
  - Help Requests
  - Service Offers
  - Categories
  - Info Page
  - Credits
  - Logout

---

# DEV ONLY INFO
These sections are not mentioned in the user overview

## Page Layout(s)
The layout system separates UI into three layers:

- **Global UI** (side menu, router outlet) lives in `app.component`, where Ionic
  requires it.

- **Shared UI** (header, offline banner, language selector) lives in the
  `<app-layout>` component under `shared/layouts/`.

- **Page‑scoped UI** (page‑specific toolbars, tabs, contextual actions) must be
  implemented inside the page folder as separate components. These elements are
  not part of `<app-layout>`.

This ensures compatibility with Ionic’s layout engine and keeps the architecture
predictable and maintainable.

See `layout-management.md` for more details.
