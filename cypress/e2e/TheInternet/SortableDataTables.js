import { navigateTo } from "../../support/page_objects/navigationPages";

describe("Scenarios to check table functionality", () =>{
    beforeEach(() =>{
        cy.visit('/');
        navigateTo.SortableDataTablesPage();

    });

    it("Verify column headers", () =>{
        cy.get('#table2').find('thead').then(table2Header =>{
            cy.wrap(table2Header).find('[class="last-name"]').should('contain', 'Last Name');
            cy.wrap(table2Header).find('[class="first-name"]').should('contain', 'First Name');
            cy.wrap(table2Header).find('[class="email"]').should('contain', 'Email');
            cy.wrap(table2Header).find('[class="dues"]').should('contain', 'Due');
            cy.wrap(table2Header).find('[class="web-site"]').should('contain', 'Web Site');
            cy.wrap(table2Header).find('[class="action"]').should('contain', 'Action');

        });

    });

    //the test will fail, 'edit' button does not work
    it("Verify email change", () =>{
        cy.get('#table2').find('tbody').contains('tr', 'Bach').then(tableRow =>{
            cy.wrap(tableRow).find('[href="#edit"]').click();
            cy.wrap(tableRow).find('[class="email"]').clear().type('test@email.com');
            cy.wrap(tableRow).find('[class="email"]').should('contain.text', 'test@email.com');
        })

    });

    // it("Verify Delete functionality", () =>{

    // });

    // it("Veify sorting functionality", () =>{

    // })
})