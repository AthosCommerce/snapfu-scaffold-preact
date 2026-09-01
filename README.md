# {{snapfu.name}}

Athos Snap SDK site implementation built with [Preact](https://preactjs.com), scaffolded from `snapfu-scaffold-preact`. It wires up search, autocomplete, and recommendations components against a Snap site (`siteId`) and builds them into a bundle that's deployed to the storefront.

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Starts webpack-dev-server on `https://localhost:3333` with hot reloading.

## Build

```bash
npm run build
```

Builds both the modern and universal (legacy browser + polyfilled) bundles to `./dist`.

## Other scripts

| Script | Description |
| --- | --- |
| `npm run lint` | ESLint over `src/**/*.{js,jsx,ts,tsx}` with `--fix` |
| `npm run format` | Prettier over the repo |
| `npm run test` | Runs the dev server and Cypress e2e tests against it |
| `npm run cypress` | Opens the Cypress test runner interactively |
| `npm run lighthouse` | Runs Lighthouse CI against the built site |
| `npm run analyze` / `analyze:universal` | Webpack bundle analyzer for the modern/universal builds |
| `npm run clean` | Removes `node_modules` and `package-lock.json` |

## Project structure

```
src/
  index.js               entry point: Snap config, controllers, targeters
  universal.js            polyfilled entry for legacy browsers
  scripts/plugin.js       Snap controller plugin (logging, scroll restore)
  components/             Preact components (Search, Sidebar, Autocomplete, Recommendations, ...)
  styles/                 custom CSS/SCSS/CSS Modules
public/                   static assets + index.html dev harness
tests/                    Cypress e2e tests + Lighthouse CI config
webpack.*.js              build config (do not edit — managed by Snap)
```

Default components rendered via `targeters` in [src/index.js](src/index.js):

- **SearchHeader** (`#athos-header`) — search header
- **Content** (`#athos-content`) — result listing
- **Sidebar** (`#athos-sidebar`) — filters/facets
- **Autocomplete** (`#search-input`) — autocomplete on the search input
- **Recs** — recommendation instantiator, lazy-loaded per placement

`webpack.common.js`, `webpack.dev.js`, and other webpack configs are managed by the Snap tooling and get replaced on updates — avoid editing them directly.

## How To Integrate
The recommended integration approach mirrors your site's existing DOM within the targeted components, extending it with Snap-specific behavior such as click handlers and controller store bindings. By reusing your existing markup structure and class names, the components automatically inherit your site's styles and remain compatible with any scripts that depend on those elements.

## Deployment

Pushes/PRs run the [Snap Action](.github/workflows/deploy.yml) workflow, which builds and publishes the bundle to S3/CloudFront using the site's configured secrets.

## Resources

- [Preact docs](https://preactjs.com/guide/v10/getting-started)
- [Snap overview](https://athoscommerce.github.io/snap/snap-overview)

### For more info

For questions about `snapfu` (the CLI that generated/updates this scaffold), Snap SDK APIs/components, or deployment issues, see the full [Snap documentation](https://athoscommerce.github.io/snap/) or reach out to the Athos Commerce team.
