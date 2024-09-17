



Cypress.Commands.add('homebase' ,() => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    })
Cypress.Commands.add('fullname' ,() => {
    cy.get(fname).clear().type(firstnama)
    cy.get(lname).clear().type(last)

})