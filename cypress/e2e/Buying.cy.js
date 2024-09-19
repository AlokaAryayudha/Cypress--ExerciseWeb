import UserData from "../fixtures/UserData.json"
import BuyPages from "../support/PageObject/BuyNav"
import Index from "../support/index"
import '../e2e/Login.cy'

const buyPages = new BuyPages()
const userData = UserData.DataUser1

describe('Membeli Barang', () => {
  it('passes', () => {
  cy.homebase()
   buyPages.inputsbut()
  })
})