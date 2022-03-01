describe('Test Sort', () => {
    before(() => {
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Tests Menu Sort', () => {
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('select...')
    })
})