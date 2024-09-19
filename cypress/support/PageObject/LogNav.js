class LoginPages  {

    login = '[data-qa="login-email"]' 
    passlog = '[data-qa="login-password"]'
    logbut = '[data-qa="login-button"]'


    inputLogin(login){
        cy.get(this.login).clear().type(login)
    }
    inputPasslog(passlog){
        cy.get(this.passlog).clear().type(passlog)
    }
    inputlbtn(logbut){
        cy.get(this.logbut).click()
    }
}
export default LoginPages;