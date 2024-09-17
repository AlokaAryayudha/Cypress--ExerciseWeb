import NavigationPages from "../support/PageObject/Navigator"
import UserData from "../fixtures/UserData.json"
import Index from "../support/index"

describe('template spec', () => {
 
//   function RandomFirst() {
//     const randomString = Math.random().toString(36).substring(2, 10);
//     return randomString;
// }
//   function RandomLast() {
//     const randomString = Math.random().toString(36).substring(2, 10);
//     return randomString;
// }

  function RandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const EmailDummy = randomString + "@gmail.com";
    return EmailDummy;
  }
  
  // const FirstName = RandomFirst();
  // const LastName = RandomLast();
  
  const EmailDummy = RandomEmail();
  const navigationPages = new NavigationPages();
  const userData = UserData.DataUser1;

  //const userData = UserData.DataUser2;

  it('passes', () => {
    cy.visit('')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(EmailDummy)
    cy.get('[data-qa="signup-email"]').type('a@212345')
    cy.get('[data-qa="signup-button"]').click().should('be.visible')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').type(EmailDummy)
    cy.get('[data-qa="password"]').should('exist').wait(1000).type('a@212345')
    cy.get('[data-qa="days"]').select('26')
    cy.get('[data-qa="months"]').select('June')
    cy.get('[data-qa="years"]').select('2002')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('[data-qa="first_name"]').type('Kudaa')
    cy.get('[data-qa="last_name"]').type('ded')
    cy.get('[data-qa="company"]').type('Kudaterbang')
    cy.get('[data-qa="address"]').type('jl.kudaKudaa')
    cy.get('[data-qa="address2"]').type('jl.kudaKudaa')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('java')
    cy.get('[data-qa="city"]').type('jakarta')
    cy.get('[data-qa="zipcode"]').type('1212')
    cy.get('[data-qa="mobile_number"]').type('08123445')
    cy.url().should('include','account_created')

  })

  it.only('Berhasil Membuat akun', () => {
    cy.homebase()
    navigationPages.inputRname(userData.firstnama)
    navigationPages.inputRmail(userData.email)
    navigationPages.inputRbtn()
    navigationPages.inputMgen()
    navigationPages.inputFullname(userData.fullnamee)
    navigationPages.inputPsw(userData.passwd)
    navigationPages.inputDay(userData.day)
    navigationPages.inputMon(userData.month)
    navigationPages.inputYear(userData.year)
    navigationPages.inputFirstname(userData.firstnama)
    navigationPages.inputLastname(userData.last)
    navigationPages.inputCompany(userData.company)
    navigationPages.inputaddr(userData.addr)
    navigationPages.inputaddr2(userData.addr)
    navigationPages.inputCountry(userData.country)
    navigationPages.inputState(userData.state)
    navigationPages.inputCity(userData.city)
    navigationPages.inputZip(userData.code)
    navigationPages.inputTelfon(userData.number)
    navigationPages.inputRegbtn()
  })

})