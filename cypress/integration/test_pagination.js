describe('Test Pagination', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Navigate menu through pagination bar', () => {
        cy.visit("/menu")
        //go to page one using pagination
        cy.get('.paginationDiv').contains(1).click()
        cy.url().should('include', 'menu?page=1')
        //opacity check
        cy.get('.paginationDiv').contains(1).should('have.css', 'opacity', '1')
        cy.get('.paginationDiv').contains(2).should('have.css', 'opacity', '0.2')
        //go back using back arrow but arrow should be disabled
        cy.get('.paginationBack').should('be.disabled')
        //go to page 2 using pagination box
        cy.get('.paginationDiv').contains(2).click()
        cy.url().should('include', 'menu?page=2')
        cy.get('.paginationDiv').contains(2).should('have.css', 'opacity', '1')
        cy.get('.paginationDiv').contains(1).should('have.css', 'opacity', '0.2')
        cy.get('.paginationDiv').contains(3).should('have.css', 'opacity', '0.2')
        //go back using back arrow
        cy.get('.paginationBack').click()
        cy.url().should('include', 'menu?page=1')
        cy.get('.paginationDiv').contains(1).should('have.css', 'opacity', '1')
        cy.get('.paginationDiv').contains(2).should('have.css', 'opacity', '0.2')
        //go next page using pagination arrow
        cy.get('.paginationNext').click()
        cy.url().should('include', 'menu?page=2')
        cy.get('.paginationDiv').contains(2).should('have.css', 'opacity', '1')
        cy.get('.paginationDiv').contains(1).should('have.css', 'opacity', '0.2')
        cy.get('.paginationDiv').contains(3).should('have.css', 'opacity', '0.2')
        //go to last page
        cy.get('#ToLastPage').click()
        //go to next page using pagination arrow however should be disabled
        cy.get('.paginationNext').should('be.disabled')
        //check query is kept
        cy.get('.paginationDiv').contains(1).click()
        cy.get('.filtersButton').click()
        cy.get('div').contains('edibles').click()
        cy.get('.MobileBackground').click()
        cy.url().should('include', 'menu?category=EDIBLES')
        cy.get('.paginationDiv').contains(2).click()
        cy.url().should('include', 'menu?category=EDIBLES&page=2')
    })
})