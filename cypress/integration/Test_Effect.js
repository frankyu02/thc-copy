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
        cy.get('[data-cy=filtersButton]').click()
        cy.wait(2000)
        cy.get('[data-cy=ProductCount]').then(($count) => {
            const val = $count.text()
            cy.contains('Effects').click()
            cy.get('[data-cy=CALM]').find('.off').click()
            //check url
            cy.url().should('eq','http://localhost:8000/menu?effects=CALM')
            //check sizes change
            cy.contains('Format & Size').click()
            cy.get('[data-cy=weights]').should('not.contain', '400g')
            //check products change
            cy.get('[data-cy=ProductCount]').should(($count2) =>{
                expect($count2.text()).not.to.eq(val)
            })
            cy.get('[data-cy=CALM]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        })
        //test picking effect after having category filtered
        cy.log('test category then effect')
        cy.visit("/menu")
        cy.get('[data-cy=filtersButton]').click()
        cy.contains('pre rolls').click()
        cy.contains('Effects').click()
        cy.get('[data-cy=CREATIVE]').find('.off').click()
        cy.url().should('eq', 'http://localhost:8000/menu?category=PRE_ROLLS&effects=CREATIVE')
        //test effects -> category
        cy.log('test effect then category')
        cy.visit("/menu")
        cy.get('[data-cy=filtersButton]').click()
        cy.contains('Effects').click()
        cy.get('[data-cy=INSPIRED]').find('.off').click()
        cy.contains('flower').click()
        cy.url().should('eq', 'http://localhost:8000/menu?category=FLOWER&effects=INSPIRED')
        //test multipl effects
        cy.log('test effect then category')
        cy.visit("/menu")
        cy.get('[data-cy=filtersButton]').click()
        cy.contains('Effects').click()
        cy.get('[data-cy=INSPIRED]').find('.off').click()
        cy.url().should('eq','http://localhost:8000/menu?effects=INSPIRED')
        cy.get('[data-cy=INSPIRED]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.get('[data-cy=CREATIVE]').find('.off').click()
        cy.url().should('eq','http://localhost:8000/menu?effects=INSPIRED&effects=CREATIVE')
        cy.get('[data-cy=CREATIVE]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.get('[data-cy=HAPPY]').find('.off').click()
        cy.url().should('eq','http://localhost:8000/menu?effects=INSPIRED&effects=CREATIVE&effects=HAPPY')
        cy.get('[data-cy=HAPPY]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        //test remove all effects
        cy.log('begin removing effect filter')
        cy.get('[data-cy=HAPPY]').find('.on').click()
        cy.url().should('eq','http://localhost:8000/menu?effects=INSPIRED&effects=CREATIVE')
        cy.get('[data-cy=HAPPY]').find('.off').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[data-cy=CREATIVE]').find('.on').click()
        cy.url().should('eq','http://localhost:8000/menu?effects=INSPIRED')
        cy.get('[data-cy=CREATIVE]').find('.off').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[data-cy=INSPIRED]').find('.on').click()
        cy.url().should('eq','http://localhost:8000/menu')
        cy.get('[data-cy=INSPIRED]').find('.off').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })
})