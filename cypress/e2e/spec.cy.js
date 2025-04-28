/// <reference types="cypress"/>

describe('US-012-Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Talita')
    cy.get('#signup-lastname').type('Gomes')
    cy.get('#signup-email').type('talita3@email.com')
    cy.get('#signup-phone').type('12988457698')
    cy.get('#signup-password').type('TEste@23')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')    
  })

  it('Deve dar erro ao fazer o cadastro com e-mail já cadastrado', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Talita')
    cy.get('#signup-lastname').type('Gomes')
    cy.get('#signup-email').type('talita3@email.com')
    cy.get('#signup-phone').type('12988457698')
    cy.get('#signup-password').type('12345687')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')    
  })

  it('Deve dar erro ao fazer o cadastro com e-mail inválido', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Talita')
    cy.get('#signup-lastname').type('Gomes')
    cy.get('#signup-email').type('talitaemail.com')
    cy.get('#signup-phone').type('12988457698')
    cy.get('#signup-password').type('TEste@23')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')    
  })

  it('Deve dar erro ao fazer o cadastro de senha fraca', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Talita')
    cy.get('#signup-lastname').type('Gomes')
    cy.get('#signup-email').type('talita@email.com')
    cy.get('#signup-phone').type('12988457698')
    cy.get('#signup-password').type('12345687')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')    
  })
})




