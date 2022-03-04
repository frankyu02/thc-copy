import {accessTime} from '../variable';
    describe('Test the THC and CBD Sliders', () => {
        before(() => {
            // log in only once before any of the tests run.
            // your app will likely set some sort of session cookie.
            // you'll need to know the name of the cookie(s), which you can find
            // in your Resources -> Cookies panel in the Chrome Dev Tools.
            cy.setLocalStorage("accessTime", accessTime)
        })
        it('Inputs values into slider box', () => {
            //maxTHC value
            cy.log('setMaxTHC')
            cy.visit("/menu")
            cy.get('[data-cy="menuGrid"]', {timeout: 60000})
            cy.get('[data-cy=filtersButton]').click()
            cy.get('[data-cy=THC-right]').type('{backspace}{backspace}'+ Math.floor((Math.random() * (50 - 0)) + 0))
        })
    })
