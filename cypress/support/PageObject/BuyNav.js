class BuyPages {
   
    product = '.shop-menu > .nav > :nth-child(2) > a';
    women = ':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa'
    dress = '#Women > .panel-body > ul > :nth-child(1) > a'
    addcart = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    cart = '.shop-menu > .nav > :nth-child(3) > a'
    ceckout = '.col-sm-6 > .btn'
    order = ':nth-child(7) > .btn'
    cardname = '[data-qa="name-on-card"]'
    cardnumber = '[data-qa="card-number"]'
    cvc = '[data-qa="cvc"]'
    exp = '[data-qa="expiry-month"]'
    yearr = '[data-qa="expiry-year"]'
    confirm = '[data-qa="pay-button"]'
    inputsbut() {
        cy.get(this.product).click()
    }
    inputwcategory(){
        cy.get(this.women).click()
        cy.wait(2000)
    }
    inputdress(){
        cy.get(this.dress).click()
        cy.wait(2000)
    }
    inputaddcart(){
        cy.get(this.addcart).click()
    }
    
    inputcart(){
        cy.get(this.cart).click()
    }
    inputco(){
        cy.get(this.ceckout).click()
    }
    inputorder(){
        cy.get(this.order).click()
    }
    inputcard(cardname){
        cy.get(this.cardname).clear().type(cardname)
    }
    inputcardnum(cardnumber){
        cy.get(this.cardnumber).clear().type(cardnumber)
        
    }
    inputcvc(cvc){
        cy.get(this.cvc).clear().type(cvc)
    }
    inputexp(exp){
        cy.get(this.exp).clear().type(exp)
    }
    inputyearr(yearr){
        cy.get(this.yearr).clear().type(yearr)
    }
    inputconfirm(){
        cy.get(this.confirm).click()
    }

}

export default BuyPages;