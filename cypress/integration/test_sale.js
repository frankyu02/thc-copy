describe('Test Sale Button', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Tests on sale button interaction', () => {
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.get('#sale').find('.off').click();
    })
})