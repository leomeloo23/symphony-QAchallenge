describe("API test", () =>{
    it("Authentication and Authorization objects validation", () => {
        
        //call the endpoint, get the objects and filter by category
        cy.request("https://api.publicapis.org/entries")
          .its("body.entries")
          .then((entries) => {
            const objAuth = entries.filter(
              (value) => value.Category === "Authentication & Authorization"
            );
          cy.log(`Number of objects: ${objAuth.length}`);      
          cy.log("Objects found:");
          cy.log(JSON.stringify(objAuth, null, 2));
        });
    });
  });