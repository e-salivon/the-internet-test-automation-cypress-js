//class is a description of a category of things, template that defines the attributes (property) and behaviors (method) of a type of object
export class NavigationPage {
AutonteficationPage(){
    cy.visit('/')
    cy.contains('Form Authentication').click()
    }
AddRemoveElementsPage(){
    cy.visit('/')
    cy.contains('Add/Remove Elements').click()
}
CheckBoxesPage(){
    cy.visit('/')
    cy.contains('Checkboxes').click()

}
DropdownPage(){
    cy.visit('/')
    cy.contains('Dropdown').click()
}
FileUploadPage(){
    cy.visit('/')
    cy.contains('File Upload').click()
}
SortableDataTablesPage(){
    cy.visit('/')
    cy.contains('Sortable Data Tables').click()
}
}


//create a new instance of the class and accigned it to the object
export const navigateTo = new NavigationPage