describe('search product', () => {
    it('user can search for product', () => {
        cy.visit('/')
        cy.findByText(/search\.\.\./i).click()
        cy.findByRole('textbox', { name: /search/i }).type('adidas').trigger('keydown', { keyCode: 13 })
        cy.findByRole('heading', { name: /results for "adidas"/i }).should('be.visible')
    })
})