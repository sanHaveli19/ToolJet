export class ToolJetPage{
    elements = {
        lblSignin : () => cy.get('[class="form-header"]'),
        lblEmail : () => cy.get('[data-cy="undefined-label"]'),
        inpEmail : () => cy.get('[id="email"]'),
        inpPassword : () => cy.get('[data-cy="password-input"]'),
        btnSignin : () => cy.contains('button','Sign in'),
        btnCreateApp: () => cy.get('[data-cy="create-new-app-button"]'),
        ddcreatetemplete : () => cy.get('[data-cy="import-dropdown-menu"]'),
        ddlChoosefromTemplete : () => cy.get('[data-cy="choose-from-template-button"]'),
        ddlImportFromDevices : () => cy.get('[data-cy="import-option-label"]'),
        searchSampleTemplete : () => cy.get('[data-cy="search-input-field"]'),
        ddlSearchSampleTemplete : () => cy.get('[data-cy="bug-tracker-list-item"],[data-cy="employee-feedback-list-item"]'),
        btnCreateTemplete : () => cy.get('[data-cy="create-application-from-template-button"]'),
        btnCreateAppTemplete : () => cy.get('[data-cy="+-create-app"]'),
        logoTooljet : () => cy.get('[data-cy="editor-page-logo"]'),
        lbtBackToApps : () => cy.get('[data-cy="back-to-app-option"]'),
        inpAppName : () => cy.get('[data-cy="app-name-input"]'),
        lblCardOne: () => cy.get('[data-cy="test-card"]').trigger('mouseover', { force: true }),
        ddIcon : () => cy.get('[data-cy="app-card-menu-icon"]').invoke('css', 'visibility', 'visible'),
        txtExport : () => cy.get('[data-cy="export-app-card-option"]'),
        btnExportedSelectedVersion : () => cy.contains('button','Export selected version'),
        btnImport : () => cy.get('[data-cy="import-app"]'),
        btnClosePopUp : () => cy.get('[class="btn-close"]'),
        btnSkip : () => cy.contains('button','Skip (1/6)')
    }
    clickBtnSkip(){
        this.elements.btnSkip().click()
    }
    clickClosePopUpBtn() {
        cy.get('.btn-close').then(($btn) => {
            if ($btn.length > 0) {  // Check if the element exists
                cy.wrap($btn).click();
            } else {
                cy.log("Close popup button is not there");
            }
        });
    }
    enterEmail(email){
        this.elements.inpEmail().type(email)
    }
    enterPassword(password){
        this.elements.inpPassword().type(password)
    }
    clickSigninBtn(){
        this.elements.btnSignin().click()
    }
    clickCreateTempleteDropdown(){
        this.elements.ddcreatetemplete().click()
    }
    clickChoosefromTempleteDropdownList(){
        this.elements.ddlChoosefromTemplete().click()
    }
    clickImportFromDevicesDropDownList(){
        this.elements.ddlImportFromDevices().click()
    }
    searchSampleTemplete(templete){
        this.elements.searchSampleTemplete().type(templete)
    }
    clickSearchSampleTempleteDropdownList(){
        this.elements.ddlSearchSampleTemplete().click()
    }
    clickCreateTempleteBtn(){
        this.elements.btnCreateTemplete().click()
    }
    clickCreateAppTempleteBtn(){
        this.elements.btnCreateAppTemplete().click()
    }
    clickTooljetLogo(){
        this.elements.logoTooljet().click()
    }
    clickBackToAppsLabel(){
        this.elements.lbtBackToApps().click()
    }
    clickCreateAppBtn(){
        this.elements.btnCreateApp().click()
    }
    enterAppNmae(name){
        this.elements.inpAppName().type(name)
    }
    clickCardOneLabel(){
        this.elements.lblCardOne().click().invoke('show').click();
    }
    clickDropdownIcon(){
        this.elements.ddIcon().first().click({force:true})
    }
    clickExportOption(){
        this.elements.txtExport().click()
    }
    clickExportedSelectedVersionBtn(){
        this.elements.btnExportedSelectedVersion().click({force:true})
    }
}
export const tooljetPage = new ToolJetPage()