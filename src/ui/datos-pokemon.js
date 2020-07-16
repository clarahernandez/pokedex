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

function cargarDatosPokemon(infoPokemon){
    document.querySelector('#subcontainer').classList.remove('oculto');
    cargarNombre(infoPokemon.name);
    cargarStats(infoPokemon.stats);
    cargarImagen(infoPokemon);
    cargarPesoyAltura(infoPokemon.weight, infoPokemon.height);
    cargarTipos(infoPokemon.types);
    cargarId(infoPokemon.id); 
}

export async function actualizarPokemon(referencia) {
  mostrarCartelCarga();
  ocultarError();
  try {
    const infoPokemon = await cargarPokemon(referencia);
    cargarDatosPokemon(infoPokemon);
    ocultarCartelCarga();
    mostrarStats();
  } catch(e) {
    ocultarCartelCarga();
    ocultarStats();
    mostrarError();
  }
}

function mostrarCartelCarga(){
  document.querySelector('#pagina-individual-cargando').textContent = 'Loading...';
  document.querySelector('#pagina-individual-cargando').classList.remove('oculto');

}

function ocultarCartelCarga(){
  document.querySelector('#pagina-individual-cargando').classList.add('oculto');
}

function mostrarStats() {
  document.querySelector('#subcontainer').classList.remove('oculto');
}

function ocultarStats() {
  document.querySelector('#subcontainer').classList.add('oculto');
}

function mostrarError() {
  document.querySelector('#error-buscador').classList.remove('oculto');
}

function ocultarError() {
  document.querySelector('#error-buscador').classList.add('oculto');
}
