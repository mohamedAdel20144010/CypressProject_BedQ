

export class HomePage
 {
 URL()
 {
            cy.visit('https://bedquarter.com/')
            cy.wait(500)
}
MyAccountURL()
{
    cy.visit('https://bedquarter.com/customer/account/login/referer/aHR0cHM6Ly9iZWRxdWFydGVyLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/')
    cy.wait(500)
}
LoginButton()
{
            cy.get('.account-link').click()
            cy.wait(500)
}

ProductRatePage()
{
    cy.visit('https://bedquarter.com/ujolly-2-back-massager.html')
}
 }
export const ClickOn = new HomePage()