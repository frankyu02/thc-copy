import {accessTime} from './variable';
describe('#', () => {
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        cy.setLocalStorage("accessTime", accessTime)
    })
    it('#', () => {
        cy.visit("/menu")
        cy.get('[data-cy="menuGrid"]', {timeout: 60000}) //this ensures that the product data is queried before any other tests are called 

        // cy.get('[data-cy=ProductCount]').then(($count) => { //This code gets the product count
        //     cy.log($count.text())
        // })

        cy.get('[data-cy=filtersButton]').click()

        // cy.get('[data-cy="WeightBlock"]').click() //this code gets all the values in the current weight block
        // let c = []
        // cy.get('[data-cy="weights"]>div').each((val) => {
        //     c.push(val.text())
        // }).then(()=>{
        //     expect(c.length).to.equal(55) //this code checks that the length of the weights are equal
        // })
        // cy.log('aaaaaaaaaa', c)

        cy.get('[data-cy=THC-right]').type('{backspace}{backspace}30')
    })
})