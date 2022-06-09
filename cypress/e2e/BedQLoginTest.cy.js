/// <reference types="cypress" />


import { ClickOn } from "../support/Pages/HomePage"
import { Verify } from "../support/Pages/LoginPage"
import { VerifyThat } from "../support/Pages/MyAccountPage"





describe('BedQuarter Login test Suit', () =>
 {



  it('verify response while entering invalid credintials', () =>
  {
    ClickOn.URL()
    ClickOn.LoginButton()
    Verify.InValidCredintials()

  })

  it('Verify response while entering invalid mail format', () => {

    ClickOn.MyAccountURL()
    Verify.EnterInvalidMailFormat()
    
  })

  it('Verify response while entering valid credintials', () => {

    ClickOn.MyAccountURL()
    Verify.EnteringValidCredintials()
    VerifyThat.PageTitleMyAccount()

  })


  


})
