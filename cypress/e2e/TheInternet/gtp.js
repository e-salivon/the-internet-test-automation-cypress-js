
describe('Mock data with intercept', () => {
    it('Mocks a successful POST request', () => {
      cy.intercept('POST', '/api/login', (req) => {
        req.reply({
          statusCode: 200,
          body: {
            success: true,
            message: 'Login successful'
          }
        })
      })
      cy.visit('/')
      cy.get('#login-form').submit()
      cy.url().should('include', '/dashboard')
      cy.get('#message').should('contain', 'Login successful')
    })
  })