describe('Test Categories', () => {
    before(() => {
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Navigates through menu Brands', () => {
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('Brand').click()
        cy.get('.brands').contains('1964').click()
    })
})