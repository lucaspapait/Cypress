

describe('Home Sauce Demo', ()=> {
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
     });
     const tests = require('../../cypress/fixtures/sauceUsers.json')

     tests.forEach (test => {

       it(test.name , function(){

            homeSaucePage.typeUsername(test.username);
            homeSaucePage.typePassword(test.password);
            homeSaucePage.clickLogin();

            if(test.name === 'shoud login to inventory page'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)
            }
       });

     });

});