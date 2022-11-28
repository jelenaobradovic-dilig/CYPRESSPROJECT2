///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>
///<reference types="cypress-iframe" /> 


describe('Test scenario', function()
{
    this.beforeEach(function(){
        //runs once before all tests in the block
        cy.fixture('test4').then(function(data){
            this.data=data
        })

    })


    it('Test case 1', function(){


        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.xpath('//body/app-root[1]/form-comp[1]/div[1]/form[1]/div[1]/input[1]').type(this.data.name)
        cy.xpath('//body[1]/app-root[1]/form-comp[1]/div[1]/form[1]/div[5]/select[1]').select(this.data.gender)
        
        // zasto prihvata samo pod navodnicima kao da je string a ne bez kao da je broj
        cy.xpath("//input[@name='name']", this.timeout(5000)).eq(1).should('have.value',this.data.name)

        //cy.xpath('//input[@class="ng-pristine ng-valid ng-touched"]', this.timeout(5000)).should('have.string', this.data.name)

        //cy.xpath('//body/app-root[1]/form-comp[1]/div[1]/form[1]/div[1]/input[1]').should('have.attr', 'minlength', '2') // ispravno, ali zasto nisam koristila invoke, nekad puca sa invoke
        cy.xpath('//body/app-root[1]/form-comp[1]/div[1]/form[1]/div[1]/input[1]').invoke('attr', 'minlength').should('equal','2')
        cy .get('#inlineRadio3').should('be.disabled').and('be.visible')

})


    it('Test case 2', function(){

        //*********ako su podaci koj epozivamo iz fajla u vidu niza, postoji metoda u JS .forEach koja ide kroz niz******

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.xpath('//a[contains(text(),"Shop")]').click()
        
        this.data.products.forEach(function(element){
            cy.productsSelect(element)

        })


})})