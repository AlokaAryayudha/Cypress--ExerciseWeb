import LoginPages from "../support/PageObject/LogNav"
import UserData from "../fixtures/UserData.json"
import Index from "../support/index"
 

const loginPage = new LoginPages()
const userData = UserData.DataUser1

describe('Login', () => {
  it('Berhasil', () => {
    cy.homebase()
    loginPage.inputLogin(userData.email)    
    loginPage.inputPasslog(userData.passwd)   
    loginPage.inputlbtn()
    cy.get('i.fa.fa-user').should('exist');


  })
})