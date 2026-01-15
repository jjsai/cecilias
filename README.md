<div align="center">
<img width="1200" height="475" alt="DQBanner" src="" />
</div>

# This landing page was cretae using Google AI Studio

The page goal is to stablish Cecilia's business presence in Internet and help promoting her clothing sales.
It is meant to be hosted at www.dataqub.com as a subdirectory using Coolify on a VSP manage by Contabo

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Deployment & Configuration Log (Cecilia's Landing Page)

**Deployment Date:** January 15, 2026
**Type:** Static React/Vite Application (Subdirectory Hosting)
**Infrastructure:** Coolify (Contabo VPS)

### 1. Code Preparation
* **Dependency Installation:** Ran `npm install` and `npm install -D @types/node` to support the build environment.
* **Sanitization:** Removed `define: { ... }` blocks from `vite.config.ts` to strip unused Google/Gemini API keys.
* **Subdirectory Config:** Updated `vite.config.ts` to include `base: '/cecilias/'`. This ensures assets load correctly when hosted at `dataqub.com/cecilias` instead of the root.

### 2. Version Control
* Initialized local Git repository.
* Created public GitHub repository (`jjsai/cecilias`) using GitHub CLI.
* Established standard sync workflow: Local VS Code -> Push to GitHub Main -> Webhook Trigger.

### 3. Coolify Configuration
* **Source:** Public GitHub Repository.
* **Build Pack:** Nixpacks.
* **Static Config:** Enabled "Is it a static site?" and "Is it a SPA?".
* **Image:** `nginx:alpine`.
* **Domain:** `https://dataqub.com/cecilias` (Note the subpath).
* **Automation:** Manually configured GitHub Webhook to trigger deployments on `push` events.