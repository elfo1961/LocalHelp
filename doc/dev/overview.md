
# Technical Notes (For Developers)

This section mirrors the same structure as the [user's overview](../user/overview.md), but focuses on implementation details.

See also [Master BDD Spec (Jasmine)](../../src/app/localhelp.app.spec.ts)
for real specs.

---

## 1. Startup — Technical Notes

- Internet connectivity is checked programmatically at startup  

---

## 2. Splash Page — Technical Notes

- Language selection triggers internal localization logic  
- Navigation routes link to login/registration, credits, and subscription pages  

---

## 3. Connectivity Service — Technical Notes

- Connectivity status is read synchronously  
- The app listens to browser‑level online/offline events  
- The initial state is based on the environment’s online indicator  
- A stream/observable notifies subscribers of connectivity changes  
- Native connectivity detection (Capacitor) will be integrated later  

---

## 4. Offline Banner — Technical Notes

- Banner visibility depends on connectivity state  
- A warning message is displayed dynamically  
- Styling changes based on online/offline state  

---

## 5. Language — Technical Notes

- Language selection updates the app’s translation service  
- Switching languages triggers UI refresh  
- Post translation uses the selected language  

---

## 6. Authentication — Technical Notes

- Login and registration use the authentication service  
- User preferences are loaded after successful authentication  

---

## 7. User Profile — Technical Notes

- Profile editing updates user data in storage/backend  
- Preferences are persisted through the user service  

---

## 8. Help Requests — Technical Notes

- Viewing requests loads data from the backend  
- Creating/editing/deleting requires authentication  
- Filtering is applied client‑side or server‑side depending on implementation  

---

## 9. Service Offers — Technical Notes

- Same technical structure as Help Requests  
- CRUD operations require authentication  

---

## 10. Categories — Technical Notes

- Search uses a lookup against existing subcategories  
- Suggestions are generated dynamically  
- New subcategories are created only if no match exists  
- Duplicate prevention is enforced in the data layer  

---

## 11. Navigation Menu — Technical Notes

- The menu icon triggers the side navigation controller  
- Overlay click detection closes the menu  
- Selecting a menu item triggers navigation and closes the menu  

---

## 12. Terms Acceptance During Registration

During the registration process, new users must explicitly read and accept:

- **Terms of Use**
- **Disclaimer**: LocalHelp does not intermediate, guarantee, or take responsibility for agreements between clients and service providers.

Registration cannot be completed unless both items are accepted.
