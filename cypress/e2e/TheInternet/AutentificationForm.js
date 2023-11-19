
const { Submit } = require("../../support/page_objects/AutentificationPage")
const { navigateTo } = require("../../support/page_objects/navigationPages")

describe('Check Autentification UI', () => {
    beforeEach(() =>{
      navigateTo.AutonteficationPage()
    })
  
      it('User login into the application with correct credentials', () => {
        
          Submit.AutentificationFormWithCorrectCredentials() //login with correct credentials 
          cy.url().should('include', '/secure')
          cy.get('[class="flash success"]').should('be.visible')
        })
  
      it('User logout from the application', () => {
          Submit.AutentificationFormWithCorrectCredentials()
          cy.get('[class="button secondary radius"]').click()
          cy.url().should('include', '/login')
          cy.get('[id="flash-messages"]').should('be.visible')

   
        }) 
 
      it('Login into the application with wrong user name', () =>{
          Submit.AutentificationFormWithWrongUserName()
          cy.url().should('include', '/login')
          cy.contains('Your username is invalid!').should('be.visible')
        }
      ) 

      it('Login into the application with wrong password', () =>{
        Submit.AutentificationFormWithWrongPassword()
        cy.url().should('include', '/login')
          cy.contains('Your password is invalid!').should('be.visible')
      }) 
   
  })
  
  