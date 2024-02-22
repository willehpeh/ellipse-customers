# How to set up this type of Nx workspace #

* `npx create-nx-workspace@latest`
  * Creates workspace
  * Asks for project name, first app type (Angular in this case), SSR/SSG etc etc
* `nx add @nx/nest`
  * Add NestJS capabilities to Nx monorepo (allow Nx to handle and manage NestJS apps)
* `nx g @nx/nest:app ellipse-contacts-api --frontendProject ellipse-contacts`
  * Generate NestJS app
  * Configure proxy settings in Angular app
