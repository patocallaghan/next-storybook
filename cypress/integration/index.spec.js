/// <reference types="cypress" />

describe("Homepage", () => {
  it("works", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("have.text", "Next.js + Storybook + Percy");
    cy.percySnapshot("Homepage");
  });
});
