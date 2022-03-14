import {accessTime} from './variable';
describe('Test Sort', () => {
    before(() => {
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('Tests Menu Sort', () => {
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('select...')
    })
})