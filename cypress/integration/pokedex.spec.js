// eslint-disabled-nex-line spaced-commented
/// <reference types="Cypress" />

describe('Pokedex', () => {
    let fetchPolyfill;

    before(() => {
        const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';

        cy.request(polyfillUrl)
        .then((response) => {
          fetchPolyfill = response.body;
        });

        cy.request(polyfillUrl).then((response) =>  {
            fetchPolyfill = response.body;
        });

        cy.server();
        cy.route('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', 'fixture:listado-pagina-1')
        .as('obtenerPrimeraPagina');

        cy.visit('http://127.0.0.1:8080', {
      onBeforeLoad(contentWindow) {
        // eslint-disable-next-line no-param-reassign
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill);
        // eslint-disable-next-line no-param-reassign
        contentWindow.fetch = contentWindow.unfetch;
      },
    });
    });
    it('Carga la primera página', () => {
        cy.server();
        cy.route('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', 'fixture:lista-pagina-1')
        .as('obtenerPrimeraPagina');

        const TOTAL_POKEMONES = 964;
        const POKEMON_POR_PAGINA = 20;

        //cy.get('#total').should('have.text', TOTAL_POKEMONES);
    })
});
