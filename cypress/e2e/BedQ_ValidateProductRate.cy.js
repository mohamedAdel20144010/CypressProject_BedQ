import { ClickOn } from "../support/Pages/HomePage"
import { ProductDetails } from "../support/Pages/ProductPage"


describe ('Customer Rate Validation', () => {

    beforeEach('Open Product page and click on (Customer Rate) button', ()=>{

        ClickOn.ProductRatePage()
        ProductDetails.CustomerRateField()
    })


    it('Positive - Verify response while fill all fields and click on submit',()=>{

        ProductDetails.Fill_All_CustomerRate_Fields()
    })

    it('Negative - Verify response while leave Rate section Empty and submit', () => {

        ProductDetails.Leave_Rate_Section_Empty()
    })

    it('Negative - Verify response while leave (Nickname) field empty and submit', ()=>{
        ProductDetails.Leave_UserName_empty()
    })

    it('Negative - Verify response while leave (Summary) field empty and submit',()=>{
      
        ProductDetails.Leave_Summary_Empty()
    })

    
})