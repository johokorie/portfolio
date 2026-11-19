# John’s portfolio

A responsive portfolio built with Next.js App Router and CSS Modules. The home,
about, projects, and contact pages are exported as static HTML for Netlify.

## Development

Use Node.js 22 or newer and Yarn 1.x.

```sh
yarn install
yarn dev
```

Open http://localhost:3000. To use Netlify’s local environment instead:

```sh
netlify dev --port 8889
```

Run `yarn lint` to check the source. Run `yarn build` to create the production
site in `out/`. Netlify uses the build command and publish directory in
`netlify.toml`.

## Content and styling

Edit `src/content_option.js` to update the introduction, biography, experience,
skills, and contact details. Routes live in `src/app/`; shared components live
in `src/components/`. Each page and component uses a `.module.css` stylesheet.
Global CSS contains only the reset, theme variables, and accessibility defaults.
The theme choice is saved in the browser and restored before the page paints.

The Bridge project uses the existing local screenshot. The other two original
placeholder projects are marked as coming soon. Add real project content and
destinations in `src/app/project/page.js` when available.

## Contact form

The contact form uses Netlify Forms and requires no third-party email keys.
`public/__forms.html` declares its fields for detection at deployment; keep
those names in sync with `src/components/ContactForm.js`. The form submits
URL-encoded data to that static file and includes a honeypot, pending state,
success confirmation, and retryable error state.

Submissions are processed on Netlify after deployment. Local development can
verify rendering and submission states but does not deliver real submissions.
