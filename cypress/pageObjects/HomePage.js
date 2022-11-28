class homePage{

    getShopButton(){

        return cy.xpath('//a[contains(text(),"Shop")]')
        
        }
    }


export default homePage;