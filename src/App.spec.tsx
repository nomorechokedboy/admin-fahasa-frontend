import { mount } from "@cypress/react";
import App from "./App";

/* eslint-disable no-undef */

describe("App", () => {
  beforeEach(() => {
    mount(<App />);
  });

  it("check button existed", () => {
    cy.get("button").contains("count is: 0");
  });

  it("can click button ten times", () => {
    for (let count = 0; count < 10; count++) {
      cy.get("button").click();
    }

    cy.get("button").should("have.text", "count is: 10");
  });
});
