import { navigateTo } from "../../support/page_objects/navigationPages";

//Scenarios:
//1. Default value
//2.Values in the dropdown
//3.Selected value displayed in the dropdown field

describe("Verify Dropdown functionality", () =>{
    beforeEach(() =>{
        cy.visit('/');
        navigateTo.DropdownPage();
    }        
    );

    //1. Default value

    it("Verify default value in the dropdown field", () =>{
        cy.get('#dropdown').should('contain', 'Please select an option');
    });

    //2.Values in the dropdown

    it("There are 3 options in the dropdown", () =>{
        cy.get('#dropdown').then(($dropdown) =>{
        // Find all options within the dropdown
            const options = $dropdown.find('option');
        // Ensure there are 3 options in the dropdown
            expect(options).to.have.length(3);
        // Find the text content of each option
        options.each((index, option) => {
        // Get the text of the option
            const optionText = Cypress.$(option).text().trim();
        // Expected option's values for the dropDown
            const expectedOptions = [
                "Please select an option",
                "Option 1",
                "Option 2"
            ];
        // Check the text matches the expected result
            expect(optionText).to.equal(expectedOptions[index]);
          
            })
        })
    })

    //3.Selected value displayed in the dropdown field

    it.only("Selected value displayed in the dropDown field", () =>{
        cy.get('#dropdown').select('1');
        cy.get('#dropdown').find('[value="1"]').should('be.selected').and('have.text', 'Option 1')
      });
    });
            
        
            
     

   

