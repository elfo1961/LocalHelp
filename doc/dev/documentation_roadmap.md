# Documentation Roadmap

This roadmap outlines the planned structure, priorities, and future improvements for the LocalHelp documentation.  
It serves as a guide for maintaining consistency and ensuring that both user‑facing and developer‑facing documentation evolve together.

---

## 1. User Documentation

### 1.1 Completed
- User overview (`doc/user/overview.md`)
- Usage examples folder (`doc/user/usage_examples/`)
- Initial usage examples:
  - Pool Cleaning (Client & Provider POV)
- User documentation index (`doc/user/_index.md`)

### 1.2 To Do
- Add additional usage examples:
  - Editing Profile and Preferences
  - Installing and Opening the App
  - Navigating the Splash Page
  - Posting a help request
  - Offering a service
  - Translating a post
  - Browsing offers
  - Managing notifications
- Add screenshots or diagrams (optional, future enhancement)
- Add a “Common Problems & Solutions” section
- Expand the FAQ

---

## 2. Developer Documentation

### 2.1 Completed
- Developer overview (`doc/dev/overview.md`)
- File system diagram (`doc/dev/filesystem-diagram.md`)
- Templates folder (`doc/dev/templates/`)
  - Usage example template
- Developer documentation index (`doc/dev/_index.md`)

### 2.2 To Do
- Add architecture overview:
  - High‑level app flow
  - Component hierarchy
  - Service responsibilities
- Add testing strategy:
  - Unit test conventions
  - Integration test guidelines
  - How to interpret the master BDD spec
- Add coding conventions:
  - Naming rules
  - Folder structure conventions
  - Angular best practices
- Add a “How to contribute” guide (future‑proofing)
- Add a “Release notes / changelog” section

---

## 3. Cross‑Section Improvements

### 3.1 Completed
- Separation between user and developer documentation
- Consistent TOC structure
- Usage example template
- Unified file system diagram

### 3.2 To Do
- Create a documentation style guide:
  - Tone and voice
  - Markdown formatting rules
  - File naming conventions
- Add cross‑links between user and dev docs where appropriate
- Add versioning notes (if the project grows)

---

## 4. Long‑Term Ideas (Optional)
These are not required but could elevate the documentation significantly.

- Auto‑generate documentation from code comments (Typedoc)
- Auto‑generate usage examples from test specs
- Add visual diagrams (flowcharts, sequence diagrams)
- Add a “Glossary of Terms”
- Add onboarding guides for:
  - New developers
  - New translators
  - New testers

---

## 5. Maintenance Plan

- Review documentation every major feature update
- Update usage examples when UI changes
- Keep templates aligned with evolving project standards
- Ensure the master BDD spec remains the single source of truth

---

This roadmap should be updated as the project evolves.  
It is meant to guide development, reduce cognitive load, and ensure documentation remains a first‑class part of the LocalHelp project.
