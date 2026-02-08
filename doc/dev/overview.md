
# Technical Notes (For Developers)

This section mirrors the same structure as the [user's overview](../user/overview.md), but focuses on implementation details.

See also [Master BDD Spec (Jasmine)](../../src/app/localhelp.app.spec.ts)
for real specs.

---

## 1. Startup — Technical Notes

- Internet connectivity is checked programmatically at startup  

---

## 2. Splash Screen — Technical Notes

- Displays a non‑interactive splash screen during initialization  
- Automatically transitions to the Welcome Page once startup tasks complete  

## 3. Welcome Page — Technical Notes

- Language selection triggers internal localization logic  
- Navigation routes link to:
-- login page
-- registration page
-- password recovery page
-- credits page
-- home page (guest access with limited functionality)
---

## 4. Connectivity Service — Technical Notes

- The initial connectivity state is read synchronously at startup
- The app listens to browser‑level online/offline events  
- The initial state is based on the environment’s online indicator  
- A stream/observable notifies subscribers of connectivity changes  
- Native connectivity detection (Capacitor) will be integrated later
- It exposes the connectivity state so UI components (such as the offline banner) can react to changes  

---

## 5. Offline Banner — Technical Notes

- Banner visibility depends on connectivity state  
- A warning message is displayed dynamically  
- Styling changes based on online/offline state  

---

## 6. Language — Technical Notes

- Language selection updates the app’s translation service  
- Switching languages triggers UI refresh  
- User‑generated contents can be translated to the currently selected language by an AI translation service
---

## 7. Authentication — Technical Notes

- Login and registration use the authentication service  
- User preferences are loaded after successful authentication
- Password recovery triggers the backend’s reset workflow
- Social login integrates with external identity providers (implementation pending)

---

## 8. Terms Acceptance During Registration

During the registration process, new users must explicitly read and accept:

- **Terms of Use**
- **Disclaimer**: LocalHelp does not intermediate, guarantee, or take responsibility for agreements between clients and service providers.

Registration cannot be completed unless both items are accepted.

---

## 9. User Profile — Technical Notes

- Profile editing updates user data in storage/backend  
- Preferences are persisted through the user service
- Activity history is retrieved from the backend and displayed to the user
- Account deletion permanently removes the user profile and associated data

---

## 10. Help Requests — Technical Notes

- Viewing requests loads data from the backend  
- Creating/editing/deleting requires authentication  
- Filtering is applied client‑side or server‑side depending on implementation  

---

## 11. Service Offers — Technical Notes

- Same technical structure as Help Requests  
- CRUD operations require authentication  

---

## 12. Categories — Technical Notes

- Search uses a lookup against existing subcategories  
- Suggestions are generated dynamically  
- New subcategories are created only if no match exists  
- Duplicate prevention is enforced in the data layer  

---

## 13. Navigation Menu — Technical Notes

- The menu icon triggers the side navigation controller  
- Overlay click detection closes the menu  
- Selecting a menu item triggers navigation and closes the menu  

---
