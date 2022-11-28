///<reference types = "cypress-xpath"/>

///<reference types = "Cypress"/>
///<reference types="cypress-iframe" /> 

import {v4 as uuid} from 'uuid';

describe('Vezbanje', function()


{it('Test case', function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //kliknemo na frame i onda idemo na inspect

    cy.frameLoaded('#courses-iframe' ,{timeout:5000}) //ovako nas prebaci na frame
    cy.wait(5000)
    cy.iframe().xpath("//a[contains(text(),'Mentorship')]").eq(0).click() //ovako ucita taj iframe i onda idemo .find ako je css lokator ili .xpath ako idemo preko xpatha

    cy.wait(2000)
    //svaki put ako idemo na nesto u frejmu, mora cy.iframe()


   cy.iframe().xpath('//*[contains(@class,"pricing-header")]').should('have.length',2)
   


   //cy.iframe().find('.pricing-header').should('have.length',2) 

    //Q ne radi????

//cy.iframe().find('a[href="mentorship"]').eq(0).click()
 



let randomString = uuid();
let randomEmail = randomString.concat("@yopmail.com")

cy.log('Your UUID is: ' + randomEmail);
    
})})