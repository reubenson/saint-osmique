# saint-osmique

Source code for Saint~Osmique, a premium fragrance concierge and personal shopper services in New York City

This project is built with Eleventy (compiled to /docs), and hosted via GitHub pages (from /docs).

In keeping with Github Pages reliance on Jekyll, static site pages are served from /docs.

## TO DO
- determine whether old nav bar needs to be retained
- determine appropriate email service to replace Squarespace
  - e.g. Mailchimp free tier (https://mailchimp.com/features/custom-forms/
https://mailchimp.com/features/custom-forms/)
- obtain domain host from Squarespace and configure host to point to github
- transfer [github project](https://github.com/reubenson/saint-osmique) to David

## Getting Started
To get the app serving locally at localhost:8080:
```bash
npm i
npm run dev
```

## Deployments
- make sure all your intended changes are in *main* branch
- `npm run dev` to compile to /docs
- `git push origin main` to deploy changes
- see build in progress at https://github.com/reubenson/saint-osmique/actions