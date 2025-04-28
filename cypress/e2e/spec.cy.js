/// <reference types="cypress"/>

describe('US-012-Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Talita')
    cy.get('#signup-lastname').type('Gomes')
    cy.get('#signup-email').type('talita2@email.com')
    cy.get('#signup-phone').type('12988457698')
    cy.get('#signup-password').type('TEste@23')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')    
  })
})