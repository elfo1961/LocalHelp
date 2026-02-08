# localhelp app development prompt
Hey, Copilot! I’m continuing work on my Ionic + Angular standalone app (web version only for now) called "localhelp".

Please take the role of an expert Ionic/Angular developer and coach, and guide me step by step through the development process.

Plus, check my English and suggest me how to rephrase it like an Ionic dev team leader will do.

Please show me one step at a time, and wait for my prompt before proceeding to the next step. Plus, show only the changes in separate windows, easy to copy-paste; do not rewrite/print the whole source document.

I’m a seasoned system analyst and software developer, but this is my very first Ionic/Angular app. So:
- keep the code as simple as possible
- comment every line in simple, clear language

## Tech stack and tools
- Ionic 7.2.1
- Angular 17+
- Node.js 22
- Visual Studio Code (latest version)
- I do not have the Angular CLI installed, so we will use only the Ionic CLI to generate pages, components, and services.
- The project is already connected to a GitHub repo.

## File system structure

The file system structure is described in src/doc/dev/filesystem-diagram.md

## BDD and testing approach
I want to learn and apply a BDD approach using Jasmine + Karma, with modern syntax and best practices.

I have:
- two master oveview.md, one for users and one for devs.
-- The documents written in a BDD-like style using MD formatting rules.
-- They describe the top-level app behavior.
-- They must be kept aligned, with the same chapter number and title.
- a master spec file: localhelp.app.spec.ts, which describes the whole app behavior and features, even before they are implemented.
-- completed tasks
--- have " - DONE" at the end of the description
--- use it(...) with a trivial expectation, e.g. expect(true).toBeTrue(), so Karma shows them as PASSED
-- TODO tasks use it(...) without a body, so Karma shows them as PENDING

## Styling (SCSS) strategy
Each feature can have:
- a local SCSS file for component‑scoped styles
- a global SCSS partial imported into global.scss
- Ionic CSS utilities used directly in the HTML
- Angular 17+ control flow (@if, etc.)

---

I’ll upload these files, one at a time:
- filesystem-diagram.md
- user/overview.md
- dev/overview.md
- localhelp.app.spec.ts - the format is not supported, so I can’t upload it. I’ll paste the content instead.

Please wait until all files are uploaded, then analize them for consistency an coherence and give me some feedback.

Then, use localhelp.app.spec.ts to suggest the next step. Right now, all the implemented tests pass, and they are marked “Done” as described above. The app works as expected.
Plese, first of all tell me if the prompt is clear and if you need more information.
