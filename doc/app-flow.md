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

## 🧭 1. High‑Level App Flow

```
Startup
   ↓
Splash Screen
   ↓
Welcome Page
   ├── Choose Language
   ├── Enter (Authentication Hub)
   ├── Info (Help / Legal / FAQ)
   └── Credits
```

After Welcome Page:

```
Enter Page (Authentication Hub)
   ├── Login
   ├── Register
   ├── Recover Password
   └── Continue as Guest (limited functionality)

If Logged In:
   ↓
Home (Help Requests + Service Offers)
   ├── Create / Edit / Delete Help Requests
   ├── Create / Edit / Delete Service Offers
   ├── Filter & Search
   ├── Categories (search / suggest / create)
   |
   |── Navigation Menu
       ├── Home
       ├── User Profile
       |   ├── Edit Profile
       |   ├── Preferences
       |   ├── Activity History
       |   ├── Subscription Plan (select/upgrade)
       |   └── Delete Account
       ├── Help Requests
       ├── Service Offers
       ├── Categories
       ├── Info (Terms, Disclaimer, FAQ, Subscription Plans)
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

## 🏗️ 2. Feature Hierarchy
This section mirrors the master BDD spec but organizes features by functional domain and access level.

2.1 Startup
- Show splash screen
- Check internet connectivity

2.2 Splash Screen
- Non‑interactive
- Auto‑transition to Welcome Page

2.3 Welcome Page
Available to all users:
- Navigate to Enter Page
- Navigate to Info Page
- View credits
Notes:
- Authentication actions are no longer here
- Welcome Page is now minimal and focused

2.4 Enter Page (Authentication Hub)
Available to all users:
- Login
- Register
- Recover password
- Continue as guest (limited access)
Notes:
- Centralizes all authentication actions
- Simplifies Welcome Page

2.5 Info Page
Available to all users:
- Terms of Use
- Disclaimer
- FAQ
- Help / Support
- Subscription Plans
  -- **visible** to all users
  -- **actionable** for logged‑in users only
- (Optional) Credits
Notes:
- Legal documents accessible without registration
- Centralized help and documentation

2.6 Connectivity Service
- Detect online/offline
- Notify app of changes
- Integrate browser + Capacitor events

2.7 Offline Banner
- Hidden when online
- Visible when offline
- Shows warning
- Styled appropriately

2.8 Preferences
- Available to all users via the <app-layout> component
- Saved only for logged‑in users
- Guests can change preferences but they are stored locally (optional)
2.8.1 Language
- Choose language
- Switch language anytime
- Translate posts

2.9 Authentication
Login
- Authenticate user
- Load user preferences
Registration
- Create account
- Accept Terms of Use
- Accept Disclaimer
- View subscription plans
Password Recovery
- Trigger backend reset workflow

2.10 User Profile (Logged‑in users only)
- Edit profile
- Save preferences
- View activity history
- Delete account
- Log out
- Select/upgrade subscription plan

2.11 Help Requests
Guests:
- View help requests (limited: no contact details)
Logged‑in users:
- Create
- Edit
- Delete
- Filter

2.12 Service Offers
Guests:
- View service offers (limited: no contact details)
Logged‑in users:
- Create
- Edit
- Delete
- Filter

2.13 Categories (Logged‑in users only)
- Search subcategories
- Suggest matches
- Create new subcategory
- Prevent duplicates

2.14 Navigation Menu
- Accessible to all users via the <app-layout> component
- Burger icon
- Open/close menu
- Close on outside tap
- Close on item selection

## 🧩 3. Alignment Summary
Your documentation is now aligned with the new architecture:
✔ Welcome Page
- Minimal
- No authentication buttons
- Links to Enter + Info
✔ Enter Page
- Centralized authentication hub
- Clean separation of concerns
✔ Info Page
- Centralized legal + help content
- Accessible to all users
✔ User & Dev Docs
- Will be updated in the next step (letter B)
✔ Master BDD Spec
- Will need updates after the docs

