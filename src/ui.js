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
  
  function mostrarCartelActualizacion(){
      document.querySelector('#pagina-individual').innerHTML = 'Loading...'
  }
  
  function cargarStats(stats) {
      const $listaStats = document.querySelector('#stats')
      Object.keys(stats).forEach((index) => {
          const $elemento = document.querySelector(`#${stats[index].stat.name}`);
          $elemento.textContent = `${stats[index].stat.name}: ${stats[index]['base_stat']}`
      });
  }

  function cargarImagen(urlImagen, alt) {
      const $img = document.querySelector('#imagen-individual');
      $img.setAttribute('src', urlImagen);
      $img.setAttribute('alt', alt);
  }
  
  export function mostrarPokemonIndividual(infoPokemon){
      //const $paginaIndividual = document.querySelector('#pagina-individual');
      //$paginaIndividual.innerHTML = '';
      document.querySelector('#nombre').textContent = infoPokemon.name;
      cargarStats(infoPokemon.stats);
      cargarImagen(infoPokemon.sprites['front_default'], infoPokemon.name);
  
  }
  
  