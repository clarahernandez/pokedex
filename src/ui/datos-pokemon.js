import { cargarPokemon } from '../servicios/pokemon.js'




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
  document.querySelector('#id-pokemon').textContent = `#${id}`;
}

function mostrarPokemonIndividual(infoPokemon){
    document.querySelector('#pagina-individual').classList.remove('oculto');
    cargarNombre(infoPokemon.name);
    cargarStats(infoPokemon.stats);
    cargarImagen(infoPokemon);
    cargarPesoyAltura(infoPokemon.weight, infoPokemon.height);
    cargarTipos(infoPokemon.types);
    cargarId(infoPokemon.id); 
}

export async function actualizarPokemon(referencia) {
  mostrarCartelCarga();
  const infoPokemon = await cargarPokemon(referencia);
  mostrarPokemonIndividual(infoPokemon);
  ocultarCartelCarga();
}

function mostrarCartelCarga(){
  document.querySelector('#pagina-individual-cargando').textContent = 'Cargando...';
  document.querySelector('#pagina-individual-cargando').classList.remove('oculto');

  document.querySelector('#pagina-individual').classList.add('oculto');
}

function ocultarCartelCarga(){
  document.querySelector('#pagina-individual').classList.remove('oculto');
  document.querySelector('#pagina-individual-cargando').classList.add('oculto');

}
