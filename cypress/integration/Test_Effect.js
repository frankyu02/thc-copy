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
        //pagination and basic test
        cy.log('test Pagination')
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.wait(2000)
        cy.get('.ProductCount').then(($count) => {
            const val = $count.text()
            cy.contains('Effects').click()
            cy.get('#CALM').find('.off').click()
            //check url
            cy.url().should('eq','http://localhost:8000/menu?effects=CALM')
            //check sizes change
            cy.contains('Format & Size').click()
            cy.get('.weights').should('not.contain', '400g')
            //check products change
            cy.get('.ProductCount').should(($count2) =>{
                expect($count2.text()).not.to.eq(val)
            })
        })
        //test picking effect after having category filtered
        cy.log('test category then effect')
        cy.visit("/menu")
        cy.get('.filtersButton').click()
    })
})