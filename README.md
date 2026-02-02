# Jie Zhang's Academic Homepage

Welcome to my academic homepage! This site showcases my research on security and privacy in machine learning systems.

**Website:** https://zj-jayzhang.github.io/

## About Me

I am a PhD student in Computer Science at **ETH Zurich**, working under the supervision of Prof. **Florian Tramèr** at the **Secure and Private AI (SPY) Lab**. My research focuses on understanding and mitigating security and privacy risks in machine learning systems.

## Research Interests

- 🔒 Security in Machine Learning
- 🛡️ Privacy-Preserving ML
- ⚠️ Adversarial Robustness
- 📊 Data Privacy and Protection

## Featured Work

- **RealMath** - A continuous benchmark for evaluating language models on research-level mathematics (NeurIPS 2025)
- **The Jailbreak Tax** - Analyzing the utility of jailbreak outputs for LLMs (ICML 2025, Spotlight)
- **MIA Position Paper** - Why membership inference attacks cannot prove training data inclusion (SaTML 2025)
- **Privacy Defenses Misleading** - Demonstrating fundamental flaws in privacy evaluation (CCS 2024)
- **AgentDojo** - A benchmark for evaluating prompt injection attacks in LLM agents (NeurIPS 2024)

See all publications at: https://zj-jayzhang.github.io/publication/

## Quick Links

- **Home:** https://zj-jayzhang.github.io/
- **Publications:** https://zj-jayzhang.github.io/publication/
- **News:** https://zj-jayzhang.github.io/blog/
- **Talks:** https://zj-jayzhang.github.io/event/

## Contact

- **Email:** jie.zhang@inf.ethz.ch
- **Twitter:** [@JieZhang_ETH](https://twitter.com/JieZhang_ETH)
- **GitHub:** [zj-jayzhang](https://github.com/zj-jayzhang)
- **Google Scholar:** [Profile](https://scholar.google.com/citations?hl=en&user=soDBSE8AAAAJ&view_op=list_works&sortby=pubdate)
- **LinkedIn:** [jie-zhang-150a33294](https://www.linkedin.com/in/jie-zhang-150a33294/)

## Technology

This site is built with:
- **Hugo** - Static site generator (v0.155.2+)
- **HugoBlox Academic CV** - Academic website template
- **GitHub Pages** - Hosting and deployment
- **GitHub Actions** - Continuous deployment

## Local Development

### Requirements
- Hugo Extended (v0.148.2 or later)
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/zj-jayzhang/zj-jayzhang.github.io.git
cd zj-jayzhang.github.io

# Run local server
hugo server -D

# Visit http://localhost:1313/
```

### Building for Production

```bash
# Build minified site
hugo --minify

# Output will be in the public/ directory
```

## Project Structure

```
.
├── config/_default/          # Hugo configuration
├── content/
│   ├── _index.md            # Homepage
│   ├── authors/             # Author profiles
│   ├── publications/        # Research papers
│   ├── blog/                # News and updates
│   └── event/               # Talks and seminars
├── assets/                  # Images, stylesheets, scripts
├── static/                  # Static files (PDFs, etc.)
├── .github/workflows/       # GitHub Actions CI/CD
└── layouts/                 # Custom templates
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. GitHub Actions will:

1. Build the site with Hugo
2. Minify all assets
3. Deploy to GitHub Pages

See `.github/workflows/hugo.yml` for the deployment configuration.

## Migration Note

This site was migrated from Jekyll to Hugo Blox Academic CV in February 2025. See [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) for detailed information about the migration process and what was preserved.

## License

This website and its content are provided as-is. Please respect copyright notices for any published work.

---

Built with ❤️ using [HugoBlox](https://hugoblox.com/) | [View on GitHub](https://github.com/zj-jayzhang/zj-jayzhang.github.io)
