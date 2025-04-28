/// <reference types="cypress"/>

describe('US-012-Funcionalidade: cadastro de membros', () => {
  beforeEach(() =>{
    cy.visit('/')
  })
  
  var email = `talita${Date.now()}@teste.com`

  it('Deve fazer o cadastro de campos obrigatórios', () => {    
    //var email = `talita${Date.now()}@teste.com`
    cy.preencherCadastro('Talita', 'Silva', email, '11984576896', 'Teste@4589')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')    
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Talita123', 'Silva', 'talita2email.com', '11984576896', 'Teste@4589')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')    
  })

  it('Deve validar mensagem de erro com campo e-mail já cadastrado', () => {
    cy.preencherCadastro('Talita', 'Silva', 'talita2@email.com', '11984576896', 'Teste@4589')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')    
  })

  it('Deve validar mensagem de erro com campo e-mail inválido', () => {
    cy.preencherCadastro('Talita', 'Silva', 'talitaemail.com', '11984576896', 'Teste@4589')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')    
  })

  it('Deve validar mensagem de erro ao fazer o cadastro de senha fraca', () => {
    cy.preencherCadastro('Talita', 'Silva', email, '11984576896', '123456789')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')    
  })
})




