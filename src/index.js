import {
  obtenerNombresPokemon,
  obtenerInfoPokemon,
} from './api.js'

import {
  agregarPokemonAPaginaGeneral,
  cargarNombres,
  mostrarPokemonIndividual,
  actualizarFlechasPaginas,
  actualizarFlechasPokemon
} from './ui.js'

const MAX_POKEMON = 807;


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
    const listaNombres = await obtenerNombresPokemon(MAX_POKEMON);
    cargarNombres(listaNombres, actualizarPokemon); 
    cargarPaginaGeneral(0);
    actualizarFlechasPaginas(cargarPaginaGeneral);
    actualizarFlechasPokemon(actualizarPokemon, MAX_POKEMON);
    //actualizarPokemon();
}

inicializar();