import UserData from "../fixtures/UserData.json"
import BuyPages from "../support/PageObject/BuyNav"
import LoginPages from "../support/PageObject/LogNav"
import NavigationPages from "../support/PageObject/Navigator"
import Index from "../support/index"

const navigationPages = new NavigationPages();
const buyPages = new BuyPages()
const loginPage = new LoginPages()
const userData = UserData.DataUser1

describe('Membeli Barang', () => {
  it('passes', () => {
   cy.homebase()
    loginPage.inputLogin(userData.email)    
    loginPage.inputPasslog(userData.passwd)   
    loginPage.inputlbtn()
    buyPages.inputsbut()
    buyPages.inputwcategory()
    buyPages.inputdress()
    buyPages.inputaddcart()
    buyPages.inputcart()
    buyPages.inputco()
    buyPages.inputorder()
    buyPages.inputcard(userData.firstnama)
    buyPages.inputcardnum(userData.nocard)
    buyPages.inputcvc(userData.cvc)
    buyPages.inputexp(userData.expired)
    buyPages.inputyearr(userData.year)
    buyPages.inputconfirm()
    cy.get('[data-qa="order-placed"] > b', { timeout: 10000 }).should('exist');

  })
})