describe("UI test", () =>{

    beforeEach(()=>{
        //Access website
        cy.visit('http://saucedemo.com')

        //login
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it("Validate filter", () => {
        // validate filter A TO Z
        cy.contains('Name (A to Z').should('be.visible')

        //Change the filter and validate the new filter
        cy.get('.product_sort_container').select('za');
        cy.contains('Name (Z to A').should('be.visible')
    });
  });