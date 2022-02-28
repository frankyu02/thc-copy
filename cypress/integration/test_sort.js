describe('Test Categories', () => {
    before(() => {
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Navigates through menu Brands', () => {
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('select...')
    })
})