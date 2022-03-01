describe('Test Strain', () => {
    before(() => {
        cy.setLocalStorage("accessTime", 1645033041559)
    })
    it('Tests Menu Strains', () => {
        //pagination and URL test
        cy.log('test pagination')
        cy.visit("/menu")
        cy.wait(2000)
        cy.get('.ProductCount').then(($count) => {
            const val = $count.text()
            cy.get('.filtersButton').click()
            cy.get('#INDICA').find('.off').click();
            cy.get('#INDICA').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
            cy.url().should('eq','http://localhost:8000/menu?straintype=INDICA')
            cy.get('.ProductCount').should(($count2) =>{
                expect($count2.text()).not.to.eq(val)
            })
        })
        //test click different strain
        cy.get('#SATIVA').find('.off').click()
        cy.url().should('eq', 'http://localhost:8000/menu?straintype=SATIVA')
        cy.get('#SATIVA').find('.on').should('have.css', 'background-color', 'rgb(97, 44, 143)')
        cy.get('#INDICA').find('.off').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        //test other filter than strain
        cy.log('Other filter then click strain filter test')
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.contains('edibles').click()
        cy.get('#SATIVA').find('.off').click()
        cy.url().should('eq', 'http://localhost:8000/menu?category=EDIBLES&straintype=SATIVA')
        //test strain then other filter
        cy.log('Strain filter into other filter Test')
        cy.visit("/menu")
        cy.get('.filtersButton').click()
        cy.get('#HYBRID').find('.off').click()
        cy.contains('edibles').click()
        cy.url().should('eq', 'http://localhost:8000/menu?category=EDIBLES&straintype=HYBRID')
    })
})