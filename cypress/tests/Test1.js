
///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>



describe('Vezbanje', function()
{it('Test case', function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
 
   cy.xpath('//a[@class="cart-icon"]').click()

    
})})