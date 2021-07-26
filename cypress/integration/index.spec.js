/// <reference types="cypress" />

describe("example to-do app", () => {
  it("displays two todo items by default", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("have.text", "Next.js + Storybook + Percy");
  });
});
