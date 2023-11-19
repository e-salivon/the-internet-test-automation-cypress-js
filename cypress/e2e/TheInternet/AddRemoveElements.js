const { navigateTo } = require("../../support/page_objects/navigationPages")

describe('Scenarios to check adding and removing elements on the page', () => {
  beforeEach(() =>{
    navigateTo.AddRemoveElementsPage()
    cy.contains('Add Element').click()
  })
  const DeleteButton = () => cy.contains('Delete');

    it('Adding elemet on the page', () => {
      
      DeleteButton().should('be.visible') // Assert that el is visible   
      })

    it('Removing the element from the page', () => {
        DeleteButton().click()
        DeleteButton().should('not.exist') // Assert that el is not exist
      })
    })
  
  

    