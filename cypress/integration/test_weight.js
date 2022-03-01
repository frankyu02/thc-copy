describe('Test Weight', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Navigates through menu Weight', () => {
        //add weight category
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('Format').click()
        cy.contains('.28g').click()
        cy.contains('.28g').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.url().should('include', '/menu?weights=.28g')
        cy.contains('.5g').click()
        cy.contains('.5g').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.url().should('include', 'menu?weights=.28g&weights=.5g')
        cy.get('.weights').contains('.5g').click()
        cy.contains('.5g').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.url().should('include', 'menu?weights=.28g')
        cy.get('.weights').contains('.28g').click()
        cy.contains('.28g').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.url().should('equal', 'http://localhost:8000/menu')
        //check weight is kept when changing category
        cy.contains('.85g').click()
        cy.contains('edibles').click()
        cy.url().should('equal', 'http://localhost:8000/menu?category=EDIBLES&weights=.85g')
        cy.contains('.85g').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        //pagination test
        cy.visit("/menu")
        cy.wait(6000)
        cy.get('.ProductCount').then(($count) => {
            const val = $count.text()
            cy.get('.filtersButton').click()
            cy.contains('Format').click()
            cy.contains('.3g').click()
            cy.get('.ProductCount').should(($count2) =>{
                expect($count2.text()).not.to.eq(val)
            })
        })
    })
})