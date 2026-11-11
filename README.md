# Roby Firmansyah — Portfolio

Personal portfolio and CV site for **Roby Firmansyah**, an IT Officer, systems and network administrator, and web developer. The site presents professional experience, technical skills, education, certifications, and contact options in Indonesian and English.

🌐 **Live site:** [robyfirmansyah.my.id](https://www.robyfirmansyah.my.id/)

## Features

- Responsive portfolio layout for desktop and mobile
- Indonesian and English content, with Indonesian as the default language
- Experience timeline, education, technical skills, and certifications
- Downloadable CV and profile photo
- Contact form connected to Web3Forms

## Technology

- Vue 3 and TypeScript
- Vite 6
- Tailwind CSS
- Vue I18n
- Web3Forms for contact form submissions

## Requirements

- Node.js 20 or newer
- npm
- Git (only needed when cloning the repository)

## Run locally

Clone the repository and install the exact dependency versions from `package-lock.json`:

```bash
git clone https://github.com/robyfirmansya11/vuefolio.git
cd vuefolio
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually <http://localhost:5173/>. Keep the terminal open while developing. Stop the server with `Ctrl+C`.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check the project and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Update portfolio content

Localized page data lives in `src/i18n/`:

- `id/` — Indonesian content
- `en/` — English content
- `messages.ts` — registers each language with Vue I18n

Update the matching files in both language folders when changing a section:

- `*_hero.ts` — name, role, introduction, and social links
- `*_experience.ts` — work history and responsibilities
- `*_about.ts` — summary, skills, education, and certifications
- `*_projects.ts` — certifications and training shown on the site
- `*_contact.ts` — contact text and form labels

Image and document assets are served from `public/`:

- `roby-firmansyah.png` — profile portrait
- `CV_Roby_Firmansyah.pdf` — downloadable CV

Replace these files using the same filenames, or update their references in the Vue components. Do not add documents or personal details that should not be public; files in `public/` are downloadable by every site visitor.

## Contact form and security

The contact form sends submissions directly from the visitor's browser to Web3Forms. Its access key is a **public form identifier**, not a private API secret; Web3Forms documents that browser-side use is expected. Anyone who can view the site can also see this key, so keep Web3Forms' spam protections enabled and use domain restrictions if available on your plan. [Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq) · [API reference](https://docs.web3forms.com/getting-started/api-reference)

The 30-minute submission cooldown in this project uses browser storage. It improves the visitor experience but is not a server-side security control and can be bypassed. Do not rely on it to protect credentials or block abuse.

General repository safety:

- Never commit passwords, private API tokens, signing keys, or production credentials.
- Do not put secrets in variables prefixed with `VITE_`; Vite bundles those values into code delivered to browsers.
- Keep local environment files, dependency folders, build output, and logs out of Git. `.gitignore` includes common patterns for these files.
- Review `git status` and the staged diff before committing, especially before adding files under `public/`.
- Review dependency advisories with `npm audit` before upgrading packages; avoid applying `--force` upgrades without checking breaking changes.

## Deploy

Build the static site:

```bash
npm run build
```

Deploy the generated `dist/` directory using a static hosting provider such as Netlify, Vercel, or GitHub Pages. This repository is configured for a root URL (`base: '/'`), which works for the custom domain. If deploying under a path such as `username.github.io/repository/`, update the `base` option in `vite.config.ts` first.

## Credits

The repository started from the [Vuefolio template](https://github.com/ralodev/vuefolio) by Raúl López and has been adapted for Roby Firmansyah's portfolio.
