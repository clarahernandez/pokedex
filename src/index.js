/*FUNCIONES RELACIONADAS A LA API*/
const URL_BASE = 'https://pokeapi.co/api/v2';
const MAX_POKEMON = 964;

function obtenerNombresPokemon() {
    return fetch(`${URL_BASE}/pokemon/?offset=0&limit=${MAX_POKEMON}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => respuestaJSON.results);
}

function obtenerInfoPokemon(id) {
    return fetch(`${URL_BASE}/pokemon-form/${id}`)
    .then((respuesta) => respuesta.json());
}

/*FUNCIONES RELACIONADAS A LA INTERFAZ*/
function cargarNombres(listaPokemon) {
  Object.keys(listaPokemon).forEach((index) => {
    const $pokemon = document.createElement('option')
    $pokemon.textContent = listaPokemon[index].name;
    $pokemon.dataset.id = index+1;
    document.querySelector('#listado-pokemon').add($pokemon);
  })
}

function agregarPokemonAPagina(infoPokemon) {
    const $pokemon = document.createElement('div');
    $pokemon.setAttribute('class', 'col pokemon-general');
    $pokemon.dataset.id = infoPokemon.id;
    
    const $imagen = document.createElement('img');
    $imagen.setAttribute('class', 'imagen-general')
    $imagen.setAttribute('src', infoPokemon.sprites['front_default']);
    $imagen.setAttribute('alt', infoPokemon.name);

    const $nombre = document.createElement('div');
    $nombre.setAttribute('class', 'nombre-general')
    $nombre.textContent = infoPokemon.name;

    $pokemon.appendChild($imagen);
    $pokemon.appendChild($nombre);
    document.querySelector('#pagina-general').appendChild($pokemon);
}


/*FUNCIONES DEL INDEX */
async function cargarPagina(desde = 0) {
    for(let i = desde; i < desde + 20; i++){
        agregarPokemonAPagina(await obtenerInfoPokemon(i+1));
    }
}

async function iniciar() {
    const listaPokemon = await obtenerNombresPokemon();
    cargarNombres(listaPokemon);
    cargarPagina();
    //actualizarFlechas();
}

iniciar();