/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
import { resolve } from "path";
import { startDevServer } from "@cypress/vite-dev-server";

// eslint-disable-next-line no-unused-vars
export = (on: any, _config: any) => {
  on("dev-server:start", (options: any) => {
    return startDevServer({
      options,
      viteConfig: {
        // eslint-disable-next-line no-undef
        configFile: resolve(__dirname, "..", "..", "vite.config.ts"),
      },
    });
  });
};
