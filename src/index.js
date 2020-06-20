import {
  obtenerNombresPokemon,
  obtenerInfoPokemon,
} from './api.js'

import {
  agregarPokemonAPaginaGeneral,
  cargarNombres,
  mostrarPokemonIndividual,
} from './ui.js'


async function cargarPaginaGeneral(desde = 0) {
    document.querySelector('#pagina-general').innerHTML = '';
    for(let i = 0; i < 20; i++){
        agregarPokemonAPaginaGeneral(await obtenerInfoPokemon(desde + i + 1), actualizarPokemon);
    }
}

async function actualizarPokemon(id) {
    //mostrarCartelActualizacion();
    const infoPokemon = await obtenerInfoPokemon(id);
    mostrarPokemonIndividual(infoPokemon);
}

async function inicializar() {
    const listaNombres = await obtenerNombresPokemon();
    cargarNombres(listaNombres, actualizarPokemon); 

    cargarPaginaGeneral();

    //actualizarFlechas();
    //actualizarPokemon();
}

inicializar();