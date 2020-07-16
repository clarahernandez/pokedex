import { cargarPokemon as cargarPokemonDeApi,
     cargarListadoPokemones as cargarListadoPokemonesDeApi } from '../api/pokemon.js'
import { cargarPokemon as cargarPokemonDeLocalStorage,
    cargarListadoPokemones as cargarListadoPokemonesDeLocalStorage,
    guardarListadoPokemones,
    guardarPokemon } from '../storage/pokemon.js'

    export async function cargarPokemon(id) {
    
    try {
        return cargarPokemonDeLocalStorage(id);
    } catch (e) {
        const pokemon = await cargarPokemonDeApi(id);
        guardarPokemon(id, pokemon);
        return pokemon;
    }
}

export async function cargarListadoPokemones(pagina) {
    try {
        return cargarListadoPokemonesDeApi(pagina);
    } catch (e) {
        const listado = await cargarListadoPokemonesDeLocalStorage(pagina);
        guardarListadoPokemones(pagina, listado);
        return listado;
    }
}