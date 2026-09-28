# Professional Portfolio
React + TypeScript + Vite + Tailwind + Framer Motion + React Three Fiber. Static site for GitHub Pages.

## Local Development
```bash
npm install
npm run dev
```
## Production Build / Preview
```bash
npm run build      # output in dist/
npm run preview
```
## Change Your Content
- Info, skills, projects, education: edit `src/data/portfolio.ts` (the only file you need).
- Resume: replace `public/resume.pdf` (same filename). No code change needed.
- Projects: edit the `projects` array (empty `github`/`demo` hides the button; empty `role` hides that section).

## Web3Forms Setup
1. Create an access key at https://web3forms.com.
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/config/contact.ts` with that key. The access key is intended for frontend use; do not add private credentials.
3. Run `npm run dev`, submit both forms, and check the recipient inbox configured for that access key.

## GitHub Pages Deployment
1. Create an empty GitHub repository.
2. Push this project (replace `YOUR_USERNAME` and `YOUR_REPOSITORY`):
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
3. Repo **Settings → Pages → Source: GitHub Actions**.
4. Wait for the "Deploy to GitHub Pages" workflow (Actions tab).
5. Open `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` (or `https://YOUR_USERNAME.github.io/` if the repo is named `YOUR_USERNAME.github.io`).

**Base path:** `vite.config.ts` uses a relative base (`./`), so it works with any repo name. To force absolute: `VITE_BASE_PATH=/YOUR_REPOSITORY/ npm run build`.

**Updating later:** edit, then `git add . && git commit -m "Update" && git push` — it redeploys automatically.

## Testing Checklist
- `npm run build` succeeds; no horizontal scroll from 375px to 1920px
- Nav links scroll; mobile menu works; resume downloads
- Both forms: empty/invalid email errors, loading, success, failure
- 3D scene renders (fallback text if WebGL is disabled)
