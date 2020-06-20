export function cargarNombres(listaPokemon, callbackSeleccionarPokemon) {
  Object.keys(listaPokemon).forEach((index) => {
    const $pokemon = document.createElement('option')
    $pokemon.textContent = listaPokemon[index].name;
    $pokemon.addEventListener('click', () => {
        callbackSeleccionarPokemon(listaPokemon[index].name);
    });
    document.querySelector('#listado-pokemon').add($pokemon);
  });
}

export function agregarPokemonAPaginaGeneral(infoPokemon, callbackSeleccionarPokemon) {
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

    $pokemon.addEventListener('click', () => {
        callbackSeleccionarPokemon(infoPokemon.id);
    } )
}

function cargarStats(stats) {
    const $listaStats = document.querySelector('#stats')
    Object.keys(stats).forEach((index) => {
        const $barra = document.querySelector(`#${stats[index].stat.name}`);
        $barra.textContent = `${stats[index]['base_stat']}`
        $barra.setAttribute('value', `${stats[index]['base_stat']}`);
        document.querySelector(`#${stats[index].stat.name}-value`).textContent = `${stats[index]['base_stat']}`

    });
}

function cargarImagen(infoPokemon) {
    const $imgFrente = document.querySelector('#imagen-frente');
    $imgFrente.setAttribute('src', infoPokemon.sprites['front_default']);
    $imgFrente.setAttribute('alt', infoPokemon.name);
}

function cargarPesoyAltura(peso, altura) {
    document.querySelector('#weight').textContent = `Weight: ${peso}`
    document.querySelector('#height').textContent = `Height: ${altura}`
}

function cargarTipos(listaTipos) {
  const $tipo = document.querySelector('#tipo');
  $tipo.textContent = ''
  Object.keys(listaTipos).forEach((index) => {
      const $tipoNuevo = document.createElement('span');
      $tipoNuevo.setAttribute('class', `tipos`);
      $tipoNuevo.textContent = listaTipos[index].type.name;
      $tipo.appendChild($tipoNuevo);
  })
}

function cargarNombre (nombre) {
    document.querySelector('#nombre').textContent = nombre
}

function cargarId(id){
  document.querySelector('#id-actual').textContent = id;
}

export function mostrarPokemonIndividual(infoPokemon){
    document.querySelector('#pagina-individual').classList.remove('oculto');
    cargarNombre(infoPokemon.name);
    cargarStats(infoPokemon.stats);
    cargarImagen(infoPokemon);
    cargarPesoyAltura(infoPokemon.weight, infoPokemon.height);
    cargarTipos(infoPokemon.types);
    cargarId(infoPokemon.id);
    
}

export function actualizarFlechasPaginas(callbackCargarPagina) {
    const $anterior = document.querySelector('#pagina-anterior');
    const $siguiente = document.querySelector('#pagina-siguiente');
    const $paginaActual = document.querySelector('#numero-pagina');

    $anterior.addEventListener('click', () => {
      const numeroPagina = Number($paginaActual.textContent);
      if(numeroPagina === 2){
        $anterior.classList.add('disabled')
      }
      if (numeroPagina !== 1){
      $paginaActual.textContent = numeroPagina - 1;
      callbackCargarPagina((numeroPagina-2)*20);
    }
    });

    $siguiente.addEventListener('click', () => {
      $anterior.classList.remove('disabled')
      const numeroPagina = Number($paginaActual.textContent);
      $paginaActual.textContent = numeroPagina + 1;
      callbackCargarPagina(numeroPagina*20);
    });

}
  
export function actualizarFlechasPokemon(callbackCargarPokemon, MAX_POKEMON){
  const $idAnterior = document.querySelector('#id-anterior');
  const $idSiguiente = document.querySelector('#id-siguiente');
  const $idActual = document.querySelector('#id-actual');

  $idAnterior.addEventListener('click', () => {
    let id = Number($idActual.textContent);
    if (id === 1){
      id = MAX_POKEMON;
    } else {
      id = id - 1;
    }
    $idActual.textContent = id;
    callbackCargarPokemon(id);
});

$idSiguiente.addEventListener('click', () => {
    let id = Number($idActual.textContent);
    if(id === MAX_POKEMON){
        id = 1;
    } else {
        id = id + 1;
    };
    $idActual.textContent = id;
    callbackCargarPokemon(id);
  });
}
  