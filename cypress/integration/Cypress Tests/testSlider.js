import {accessTime} from '../variable';
import { SliderRange } from './mainTest';
    describe('Test the THC and CBD Sliders', () => {
        before(() => {
            // log in only once before any of the tests run.
            // your app will likely set some sort of session cookie.
            // you'll need to know the name of the cookie(s), which you can find
            // in your Resources -> Cookies panel in the Chrome Dev Tools.
            cy.setLocalStorage("accessTime", accessTime)
        })
        it('tests setting THC max value', () => {
            //maxTHC value
            cy.visit("/menu")
            cy.get('[data-cy="menuGrid"]', {timeout: 60000})
            let val;
            cy.get('[data-cy=ProductCount]').then(($count) => { //This code gets the product count
                val = $count.text()
            })
            let input = Math.floor((Math.random() * ((SliderRange.max - 1) - SliderRange.min)) + SliderRange.min);
            cy.get('[data-cy=filtersButton]').click()
            cy.get('[data-cy=THC-right]').type('{backspace}{backspace}'+ input +'{enter}')
            cy.get('[data-cy="clearAll"]', {timeout: 60000}) //checks that the filter's applied
            cy.get('[data-cy="menuGrid"]', {timeout: 60000}) //checks that the menu is updated
            cy.get('[data-cy=ProductCount]').then(($count) => { //This code gets the updated product count
                expect($count.text()).not.to.eq(val)
            })
            //manually go to filterd page using URl
            cy.url().then(($url)=>{
                cy.visit($url)
                cy.get('[data-cy=filtersButton]').click()
                cy.get('[data-cy=THC-right]').should('have.value', input)
            })
        })
        
        it('tests setting THC min value', ()=>{
            cy.setLocalStorage("accessTime", accessTime)
            cy.visit("/menu")
            cy.get('[data-cy="menuGrid"]', {timeout: 60000})
            let val;
            cy.get('[data-cy=ProductCount]').then(($count) => { //This code gets the product count
                val = $count.text()
            })
            let input = Math.floor((Math.random() * ((SliderRange.max) - (SliderRange.min + 1))) + (SliderRange.min + 1));
            cy.get('[data-cy=filtersButton]').click()
            cy.get('[data-cy=THC-left]').type('{backspace}{backspace}'+ input +'{enter}')
            cy.get('[data-cy="clearAll"]', {timeout: 60000}) //checks that the filter's applied
            cy.get('[data-cy="menuGrid"]', {timeout: 60000}) //checks that the menu is updated
            cy.get('[data-cy=ProductCount]').then(($count) => { //This code gets the updated product count
                expect($count.text()).not.to.eq(val)
            })
            //manually go to filterd page using URl
            cy.url().then(($url)=>{
                cy.visit($url)
                cy.get('[data-cy=filtersButton]').click()
                cy.get('[data-cy=THC-left]').should('have.value', input)
            })
        })
    })
