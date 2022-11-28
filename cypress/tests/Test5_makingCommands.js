
///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>
///<reference types="cypress-iframe" /> 

describe('Making commands', function(){

    before(function(){

        cy.fixture('test5').then(function(data){
            this.data=data
            
            cy.visit('https://rahulshettyacademy.com/angularpractice/')
        })
    })

    it('Test case1', function(){

        cy.xpath('//a[contains(text(),"Shop")]').click()

        // cy.get('.card-title').each(($el, index, $list)=>{
        //    if( $el.text().includes('Nokia Edge')){ //mora sa includes text jer je JS text funkcija, a ne sa contains koja je cypress

        //     cy.xpath("//button[contains(text(), 'Add')]").eq(index).click()
        //    }
        // })
//sve ovo sto smo napravili moze da se prebaci u commands...kao metode u javi, smesti se u commands.js, da se ime selektovanje proizvoda
// i onda se poziva ta metoda a svaki put joj se zada product name koji zelimo da se selktuje

/* Cypress.Commands.add('Product', (productName) => {  
    
    cy.get('.card-title').each(($el, index, $list)=>{
    
    
    if( $el.text().includes(productName)){ 

     cy.xpath("//button[contains(text(), 'Add')]").eq(index).click() }
     })}) */

        cy.productsSelect('Nokia')
        cy.xpath("//a[contains(text(), ' Checkout')]").click()
    })
})