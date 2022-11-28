///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>
///<reference types="cypress-iframe" /> 

describe('Test scenario', function()
{
    before(function(){
        //runs once before all tests in the block
        cy.visit('http://192.168.88.105:55755/#/sign-in')
    })

    it('Test case 1', function(){

        cy.xpath('//a[@href="#/sign-up"]').click()
        cy.xpath("//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/sign-up[1]/div[1]/div[1]/form[1]/div[1]/input[1]").type('Jovan')
        cy.xpath('//input[@formcontrolname="Lastname"]').type('Jovanovic')
        //cy.xpath('//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/sign-up[1]/div[1]/div[1]/form[1]/div[5]/input[1]').type("jj@yopmail.com")
        cy.xpath('//input[@formcontrolname="Email"]').type("jj@yopmail.com")
        
        //cy.xpath("//body/app-root[1]/div[1]/div[1]/div[1]/div[1]/sign-up[1]/div[1]/div[1]/form[1]/div[7]/input[1]").type('123456')
        cy.xpath('//input[@formcontrolname="Password"]').type("123")
        cy.xpath('//input[@formcontrolname="RePassword"]').type("123")
        cy.xpath("//button[contains(text(),'Register')]").click()

})

    it('Test case 2', function(){


})

    it('Test case 3', function(){


})
})