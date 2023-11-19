//work with Autentification page

export class AutentificationPage{
    AutentificationFormWithCorrectCredentials(){
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        
    }
    AutentificationFormWithWrongUserName(){
        cy.get('[id="username"]').type('tomsmith123')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()


    }

    AutentificationFormWithWrongPassword(){
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('superSecretPassword!7')
        cy.get('[type="submit"]').click()
    }
}

export const Submit = new AutentificationPage