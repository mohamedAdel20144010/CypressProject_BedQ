/// <reference types="cypress" />


export class LoginNow {
    
   /*
    PageTitle()
    {
        const pagetitle = cy.get('.page-title')
        pagetitle.should('contain','Customer Login')
    }
    */
    InValidCredintials()
    {
        cy.wait(200)
        const username2 = cy.get('#email')
        username2.type('MO@gmail.com')

        const Password2 = cy.get('#pass')
        Password2.type('Test@1234')

        const Submit2 = cy.get('#send2').click()
        const ErrMsg = cy.get('[class="messages"]')
        ErrMsg.should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }

    EnterInvalidMailFormat()
    {
        cy.wait(200)
       cy.get('#email').clear().type('MO')

        cy.get('#pass').type('Test@1234')

        cy.get('#send2').click()
        const MailFormatErr = cy.get('#email-error')
        MailFormatErr.should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
    }

    EnteringValidCredintials()
    {
        cy.get('#email').type('mohamed20144010@gmail.com')

         cy.get('#pass').type('Test@1234')
         cy.get('#send2').click()
    }
}

export const Verify = new LoginNow()