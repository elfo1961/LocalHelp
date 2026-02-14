# LocalHelp – Feature Overview (Client‑Friendly Version)

LocalHelp is a cross‑platform, multilingual community help & services app built with Ionic + Angular.  
The app allows users to request help or offer services in their local area.

## Supported Languages
- English (first release)
- Spanish
- German
- Brazilian Portuguese

This document describes what the LocalHelp app is expected to do from a user and business perspective.  
Technical details are collected in a separate section at the end.

---

# 1. Startup

- The app shows a splash screen when it starts  
- The app checks whether the device has an internet connection  

---

# 2. The Splash Screen

- Displays a non‑interactive splash screen on startup  
- Automatically loads the Welcome Page after initialization

---

# 3. Welcome Page

- Users can choose the language of the app  
- Users can navigate to the login or registration page
- Users can recover/reset their credentials
- Users can access as "guest", with limitations
- Users can view the credits 

---

# 4. Connectivity Service

- It reacts when the connection changes
- It notifies other parts of the app when the connection changes
- It visually informs the user when the app is offline. (see offline-banner below)
---

# 5. Offline Banner

- The banner is hidden when the device is online  
- The banner appears when the device is offline  
- The banner shows a clear warning message  
- The banner visually reflects the offline state  

---

# 6. Language

- Users can choose their preferred language  
- Users can switch languages at any time  
- Users can translate user‑generated content into their preferred language  

---

# 7. Authentication

- Users can log in  
- Users can register
- Users can recover their password
- Users can log in with their social account credentials
- Users can view subscription plans before registering
- After login, the app loads the user’s saved preferences
---
# 7.1 Subscription Plans
- Users can view available subscription plans  
- Logged‑in users can view or upgrade their current plan  

---

# 8. Accepting Terms During Registration

To create an account, users must read and accept:
- **Terms of Use**
- **Disclaimer:** LocalHelp does not mediate or assume responsibility for agreements between clients and service providers.

***These must be accepted to complete registration***.

---

# 9. User Profile

- Logged‑in users can edit their profile  
- Logged‑in users can save their preferences
- Logged‑in users can view their activity history
- Logged‑in users can delete their account
- Logged‑in users can log out from any page

---

# 10. Help Requests

- Users can view help requests  
- Logged‑in users can create help requests  
- Logged‑in users can filter help requests  
- Logged‑in users can edit their own help requests  
- Logged‑in users can delete their own help requests  

---

# 11. Service Offers

- Users can view service offers  
- Logged‑in users can create service offers  
- Logged‑in users can filter service offers  
- Logged‑in users can edit their own service offers  
- Logged‑in users can delete their own service offers  

---

# 12. Categories

- Logged‑in users can search existing subcategories  
- The app suggests matching subcategories while typing  
- Users can create a new subcategory if none match  
- The app prevents users from creating duplicate subcategories
---

# 13. Navigation Menu

- A menu icon appears in the top‑left corner  
- Tapping the icon opens the side menu  
- Tapping outside the menu closes it  
- Selecting a menu item closes the menu  

---
