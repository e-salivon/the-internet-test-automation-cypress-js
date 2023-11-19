const { navigateTo } = require("../../support/page_objects/navigationPages")

//test with page object model

describe('Check Navigation in the main menu', () =>{

      it('Verify navigation across 5 pages in the main menu', () =>{
        navigateTo.AutonteficationPage()
        navigateTo.AddRemoveElementsPage()
        navigateTo.CheckBoxesPage()
        navigateTo.DropdownPage()
        navigateTo.FileUploadPage()
      })
})
