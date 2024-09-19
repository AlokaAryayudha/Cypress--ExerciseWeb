class BuyPages {
   
    product = '.shop-menu > .nav > :nth-child(2) > a';
    
    inputsbut() {
        cy.get(this.product).click();
    }
}

export default BuyPages;