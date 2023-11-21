import { NavigationPage, navigateTo } from "../../support/page_objects/navigationPages";

describe("Check checkboxes logic", () =>{
    let checkBox1;
    let checkBox2;

    beforeEach(() =>{
        // Navigate to the Checkboxes page
        navigateTo.CheckBoxesPage();
        // Assign the checkbox elements to variables
        checkBox1 = cy.get('[type="checkbox"]').first();
        checkBox2 = cy.get('[type="checkbox"]').eq(1);
    });
    

    it("Check default page values", () =>{
        //default status: checkbox 1 = unchecked, checkbox 2 = checked
        checkBox1.should('not.be.checked');
        checkBox2.should('be.checked');
    });

    it("Both checkboxes can be checked", () =>{
        checkBox1.check().should('be.checked');
        checkBox2.should('be.checked');
    });

    it("Both checkboxes can be unchecked", () =>{
        checkBox1.should('not.be.checked');
        checkBox2.check().should('not.be.checked');
    })
});


