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

# Splash Screen

- The app displays a non‑interactive splash screen on startup  
- The app automatically transitions to the Welcome Page after initialization

---

# 3. Welcome Page

- Users can choose the language of the app  
- Users can access the login or registration page  
- Users can view the credits 

---

# 4. Connectivity Service

- The app knows whether the device is online or offline  
- The app reacts when the connection changes  
- Other parts of the app can be informed when the connection changes  

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
- Users can translate posts into their preferred language  

---

# 7. Authentication

- Users can log in  
- Users can register
- Users can see available subscription plans before registering
- The app loads the user’s preferences after login

---

# 8. Accepting Terms During Registration

Before creating an account, users must read and accept:

- **Terms of Use**
- **Disclaimer** LocalHelp does not intermediate or take responsibility for agreements between clients and service providers.

These must be accepted to complete registration.

---

# 9. User Profile

- Logged‑in users can edit their profile  
- Logged‑in users can save their preferences  

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
- The app prevents duplicate subcategories  

---

# 13. Navigation Menu

- A menu icon appears in the top‑left corner  
- Tapping the icon opens the side menu  
- Tapping outside the menu closes it  
- Choosing a menu item closes the menu  

---
