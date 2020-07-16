const URL_BASE = 'https://pokeapi.co/api/v2';

export function cargarPokemon(referencia) {
    return fetch(`${URL_BASE}/pokemon/${referencia}`)
    .then((respuesta) => respuesta.json());
}

export function cargarListadoPokemones(pagina) {
    return fetch(`${URL_BASE}/pokemon/?offset=${pagina}&limit=20`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => respuestaJSON);
}

