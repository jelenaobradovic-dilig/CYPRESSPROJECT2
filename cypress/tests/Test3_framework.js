///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>
///<reference types="cypress-iframe" /> 

describe('Test scenario', function()
{
    before(function(){
        //runs once before all tests in the block
    })

    it('Test case 1', function(){

cy.visit('https://rahulshettyacademy.com/angularpractice/')
cy.xpath('//body/app-root[1]/form-comp[1]/div[1]/form[1]/div[1]/input[1]').type('Jelena')

//cy.xpath('//body[1]/app-root[1]/form-comp[1]/div[1]/form[1]/div[5]/select[1]').select(1) //bolje je po textu recimo Female, jer se nekad mozda izmeni redosled

cy.xpath('//body[1]/app-root[1]/form-comp[1]/div[1]/form[1]/div[5]/select[1]').select('Female')

//mozemo da dodamo .pause ili .debug, to zaustavlja test na tom mestu, da mozemo da pogledamo gde je problem

})

    it('Test case 2', function(){


})

    it('Test case 3', function(){


})
})