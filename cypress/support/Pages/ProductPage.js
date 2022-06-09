/// <reference types="cypress" />

export class Productpage {

    ClickonProduct()
    {
        
        cy.get('[class="new-products"]').scrollIntoView().find('[alt="uJolly 2 Back Massager"]').click()
    }
    TheProductName ()
    {
        cy.get('[class="page-title"]').find('[data-ui-id="page-title-wrapper"]')
        .should('contain','uGalaxy Eye Massager')
    }
    ChangeQuantity(number)
    {
        cy.reload()
       const ProductQ= cy.get('[class="input-text qty"]').clear()
       ProductQ.type(number)
        cy.get('#product-addtocart-button').click()
        cy.wait(500)

    }
    ErrorMsgValidation()
    {
        
        cy.wait(500)
        cy.get('#qty-error').should('contain','Please enter a quantity greater than 0.')
    }
    SuccessMsgvalidation()
    {
        cy.wait(500)
        cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')
        .should('contain','You added uJolly 2 Back Massager to your shopping cart.')
    }

    CustomerRateField()
    {
        cy.get('#tab-label-reviews-title').click()
        //Validate the existance of the fields
        cy.get('[class="fieldset review-fieldset"]')
        .find('[class="field required review-field-ratings"],[class="field review-field-nickname required"],[class="field review-field-summary required"],[class="field review-field-text required"],[class="actions-toolbar review-form-actions"]')
    }
    Fill_All_CustomerRate_Fields()
    {
        //select rate
        cy.get('#Quality_rating_label').parent().children('[class="control review-control-vote"]').find('#Quality_1_label').click()
        cy.get('#Value_rating_label').parent().children('[class="control review-control-vote"]').find('#Value_1_label').click()
        cy.get('#Price_rating_label').parent().children('[class="control review-control-vote"]').find('#Price_1_label').click()
        //Enter name
        cy.get('#nickname_field').type('Mohamed Adel')
        //Enter Summary
        cy.get('#summary_field').type('So bad So bad So bad So bad')
        //Enter review
        cy.get("#review_field").type('So bad So bad So bad So bad')
        //Click on Submit
        cy.get('[class="action submit primary"]').click()
        //Success message
        const VaidationMsg = cy.get('[class="message-success success message"]')
        VaidationMsg.should('contain','You submitted your review for moderation.')

    }

    Leave_Rate_Section_Empty()
    {
        //Enter name
        cy.get('#nickname_field').type('Mohamed Adel')
        //Enter Summary
        cy.get('#summary_field').type('So bad So bad So bad So bad')
        //Enter review
        cy.get("#review_field").type('So bad So bad So bad So bad')
        //Click on Submit
        cy.get('[class="action submit primary"]').click()
        //validation error message
        const RateErrorMessage = cy.get('[class="mage-error"]')
        RateErrorMessage.should('contain','Please select one of each of the ratings above.')
    }

    Leave_UserName_empty()
    {
        //select rate
        cy.get('#Quality_rating_label').parent().children('[class="control review-control-vote"]').find('#Quality_1_label').click()
        cy.get('#Value_rating_label').parent().children('[class="control review-control-vote"]').find('#Value_1_label').click()
        cy.get('#Price_rating_label').parent().children('[class="control review-control-vote"]').find('#Price_1_label').click()
        
        //Enter Summary
        cy.get('#summary_field').type('So bad So bad So bad So bad')
        //Enter review
        cy.get("#review_field").type('So bad So bad So bad So bad')
        //Click on Submit
        cy.get('[class="action submit primary"]').click()
        const usernameErrorMessage = cy.get('[class="mage-error"]')
        usernameErrorMessage.should('contain','This is a required field.')
    }

    Leave_Summary_Empty()
    {
         //select rate
         cy.get('#Quality_rating_label').parent().children('[class="control review-control-vote"]').find('#Quality_1_label').click()
         cy.get('#Value_rating_label').parent().children('[class="control review-control-vote"]').find('#Value_1_label').click()
         cy.get('#Price_rating_label').parent().children('[class="control review-control-vote"]').find('#Price_1_label').click()
         //Enter name
         cy.get('#nickname_field').type('Mohamed Adel')
       
         //Enter review
         cy.get("#review_field").type('So bad So bad So bad So bad')
         //Click on Submit
         cy.get('[class="action submit primary"]').click()
         const SummaryErrorMessage = cy.get('[class="mage-error"]')
         SummaryErrorMessage.should('contain','This is a required field.')
    }

}
export const ProductDetails = new Productpage()


