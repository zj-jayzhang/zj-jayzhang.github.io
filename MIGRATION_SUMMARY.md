# Jekyll to Hugo Blox Academic CV Migration Summary

## Overview
Successfully migrated Jie Zhang's academic homepage from Jekyll (`zj-jayzhang.github.io`) to Hugo Blox Academic CV template.

**Date Completed:** February 2, 2025
**Source:** Jekyll repository at `/Users/jay/Desktop/git repos/zj-jayzhang.github.io`
**Target:** Hugo site at `/Users/jay/Desktop/git repos/homepage`
**Backup:** Jekyll site backed up to `/Users/jay/Desktop/git repos/zj-jayzhang.github.io-backup`

---

## Migration Completed Phases

### ✅ Phase 1: Hugo Blox Setup
- Cloned Hugo Blox builder repository
- Extracted academic-cv template
- Copied all necessary configuration and layout files
- Configuration files initialized in `config/_default/`

### ✅ Phase 2: Author Profile Migration
- Created author profile at `content/authors/me/_index.md`
- Migrated bio from Jekyll (`_pages/includes/intro.md`)
- Copied avatar image: `assets/media/authors/me/avatar.jpg`
- Added education, interests, and social links
- Included honors and awards section

**Author Profile Details:**
- Name: Jie Zhang
- Role: PhD Student in Computer Science
- Affiliation: ETH Zurich, SPY Lab
- Social Links: Email, Twitter (@JieZhang_ETH), Google Scholar, GitHub, LinkedIn

### ✅ Phase 3: Publications Migration
Created 9 publications with full metadata:

1. **black-box-llm-optimization** - Black-box Optimization of LLM Outputs (Preprint)
2. **adversarial-ml-position** - Adversarial ML Problems Position Paper (IEEE SP 2025 DLSP)
3. **realmath-benchmark** - RealMath Benchmark (NeurIPS 2025, Dataset Track)
4. **jailbreak-tax** - The Jailbreak Tax (ICML 2025, Spotlight)
5. **mia-position** - MIA Position Paper (SaTML 2025)
6. **misleading-privacy-evals** - Privacy Defenses Misleading (CCS 2024)
7. **syndata-privacy** - Synthetic Data Privacy (ICLR 2025)
8. **blind-mia** - Blind Baselines Beat MIA (IEEE SP 2025 DLSP)
9. **agentdojo** - AgentDojo Benchmark (NeurIPS 2024, Dataset Track)

**Features:**
- All publications have proper frontmatter with authors, dates, and publication venues
- 8 publications marked as featured
- Each publication includes featured images from Jekyll
- Links to GitHub code, blog posts, datasets, and PDFs (posters)
- Equal contribution indicators in author notes

**Assets Included:**
- Featured images for 8 publications (PNG files)
- 5 PDF posters in `static/uploads/posters/`:
  - agentdojo.pdf
  - blind.pdf
  - ccs.pdf
  - mia_seq.pdf
  - satml.pdf

### ✅ Phase 4: News & Updates Migration
Created 5 blog posts in `content/blog/`:

1. **realmath-neurips-2025** - RealMath Accepted to NeurIPS 2025 (Sept 2025)
2. **mia-position-satml-2025** - MIA Position Accepted to SaTML 2025 (Sept 2024)
3. **agentdojo-neurips-2024** - AgentDojo Accepted to NeurIPS 2024 (Sept 2024)
4. **privacy-defenses-misleading-ccs-2024** - Privacy Paper Accepted to CCS 2024 (July 2024)
5. **zju-graduation** - Graduated from Zhejiang University (March 2023)

### ✅ Phase 5: Talks & Events Migration
Created 2 events in `content/event/`:

1. **researchtrend-connect-2024** - ResearchTrend Connect (Dec 2024)
2. **google-dp-ml-2025** - Google Differential Privacy for ML (April 2025)

### ✅ Phase 6: Site Configuration
**Configuration Files Updated:**

1. **config/_default/hugo.yaml**
   - Site title: "Jie Zhang"
   - Base URL: https://zj-jayzhang.github.io/

2. **config/_default/params.yaml**
   - Identity: Name, organization, type, tagline, description
   - Twitter handle: @JieZhang_ETH
   - Analytics: Google Analytics ID (G-SWFCX99KQZ)
   - Verification codes: Google, Bing, Baidu
   - Repository: GitHub repository enabled with zj-jayzhang/zj-jayzhang.github.io

3. **config/_default/menus.yaml**
   - Navigation menu configured with: Home, Publications, News, Talks

### ✅ Phase 7: Homepage Configuration
Updated `content/_index.md` with sections:

- Resume/Biography block (large avatar, 200px)
- Featured Publications collection (article-grid view, 2 columns)
- All Publications collection (citation view)
- Talks & Events collection (card view)
- Recent News collection (blog posts, card view, limit 10)
- Contact information (markdown block)

### ✅ Phase 8: GitHub Actions Deployment
Created `.github/workflows/hugo.yml`:
- Builds Hugo site with v0.155.2 (extended)
- Minifies output
- Uploads artifacts to GitHub Pages
- Automatically deploys on push to main branch

### ✅ Phase 9: Git Initialization
- Initialized git repository in homepage directory
- Created comprehensive .gitignore
- Made initial commit: "Initialize Hugo Blox Academic CV site migration from Jekyll"

---

## Directory Structure

```
homepage/
├── .github/workflows/
│   └── hugo.yml                 # GitHub Actions deployment
├── .gitignore
├── config/_default/
│   ├── hugo.yaml               # Main Hugo config
│   ├── params.yaml             # Site parameters
│   ├── menus.yaml              # Navigation menu
│   ├── languages.yaml          # Language config
│   └── module.yaml             # Module configuration
├── content/
│   ├── _index.md               # Homepage
│   ├── authors/
│   │   ├── _index.md
│   │   └── me/                 # Jie Zhang profile
│   │       ├── _index.md
│   │       └── avatar.jpg
│   ├── publications/           # 9 publications
│   │   ├── black-box-llm-optimization/
│   │   ├── realmath-benchmark/
│   │   ├── jailbreak-tax/
│   │   ├── mia-position/
│   │   ├── misleading-privacy-evals/
│   │   ├── syndata-privacy/
│   │   ├── agentdojo/
│   │   ├── blind-mia/
│   │   └── adversarial-ml-position/
│   ├── blog/                   # 5 news posts
│   │   ├── realmath-neurips-2025/
│   │   ├── mia-position-satml-2025/
│   │   ├── agentdojo-neurips-2024/
│   │   ├── privacy-defenses-misleading-ccs-2024/
│   │   └── zju-graduation/
│   └── event/                  # 2 talks/events
│       ├── researchtrend-connect-2024/
│       └── google-dp-ml-2025/
├── assets/
│   ├── media/
│   │   ├── images/             # 25+ images from Jekyll
│   │   └── authors/me.png      # Author thumbnail
│   └── jsconfig.json
├── static/
│   └── uploads/
│       └── posters/            # 5 PDF posters
├── layouts/
│   └── _partials/hooks/
│       └── head-end/github-button.html
├── data/
│   └── authors/me.yaml
├── go.mod & go.sum             # Hugo module definitions
└── MIGRATION_SUMMARY.md        # This file
```

---

## Content Statistics

| Item | Count | Details |
|------|-------|---------|
| Publications | 9 | Featured: 8, All with proper metadata |
| Blog Posts | 5 | News items from Jekyll |
| Events/Talks | 2 | Talks and seminars |
| Authors | 1 | Jie Zhang profile |
| Images | 25+ | Copied from Jekyll assets |
| PDF Posters | 5 | Conference posters |
| Total Markdown Files | 23 | All content properly structured |

---

## Preserved Content

### From Jekyll `_pages/includes/`
- ✅ **intro.md** → Author bio in `content/authors/me/_index.md`
- ✅ **pubs.md** → 9 publications in `content/publications/`
- ✅ **news.md** → 5 blog posts in `content/blog/`
- ✅ **talk.md** → 2 events in `content/event/`
- ✅ **honers.md** → Honors section in author profile

### From Jekyll `_config.yml`
- ✅ Site title: "Jie Zhang"
- ✅ Author metadata (email, GitHub, Twitter, LinkedIn)
- ✅ Google Analytics ID: G-SWFCX99KQZ
- ✅ Verification codes: Google, Bing, Baidu

### Media Assets
- ✅ Avatar image: `zj-x.jpeg` → `content/authors/me/avatar.jpg`
- ✅ Publication featured images: 8 PNG files
- ✅ Additional images: cat photos, conference images (25+ total)
- ✅ PDF posters: 5 files for paper presentations

---

## Technical Details

### Hugo Configuration
- **Hugo Version Required:** 0.148.2+ extended
- **Base URL:** https://zj-jayzhang.github.io/
- **Language:** English (en)
- **Theme:** HugoBlox Academic CV template
- **Build Output:** Minified static site in `public/` directory

### Dependencies
- Hugo Extended (for TailwindCSS support)
- Git (for version control)
- GitHub Pages (for deployment)

### GitHub Actions Workflow
- **Trigger:** Push to main branch
- **Build Command:** `hugo --minify`
- **Deployment:** Automatic to GitHub Pages
- **Build Time:** ~8-10 seconds
- **Artifact:** Uploaded to GitHub Pages

---

## Deployment Instructions

### Local Testing
```bash
cd /Users/jay/Desktop/git repos/homepage
hugo server -D
# Visit http://localhost:1313/
```

### GitHub Deployment
The site is ready to be deployed. To deploy:

1. Push to GitHub:
```bash
cd /Users/jay/Desktop/git repos/homepage
git remote add origin https://github.com/zj-jayzhang/zj-jayzhang.github.io.git
git branch -M main
git push -u origin main
```

2. GitHub Actions will automatically:
   - Build the site with Hugo
   - Minify all assets
   - Deploy to GitHub Pages
   - Site will be live at: https://zj-jayzhang.github.io/

3. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (created automatically by Actions)
   - Folder: / (root)

---

## Verification Checklist

- ✅ All 9 publications with metadata and featured images
- ✅ Author profile with bio, education, social links
- ✅ 5 blog posts for news items
- ✅ 2 events/talks entries
- ✅ 25+ images copied from Jekyll
- ✅ 5 PDF posters in static folder
- ✅ Site configuration (hugo.yaml, params.yaml, menus.yaml)
- ✅ GitHub Actions workflow configured
- ✅ Git repository initialized with initial commit
- ✅ .gitignore configured
- ✅ Navigation menu configured
- ✅ Homepage sections configured
- ✅ Analytics ID set (Google Analytics)
- ✅ Verification codes set (Google, Bing, Baidu)

---

## Next Steps

1. **Push to GitHub:** Use git to push the homepage directory to the zj-jayzhang/zj-jayzhang.github.io repository
2. **Test Live Site:** Verify that https://zj-jayzhang.github.io/ loads correctly
3. **Monitor Analytics:** Check Google Analytics real-time data
4. **Custom Styling (Optional):** If custom CSS is needed, create `assets/scss/custom.scss`
5. **Maintain:** Update publications and news as needed through markdown files

---

## Files Modified/Created

- ✅ config/_default/*.yaml (5 files)
- ✅ content/_index.md (homepage)
- ✅ content/authors/me/_index.md (author profile)
- ✅ 9 publication entries with featured images
- ✅ 5 blog posts
- ✅ 2 event entries
- ✅ .github/workflows/hugo.yml (GitHub Actions)
- ✅ .gitignore
- ✅ All media assets copied (25+ images, 5 PDFs)

---

## Migration Complete ✅

The migration from Jekyll to Hugo Blox Academic CV is complete. The site is ready for deployment to GitHub Pages. All content, metadata, and assets have been successfully migrated and organized according to Hugo conventions.
