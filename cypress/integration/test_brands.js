import {accessTime} from './variable';
describe('Test Weight', () => {
    before(() => {
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('Navigates through menu Brand', () => {
        cy.visit("/menu")
        cy.get('[data-cy=filtersButton]').click()
        cy.contains('Brand').click()
        cy.get('[data-cy=7ACRES]').find('.off').click()
        cy.get('[data-cy=7ACRES]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.url().should('include', '/menu?brand=6d68c93b-c413-476c-a169-79e08e5f0523')
        cy.get('[data-cy=AHLOT]').find('.off').click();
        cy.get('[data-cy=7ACRES]').find('.off').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('[data-cy=AHLOT]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.url().should('include', `/menu?brand=b6b7964a-33b7-4c2b-81cf-ed9ff9549e31`)
        cy.get('[data-cy=AHLOT]').find('.on').click();
        cy.get('[data-cy=AHLOT]').find('.off').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.url().should('equal', 'http://localhost:8000/menu?brand=')
        cy.get('[data-cy=AceValley]').find('.off').click();
        cy.contains('edibles').click()
        cy.get('[data-cy=AceValley]').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.url().should('equal', 'http://localhost:8000/menu?brand=66c4e2b1-87b9-4d95-9663-6020cf083f0e&category=EDIBLES')
        cy.visit("/menu")
        cy.wait(6000)
        cy.get('[data-cy=ProductCount]').then(($count) => {
            const val = $count.text()
            cy.get('[data-cy=filtersButton]').click()
            cy.contains('Brand').click()
            cy.get('[data-cy=A1Cannabis]').find('.off').click();
            cy.get('[data-cy=ProductCount]').should(($count2) =>{
                expect($count2.text()).not.to.eq(val)
            })
        })
    })
})