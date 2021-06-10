/// <reference types="cypress" />

describe('My First Test YAY!', function (){
    it('Does nothing', function () {

        cy.pause();

        // Part 1
        expect(true).to.equal(true)

        // Notes 

        // Arrange - Setup initial app state
        // - visit a web page
        // - query for an element
        // Act - take an action
        // - interact with that element
        // Assert - make an assertion
        // - make an assertion about page content
    })

    it('Visits page, finds element, checks url', function () {
        cy.visit('https://example.cypress.io') // Goes to page
        cy.contains('type').click() // Check if theres an element with specified string
        cy.url().should('include', '/commands/actions') // Check if URL has this path
    })

    it('Gets, types and asserts', function () {
        cy.visit('https://example.cypress.io') // Goes to page

        cy.pause();

        cy.contains('type').click() // Check if theres an element with specified string
        cy.url().should('include', '/commands/actions') // Check if URL has this path

     

        cy.get('.action-email') // Get element with this class
            .type('fake@email.com') // Type this email address
            .should('have.value', 'fake@email.com') // Check if this email address is typed
    })
})