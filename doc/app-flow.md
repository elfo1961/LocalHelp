# **LocalHelp – App Flow & Feature Hierarchy**

This document provides a **top‑down map** of the LocalHelp application, showing:

- the **user journey** from startup to core features  
- the **feature hierarchy**  
- the **relationships** between pages  
- which features require authentication  
- which features are available to guests  
- where subscription plans and preferences fit  

It ties together the master BDD specs, the user overview, and the developer overview.

---

# 🧭 1. High‑Level App Flow

```
Startup
   ↓
Splash Screen
   ↓
Welcome Page
   ├── Choose Language
   ├── Login
   ├── Register
   ├── Continue as Guest (limited functionality)
   └── Credits
```

After Welcome Page:

```
If Logged In:
   ↓
Home (Help Requests + Service Offers)
   ├── Create / Edit / Delete Help Requests
   ├── Create / Edit / Delete Service Offers
   ├── Filter & Search
   ├── Categories (search / suggest / create)
   ├── User Profile
   │     ├── Edit Profile
   │     ├── Preferences
   │     ├── Activity History
   │     ├── Subscription Plan (view/upgrade)
   │     └── Delete Account
   └── Navigation Menu
         ├── Home
         ├── Profile
         ├── Help Requests
         ├── Service Offers
         ├── Categories
         ├── Credits
         └── Logout
```

```
If Guest:
   ↓
Home (limited)
   ├── View Help Requests
   ├── View Service Offers
   ├── Credits
   └── Prompt to Login/Register for restricted actions
```

---

# 🏗️ 2. Feature Hierarchy

This section mirrors the master BDD spec but organizes features by **functional domain** and **access level**.

---

## 2.1 Startup

- Show splash screen  
- Check internet connectivity  

---

## 2.2 Splash Screen

- Non‑interactive  
- Auto‑transition to Welcome Page  

---

## 2.3 Welcome Page

### Available to all users:
- Choose language  
- Access login  
- Access registration  
- Continue as guest (limited access)  
- View credits  

### Not shown here anymore:
- Subscription plans (moved to Authentication)

---

## 2.4 Connectivity Service

- Detect online/offline  
- Notify app of changes  
- Integrate browser + Capacitor events  

---

## 2.5 Offline Banner

- Hidden when online  
- Visible when offline  
- Shows warning  
- Styled appropriately  

---

## 2.6 Language

- Choose language  
- Switch language anytime  
- Translate posts  

---

## 2.7 Authentication

### Login
- Authenticate user  
- Load user preferences  

### Registration
- Create account  
- Accept Terms of Use  
- Accept Disclaimer  
- View subscription plans (moved here)  

---

## 2.8 User Profile *(Logged‑in users only)*

- Edit profile  
- Save preferences  
- View activity history  
- Delete account  
- Log out  
- View/upgrade subscription plan  

---

## 2.9 Help Requests

### Guests:
- View help requests, without contact details, filter and search  

### Logged‑in users:
- Create  
- Edit  
- Delete  
- Filter  

---

## 2.10 Service Offers

### Guests:
- View service offers, without contact details, filter and search  

### Logged‑in users:
- Create  
- Edit  
- Delete  
- Filter  

---

## 2.11 Categories *(Logged‑in users only)*

- Search subcategories  
- Suggest matches  
- Create new subcategory  
- Prevent duplicates  

---

## 2.12 Navigation Menu

- Burger icon  
- Open/close menu  
- Close on outside tap  
- Close on item selection  

---

# 🧩 3. Alignment Summary

Your three uploaded documents + master specs are now aligned with the following corrections:

### ✔ Welcome Page  
- Removed subscription plans  
- Added guest access  
- Matches master spec  

### ✔ Authentication  
- Subscription plans moved here  
- Preferences loaded after login  

### ✔ User Profile  
- Added subscription plan management  
- Added activity history  

### ✔ User doc  
- Needs one fix: remove “Users can see available subscription plans” from Welcome Page  

### ✔ Dev doc  
- Needs one fix: remove “subscription pages” from Welcome Page technical notes  

Everything else is consistent.

---

If you want, I can now:

- update the **user doc**  
- update the **dev doc**  
- update the **Welcome Page spec**  
- or proceed to **implement the Welcome Page**

Just tell me what you prefer.
