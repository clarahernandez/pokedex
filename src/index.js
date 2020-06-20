import {
  obtenerNombresPokemon,
  obtenerInfoPokemon,
} from './api.js'

import {
  agregarPokemonAPaginaGeneral,
  cargarNombres,
  mostrarPokemonIndividual,
  mostrarCartelActualizacion,
  ocultarCartelActualizacion,
  actualizarFlechas,
} from './ui.js'


async function cargarPaginaGeneral(desde = 0) {
    document.querySelector('#pagina-general').innerHTML = '';
    for(let i = 0; i < 20; i++){
      agregarPokemonAPaginaGeneral(await obtenerInfoPokemon(desde + i + 1), actualizarPokemon);
    }
}

async function actualizarPokemon(id) {
    mostrarCartelActualizacion();
    const infoPokemon = await obtenerInfoPokemon(id);
    mostrarPokemonIndividual(infoPokemon);
    ocultarCartelActualizacion();
}

async function inicializar() {
    const listaNombres = await obtenerNombresPokemon();
    cargarNombres(listaNombres, actualizarPokemon); 

    cargarPaginaGeneral(0);
    
    actualizarFlechas(cargarPaginaGeneral);
    //actualizarPokemon();
}

inicializar();