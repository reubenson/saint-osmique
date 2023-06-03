# saint-osmique

Source code for Saint~Osmique, a premium fragrance concierge and personal shopper services in New York City

This project is built with Eleventy (compiled to /docs), and hosted via GitHub pages (from /docs).

In keeping with Github Pages reliance on Jekyll, static site pages are served from /docs.

## TO DO
- [ ] determine final set of fonts
- [ ] confirm whether okay to remove hamburger menu and leave contact link in nav
- [ ] determine appropriate email service to replace Squarespace
  - e.g. Mailchimp free tier (https://mailchimp.com/features/custom-forms/
https://mailchimp.com/features/custom-forms/)
- [ ] obtain domain host from Squarespace and configure host to point to github
- [ ] transfer [github project](https://github.com/reubenson/saint-osmique) to David

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

## Third Party Integrations
### Mailchimp
Mailchimp is used to handle the contact signup form. The following notes describe customizations within the Mailchimp account

In order to get email notifications when someone submits via the form, follow [these instructions](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to turn on email subscription notifcations [here](https://us17.admin.mailchimp.com/lists/settings/defaults?id=1358751). Otherwise, you'll have to manually log into Mailchimp to check on new inquiries.

The signup form itself uses a custom "Message" form field, which needs to be added manually to the account.

The free tier has a limit of 500 subscribers, so you may want to occassionally manually remove "subscribers" from Mailchimp to avoid incurring monthly fees
