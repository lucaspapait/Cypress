import homeSaucePage from './homeSaucePage'
import inventoryPage from './inventoryPage'

describe('POM Implementation', () =>{

    beforeEach(()=> {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should login to inventory page', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleSpan().should('have.text' , 'Products')
    });

    it('should display incorrect usarname message', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword(secret_sauce);
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleSpan().should('have.text' , 'Epic sadface: Sorry,')
    });
})