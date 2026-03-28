# Website Intake Framework — Zingcontrol

Client site builds organized by project. Each subfolder is a self-contained site project.

## Projects

| Project | Stack | Live URL |
|---------|-------|----------|
| [coolbreeze-hvac](./coolbreeze-hvac/) | Astro + Tailwind | [Live demo](https://zingcontrol.github.io/Website-Intake-Framework/coolbreeze-hvac/) |

## Adding a New Project

1. Create `[client-name]/` subfolder with its own Astro project
2. Set `base: '/Website-Intake-Framework/[client-name]'` in `astro.config.mjs`
3. Copy `.github/workflows/deploy-coolbreeze-hvac.yml` and rename/update for new client
4. Push — GitHub Actions builds and deploys automatically
