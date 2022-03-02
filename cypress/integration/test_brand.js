import {accessTime} from './variable';
describe('Test Categories', () => {
    before(() => {
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('Navigates through menu Brands', () => {
        cy.log('pagination Test')
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('Brand').click()
        cy.get('.brands').contains('1964').click()
    })
})