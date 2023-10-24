# Dynam Labs marketing page

Source code for [https://dynamlabs.com](https://dynamlabs.com).

> **Warning**
> Secrets are stored in [.env](./.env) file which is committed to the repository. Keep this repository private and do not expose the secrets to the public.

## Tech stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Development

Node.js (see version in: [.nvmrc](./.nvmrc)) is required.

```bash
# install dependencies
npm ci

# start development server
npm start

# lint code
npm run lint

# fix lint errors
npm run lint:fix
```

Open [http://localhost:3666](http://localhost:3666) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Setting up VSCode

List of recommended extensions is stored in [.vscode/extensions.json](./.vscode/extensions.json). VSCode will prompt you to install them when you open the project for the first time.

Settings are stored in [.vscode/settings.json](./.vscode/settings.json). This will enable automatic formatting on save and automatic linting.

## Deployments

This site is automatically deployed to [https://dynamlabs.com](https://dynamlabs.com) on every push to `main` branch using Cloudflare Pages.

This project builds **only static pages**, so it can be deployed to any static hosting and be cached by CDN like Cloudflare or Netlify.

### Building

```bash
npm run build
```

After building, the `build` directory contains all static files that can be served by any static hosting. To test the production build run:

```bash
npm run serve
```

Rest of the dynamic content is handled by Serverless functions (see below).

## Serverless functions

TODO

This project is using [Cloudflare Workers](https://workers.cloudflare.com/) to handle serverless functions.

- [ ] contact form / sending emails
