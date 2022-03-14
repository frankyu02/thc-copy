import {accessTime} from './variable';

describe('#', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('#', () => {
        cy.log('#')
        cy.visit("/menu")
        cy.get('[data-cy="menuGrid"]', {timeout: 60000}) //this ensures that the product data is queried before any other tests are called 
        cy.get('[data-cy=filtersButton]').click()
    })
})
