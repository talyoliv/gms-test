/// <reference types="cypress"/>

describe('US-001 : Funcionalidade: busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });

    it('Deve limpar busca de filmes', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
        cy.get('#clear-button').click()
    });

    it('Deve buscar filmes que não estão na lista', () => {
        cy.get('#search-input').type('A Lagoa Azul')
        cy.get('#search-button').click()
        cy.get('#results-section > p').should('contain', 'Filme não encontrado')
    });

    it.only('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('Filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[3].titulo)
        })
    });

    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('Filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click({force: true})
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });

    
});