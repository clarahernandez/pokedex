export function cargarPokemon(id) {
    const pokemon = JSON.parse(localStorage.getItem(id));
    if (pokemon === null) {
        throw new Error(`Pokemon con identificador "${id}" no encontrado.`);
    }
    return pokemon;
}

export function cargarListadoPokemones(pagina) {
    const listado = JSON.parse(localStorage.getItem(pagina));
    if (pagina === null) {
        throw new Error(`Listado de pokemones de página: ${pagina} no encontrado`);
    }
    return listado;
}

export function guardarPokemon(id, pokemon) {
    if (id === undefined || typeof pokemon !== 'object') {
        throw new Error(`Se necesita un identificador y un pokemon para guardar en localStorage`);
    }
    localStorage.setItem(id, JSON.stringify(pokemon));
}

export function guardarListadoPokemones(pagina, listado) {
   if (pagina === undefined || typeof listado !== 'string') {
       throw new Error('Se necesita el número de página y el listado de pokemones.');
   }
   localStorage.setItem(pagina, JSON.stringify(listado));
}