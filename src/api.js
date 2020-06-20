const URL_BASE = 'https://pokeapi.co/api/v2';

export function obtenerNombresPokemon(MAX_POKEMON) {
    return fetch(`${URL_BASE}/pokemon/?offset=0&limit=${MAX_POKEMON}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => respuestaJSON.results);
}

export function obtenerInfoPokemon(id) {
    return fetch(`${URL_BASE}/pokemon/${id}`)
    .then((respuesta) => respuesta.json());
}

