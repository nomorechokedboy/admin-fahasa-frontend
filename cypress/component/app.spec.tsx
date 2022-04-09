import { mount } from "@cypress/react";
import App from "../../src/App";

describe("App test", () => {
    beforeEach(() => {
        mount(<App />);
    });

    it("can toggle dark theme", () => {
        cy.get("button[title='Toggle color scheme']").click();
    });
});
