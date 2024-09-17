class NavigationPages{
    
    sgname = '[data-qa="signup-name"]'
    sgemail = '[data-qa="signup-email"]'
    sgbtn = '[data-qa="signup-button"]'
    mgen = '#id_gender1'
    fgen = '#id_gender2'
    fullname = '[data-qa="name"]'
    psw = '[data-qa="password"]'
    day_btn = '[data-qa="days"]'
    mon_btn = '[data-qa="months"]'
    year_btn = '[data-qa="years"]'
    new_let = '#newsletter'
    optin = '#optin'
    fname = '[data-qa="first_name"]'
    lname = '[data-qa="last_name"]'
    company = '[data-qa="company"]'
    addr = '[data-qa="address"]'
    addr2 = '[data-qa="address2"]'
    country = '[data-qa="country"]'
    state = '[data-qa="state"]'
    city = '[data-qa="city"]'
    zip = '[data-qa="zipcode"]'
    telfon = '[data-qa="mobile_number"]'
    reg_btn ='[data-qa="create-account"]'

    inputRname(sgname){
        cy.get(this.sgname).clear().type(sgname)
    }
    inputRmail(sgemail){
        cy.get(this.sgemail).clear().type(sgemail)
    }
    inputRbtn(sgbtn){
        cy.get(this.sgbtn).click()
    }
    inputMgen(mgen){
        cy.get(this.mgen).click()
    }
    inputFgen(fgen){
        cy.get(this.fgen).click()
    }
    inputFullname(fullname){
        cy.get(this.fullname).clear().type(fullname)
    }
    inputPsw(psw){
        cy.get(this.psw).clear().type(psw)
    }
    inputDay(day_btn){
        cy.get(this.day_btn).select(day_btn)
    }
    inputMon(mon_btn){
        cy.get(this.mon_btn).select(mon_btn)
    }
    inputYear(year_btn){
        cy.get(this.year_btn).select(year_btn)
    }
    inputCompany(company){
        cy.get(this.company).clear().type(company);
    }
    inputFirstname(fname){
        cy.get(this.fname).clear().type(fname)
    }
    inputLastname(lname){
        cy.get(this.lname).clear().type(lname)
    }
    inputaddr(addr){
        cy.get(this.addr).clear().type(addr)
    }
    inputaddr2(addr2){
        cy.get(this.addr2).clear().type(addr2)
    }
    inputCountry(country){
        cy.get(this.country).select(country)
    }
    inputState(state) {
        cy.get(this.state).clear().type(state)
    }
    inputCity(city) {
        cy.get(this.city).clear().type(city)
    }
    inputZip(zip) {
        cy.get(this.zip).clear().type(zip)
    }
    inputTelfon(telfon) {
        cy.get(this.telfon).clear().type(telfon)
    }
    inputRegbtn(reg_btn){
        cy.get(this.reg_btn).click()
    }

    
}

export default NavigationPages;