describe("Posts page", () => {
  it("navigates to page, creates a new post, and writes a comment on that post", () => {
    cy.visit("/posts");

    cy.get("#newPost").type("This is a test post");
    cy.get("#postButton").click();

    cy.wait(1000);

    cy.get("#newComment").type("This is a test comment");
    cy.get("#commentButton").click();

    cy.get(".post").should("have.length", 1);
  });
});
