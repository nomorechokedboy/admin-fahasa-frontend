import { mount } from "@cypress/react";
import App from "../../src/App";

describe("App test", () => {
    beforeEach(() => {
        mount(<App />);
    });

    it("can toggle dark theme", () => {
        cy.get("button").click();
    });

    it("navigate to home view", () => {
        cy.contains("Home").click();
        cy.url().should("include", "/");
    });

    it("navigate to manage view", () => {
        cy.contains("Manage").click();
        cy.url().should("include", "/manage");
    });

    it("navigate to products view", () => {
        cy.contains("Products").click();
        cy.url().should("include", "/products");
    });

    it("navigate to detail view", () => {
        cy.contains("Detail").click();
        cy.url().should("include", "/detail");
    });
});
