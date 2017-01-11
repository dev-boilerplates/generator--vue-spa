#__PROJECTNAME

### Using this setup

This app has a `global` object named `App` and boots via the `App.init()` command in `main.js`.

App consists of the following:
* Event - A global event system to communicate to all Vue instances and components
* Storage - A local storage class
* Components - Main app config/layout consisting of multiple Vue instances.

`core/init.js` is ready out of the box and will launch the app once all components have been attached via a `loaded` event, `$emitted` through the Event system. So if there are any firstload params/requirements hook into this to prevent any screen flicker or just handle basic loading. ie: `App.event.$on('loaded', handle)`

Components are sharing `mixins`, which also share the `store` object, meaning that all components have access to this `reactive` state object.

Start creating by editing, `jade/partials/app` for `SPA` structure and attaching `components` via the `js/core/base` file. `js/main` will boot app straight away on `npm start`

**nb.** For adding `Vue plugins`, apply the neccessary includes to `core/init` 

### Other

Tricks included:

* Browserify -- soon converting to `Rollup`
* Vue 2
* Vue-router
* ES6 | Babel

**Project Enviroments**

The build process has been scripted directly using the CLI and NPM scripts.

#### Firstrun
`npm run create` will create directory structure required to develop into. On complete it will launch `npm start` as normal.

#### Dev

`npm start` will boot a server on port 3000 and begin listening to file changes to the usual suspects. Compiles and serves from `./public`

#### Production

`npm build` and find the output in the `./dist` folder

---
