import {accessTime} from '../variable';
describe('Test Pagination', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('Navigate menu through pagination bar', () => {
        cy.visit("/menu")
        //go to page one using pagination
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(1).click()
        cy.url().should('include', 'menu?page=1')
        //opacity check
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(1).should('have.css', 'opacity', '1')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(2).should('have.css', 'opacity', '0.2')
        //go back using back arrow but arrow should be disabled
        cy.get('[data-cy=paginationBack]', {timeout: 60000}).should('be.disabled')
        //go to page 2 using pagination box
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(2).click()
        cy.url().should('include', 'menu?page=2')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(2).should('have.css', 'opacity', '1')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(1).should('have.css', 'opacity', '0.2')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(3).should('have.css', 'opacity', '0.2')
        //go back using back arrow
        cy.get('[data-cy=paginationBack]').click()
        cy.url().should('include', 'menu?page=1')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(1).should('have.css', 'opacity', '1')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(2).should('have.css', 'opacity', '0.2')
        //go next page using pagination arrow
        cy.get('[data-cy=paginationNext]').click()
        cy.url().should('include', 'menu?page=2')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(2).should('have.css', 'opacity', '1')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(1).should('have.css', 'opacity', '0.2')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(3).should('have.css', 'opacity', '0.2')
        //go to last page
        cy.get('[data-cy=ToLastPage]').click()
        //go to next page using pagination arrow however should be disabled
        cy.get('[data-cy=paginationNext]', {timeout: 60000}).should('be.disabled')
        //check query is kept
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(1).click()
        cy.get('[data-cy=filtersButton]').click()
        cy.get('div').contains('edibles').click()
        cy.get('[data-cy=MobileBackground]').click()
        cy.url().should('include', 'menu?category=EDIBLES')
        cy.get('[data-cy=paginationDiv]', {timeout: 60000}).contains(2).click()
        cy.url().should('include', 'menu?category=EDIBLES&page=2')
    })
})