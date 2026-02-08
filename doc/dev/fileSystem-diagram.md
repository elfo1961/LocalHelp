# LocalHelp Project File System Diagram

This diagram provides a high‑level overview of the project’s folder structure.
The project distinguishes between **reusable features**, which can be used across multiple parts of the application, and **page‑scoped features**, which belong exclusively to a single page or feature. This organizational pattern helps keep the codebase clear, modular, and easy to maintain as the project grows.

## Reusable and Page‑Scoped Features

### Reusable Features
Reusable elements—such as UI components, pipes, directives, or utilities—are placed inside the `shared/` folder. These items are designed to be generic, self‑contained, and independent of any specific page’s logic. Anything stored here should be safe to import from anywhere in the app.
When this document was written, the `shared/` folder included only the components/ subfolder. Other subfolders will be added in the future if and when they become necessary.

### Page‑Scoped Features
Elements that are intended to support a single page or feature are placed inside that page’s folder. For example, a page may define its own `components/` or `services/` subfolder when those items are tightly coupled to that page’s behavior and are not meant to be reused elsewhere. This keeps each page self‑contained and prevents accidental cross‑feature dependencies.

### Services Exception
Application‑wide services—those used throughout the entire app—reside in the top‑level `services/` folder rather than under `shared/`. These services represent core logic rather than UI‑level reuse.  
Only create a `services/` subfolder inside a page when a service is truly feature‑specific and not intended for global use.

This structure keeps reusable logic and UI elements clearly separated from page‑specific implementations, while maintaining a consistent and scalable architecture.

---

## 📁 Page Folder Naming and Internal Structure

Each page in the application has its own folder under `pages/`, named after the page or feature it represents (for example, `home/`, `profile/`, or `settings/`). Inside each page folder, the internal structure mirrors the same organizational logic used at the app level. This means a page may define its own `components/` or `services/` subfolder when those items are specific to that page and not intended for reuse elsewhere.

Following this pattern keeps each page self‑contained, makes its dependencies easy to locate, and ensures that feature‑specific logic stays close to the UI it supports. At the same time, reusable elements continue to live under `shared/`, maintaining a clear separation between global and feature‑scoped code.

---

```
localhelp/
│
├── src/
│   ├── app/
│   │   ├──+ shared/
│   │   |  ├── components/
│   │   ├──+ pages/
│   │   |  ├── <page>/components/
│   │   ├── services/
│   │   ├── localhelp.app.spec.ts   ← Master BDD Spec (Jasmine executable)
│   │   └── app.module.ts
│   │
│   ├── assets/
│   ├── environments/
│   └── index.html
│
├── doc/
│   ├── user/
│   │   ├── overview.md
│   │   ├── usage_examples/
│   │   │   ├── pool-cleaning.md
│   │   │   ├── edit-profile.md
│   │   │   ├── install-and-open.md
│   │   │   ├── navigate-splash-page.md
│   │   └── _index.md
│   │
│   ├── dev/
│   │   ├── overview.md
│   │   ├── usage_example_template.md
│   │   ├── filesystem-diagram.md
│   │   └── _index.md
│
└── README.md   ← Root intro
```
