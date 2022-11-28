class CartPage{

    getCheckoutButton(){
       return cy.xpath("//*[contains(text(),'Checkout')]")
    }

    getDeliveryLocationdropdown(){
        return cy.xpath("//input[@id='country']")
    }
}
export default CartPage