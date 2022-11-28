///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>
///<reference types="cypress-iframe" /> 

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import CartPage from '../pageObjects/CartPage'


describe('Test scenario', function()
{
    before(function(){
        //runs once before all tests in the block
        cy.fixture('test6').then(function(data){
            this.data=data
        })
       
    })

    it('Test case 1', function(){
        const homePage= new HomePage()
        const productPage= new ProductPage()
        const cartPage=new CartPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getShopButton().click()

        cy.productsSelect('Samsung')
        cy.productsSelect('Nokia')

        
        productPage.getCheckoutButton().click()
        cartPage.getCheckoutButton().click()
        cartPage.getDeliveryLocationdropdown().type('i',{timeout:8000})
        cy.get('.suggestions ul', {timeout:8000}).each(($el, index, $list)=>{

            if(($el).text().includes('India')){
                cy.wrap($el).click()
            }
        })
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').then(function($el){
            const text = $el.text()
            expect(text.includes(' Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
        })
})

})


