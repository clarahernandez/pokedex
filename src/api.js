const URL_BASE = 'https://pokeapi.co/api/v2';
const MAX_POKEMON = 807;

export function obtenerNombresPokemon() {
    return fetch(`${URL_BASE}/pokemon/?offset=0&limit=${MAX_POKEMON}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => respuestaJSON.results);
}

export function obtenerInfoPokemon(id) {
    return fetch(`${URL_BASE}/pokemon/${id}`)
    .then((respuesta) => respuesta.json());
}

export function obtenerPaginaPokemon(desde = 0) {
    return fetch(`${URL_BASE}/pokemon/?offset=${desde}0&limit=20`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => respuestaJSON.results);
}