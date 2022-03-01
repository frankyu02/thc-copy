describe('Test Sale Button', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Tests on sale button interaction', () => {
        //test number of products change
        cy.visit("/menu")
        cy.wait(2000)
        cy.get('.ProductCount').then(($count) => {
            const val = $count.text()
            cy.get('.filtersButton').click()
            cy.get('#sale').find('.off').click();
            cy.get('#sale').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
            cy.url().should('eq', 'http://localhost:8000/menu?onsale=1')
            cy.get('.MobileBackground').click()
            cy.wait(2000)
            cy.get('.ProductCount').should(($count2) =>{
                expect($count2.text()).not.to.eq(val)
            })
            //testing adding other filters after On Sale
            cy.visit("/menu")
            cy.get('.filtersButton').click()
            cy.get('#sale').find('.off').click();
            cy.url().should('eq', 'http://localhost:8000/menu?onsale=1')
            cy.contains('edibles').click()
            cy.url().should('eq', 'http://localhost:8000/menu?category=EDIBLES&onsale=1')
            //testing On Sale with other filter already applied (currently expect fail)
            cy.visit("/menu")
            cy.get('.filtersButton').click()
            cy.contains('edibles').click()
            cy.get('#sale').find('.off').click();
            cy.url().should('eq','http://localhost:8000/menu?category=EDIBLES&onsale=1')
        })
    })
})