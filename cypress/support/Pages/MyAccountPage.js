


export class myAccount_Page {

PageTitleMyAccount()
{
    cy.get('[class="page-title-wrapper"]').find('[data-ui-id="page-title-wrapper"]').should('contain','My Account')
}

}

export const VerifyThat = new myAccount_Page() 