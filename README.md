# 📚 Projeto de Testes Automatizados com Cypress

Este repositório contém as tarefas realizadas no curso **Jornada QA** da Escola EBAC, utilizando **Cypress** para automação de testes e uma **GitHub Action** configurada para execução contínua.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🛠️ Instalação

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/talyoliv/gms-test.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd gms-test
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Abra o Cypress em modo interativo (opcional):

    ```bash
    npx cypress open
    ```

## 🧪 Executando o Projeto

1. Suba o servidor e o banco de dados:

    ```bash
    npm start
    ```

## 🧪 Executando os Testes

- Para abrir o Cypress no modo visual (interativo):

    ```bash
    npx cypress open
    ```

- Para rodar os testes no terminal (modo headless):

    ```bash
    npx cypress run
    ```

## ⚙️ Integração Contínua (GitHub Actions)

Foi configurada uma **GitHub Action** para executar os testes automaticamente a cada `push` ou `pull request`.  
O workflow está localizado em `.github/workflows/test.yml`.

Exemplo básico da configuração:

```yaml
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-24.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
            browser: chrome

    ```

## ✨ Observações

- Certifique-se de que o servidor e o banco de dados estejam ativos antes de iniciar os testes.
- Ajuste as configurações do Cypress (`cypress.config.js`) conforme o ambiente de execução.
