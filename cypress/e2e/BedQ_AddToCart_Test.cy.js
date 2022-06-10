/// <reference types="cypress" />

import { ClickOn } from "../support/Pages/HomePage"
import { ProductDetails } from "../support/Pages/ProductPage"

describe('Check Product',()=> {

    it.skip('Open Product Details', ()=> {
       ClickOn.URL()
        ProductDetails.ClickonProduct()
    })

    it.skip('verify resposne while entering invalid quntity', ()=> {
        ProductDetails.ChangeQuantity('0')
        ProductDetails.ErrorMsgValidation()
    })

    it.skip('verify response while enter valid quntity', () => {
        ProductDetails.ChangeQuantity('3')
       
        ProductDetails.SuccessMsgvalidation()
    })
})



