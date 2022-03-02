import {accessTime} from './variable';
describe('Test Categories', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('Navigates through menu categories', () => {
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        //click category from menu page
        cy.contains('edibles').click()
        //check categories gone, subcategories present
        cy.get('.categories').should('not.contain', 'edibles').should('not.contain', 'flowers').should('not.contain', 'flowers')
        .should('not.contain', 'pre rolls').should('not.contain', 'vaporizers').should('not.contain', 'concentrates').should('not.contain', 'tinctures')
        .should('not.contain', 'topicals').should('contain', 'baked goods').should('contain', 'drinks').should('contain', 'chocolates')
        .should('contain', 'gummies').should('contain', 'capsules tablets').should('contain', 'dissolvables')
        //check weight update
        cy.contains('Format').click()
        cy.get('.weights').should('not.contain', '400g')
        cy.url().should('eq', 'http://localhost:8000/menu?category=EDIBLES')
        //sub category traversal test
        cy.get('.categories').contains('chocolates').click()
        cy.url().should('eq', 'http://localhost:8000/menu?category=EDIBLES&subcategory=CHOCOLATES')
        cy.get('.categories').contains('gummies').click()
        cy.url().should('eq', 'http://localhost:8000/menu?category=EDIBLES&subcategory=GUMMIES')
        //click category from page 3
        cy.visit('/menu')
        //click category from page 37
    })
})