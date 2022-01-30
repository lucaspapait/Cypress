describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("filss all the text input fields", () => { 
        const firstName = "Lucas";
        const lastName = "Papait";
        const fullName = `${firstName} ${lastName}`;

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("lucas.papait@gmail.com");
        cy.get('#requests').type("Maluco");
        cy.get('#signature').type(`${firstName} ${lastName}`);
    });

    it("select two ticktes", () => {
        cy.get("#ticket-quantity").select(2);
    });

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    });

    it("selects 'social media' checkbox", () => {
        cy.get("#social-media").click();
    });

    it("selects 'friens', and 'publication', then uncheck 'friend'", () =>{
        cy.get("#friend").click();
        cy.get("#publication").click();
        cy.get('#friend').uncheck();
    });

    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX")
    });

    it("alerts on invalid email", () => {
        cy.get("#email")
        .as("email")
        .type("lucas.papait-gmail.com");

        cy.get("#email.invalid").should("exist");
        
        cy.get("@email")
        .clear()
        .type("lucas.papait@gmail.com")

        cy.get("#email.invalid").should("not.exist");
    });

    it.only("fills and reset the form", () => {
        const firstName = "Lucas";
        const lastName = "Papait";
        const fullName = `${firstName} ${lastName}`;

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("lucas.papait@gmail.com");
        cy.get("#ticket-quantity").select(1);
        cy.get("#vip").check();
        cy.get("#friend").click();
        cy.get('#requests').type("Ipa Beer");

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );

        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        cy.get("button[type='reset']").click()

        cy.get("@submitButton")
    });
});