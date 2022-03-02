import {accessTime} from './variable';
describe('Test Effect', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('Tests filtering products by effect', () => {
        cy.log('test Pagination')
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.wait(2000)
        cy.get('.ProductCount').then(($count) => {
            const val = $count.text()
            cy.contains('Effects').click()
        })
    })
})