# Loshitha Udana — Personal Portfolio

A complete, responsive, dependency-free portfolio for GitHub Pages, featuring:

- Personal introduction, portrait, academic information, tutoring and contact information.
- Five engineering projects, with working links to the four supplied GitHub repositories. The PCB defect detection work is research in progress (not claimed to be published).
- Competition highlights and evidence, including locally hosted certificates and links to supporting posts.
- Project filters, accessible evidence image viewer, responsive navigation and reduced-motion support.

## Open locally

Open `index.html` in a modern browser. No npm, installation, database or server is required.

## Publish to GitHub Pages (recommended)

Your GitHub username is **loshitha2002**. Create a **new public repository** named **`loshitha2002.github.io`** (this is separate from your existing FYP portfolio repository), then upload **all the files and the `assets/` directory** from this folder to the repository root.

1. Visit https://github.com/new and log in as `loshitha2002`.
2. Create `loshitha2002.github.io` as a public repository.
3. Select **Add file → Upload files**, and upload the *contents* of this folder (`index.html`, `styles.css`, `script.js`, `README.md`, and `assets/`) preserving the folder structure.
   - If your browser does not preserve directory structure, use the command-line method below instead.
4. Open the repository's **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. Your site will be available at `https://loshitha2002.github.io/` after GitHub finishes deploying it.

### Command-line alternative

If you have Git installed, open a terminal *inside this folder* and run:

```bash
git init
git branch -M main
git add .
git commit -m "Launch personal portfolio"
git remote add origin https://github.com/loshitha2002/loshitha2002.github.io.git
git push -u origin main
```

The repository must exist first. You will need GitHub authentication to push.

## Editing your information

- **Profile photo:** `assets/profile.webp`
- **Text, projects, links, academic profile:** `index.html`
- **Colors, layout, spacing, responsive style:** `styles.css`
- **Competition evidence viewer:** `script.js` and images under `assets/evidence/`
- **New projects:** Copy a `.project-card` article in `index.html`. Keep `data-status="ongoing"` or `"completed"` for the filters.

## Before publishing: important checks

- This portfolio currently contains the **email and phone number supplied for inclusion**. GitHub Pages is public, so anyone can read them. If you would prefer contact by email only, remove the phone link from the Contact section before uploading.
- Check that each award, rank and link is phrased exactly how you would like it presented. Rankings attributed to self-report are not independently verified by the participation certificate alone.
- The 2025 VCoders certificate displays initials and a surname rather than the portfolio's short-form name; verify that you are comfortable displaying it publicly.
- Third-party repository links point to **team repositories** belonging to collaborators; the site does not claim sole authorship.
- A 2025 CodeArena list includes `BinaryBrains_UOP` among the selected teams; it does not establish a numerical individual placement.
- The visual project posters are **custom conceptual illustrations**, not photographs of the actual hardware or experimental results.
- If a research paper is accepted or published later, update its status and add the DOI or publisher link.

## Website stack

HTML5, CSS3, vanilla JavaScript, self-hosted WebP/SVG imagery. Google Fonts enhances typography when online; system fallbacks work offline.

## Source attribution

The project summaries were based on the supplied GitHub repositories. Certificates, results image and portrait were provided by the portfolio owner. No claim of university endorsement is made.
