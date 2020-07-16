import { actualizarPokemon, } from './datos-pokemon.js'
import { cargarListadoPokemones } from '../servicios/pokemon.js'

export function actualizarFlechasPaginas() {
  const $anterior = document.querySelector('#pagina-anterior');
  const $siguiente = document.querySelector('#pagina-siguiente');
  const $paginaActual = document.querySelector('#numero-pagina-actual');
  
  $anterior.onclick = () => {
    $siguiente.classList.remove('disabled')
    let numeroPagina = Number($paginaActual.textContent);
    if(numeroPagina === 2){
      $anterior.classList.add('disabled')
    }
    if (numeroPagina !== 1){
      numeroPagina -= 1;
      $paginaActual.textContent = numeroPagina;
      cargarPagina((numeroPagina - 1) * 20);    
    }
  };
    
  $siguiente.onclick = () => {
    const paginaMaxima = Math.ceil(Number(document.querySelector('#max-pokemones').textContent) / 20);
    let numeroPagina = Number($paginaActual.textContent);
    
    $anterior.classList.remove('disabled')
    if(numeroPagina === 48) {
      $siguiente.classList.add('disabled');
    }
    if(numeroPagina !== 49){
      numeroPagina += 1;
      $paginaActual.textContent = numeroPagina;
      cargarPagina((numeroPagina - 1) * 20);
    }
};

}
  
export async function cargarPagina(numero) {
  mostrarCartelCarga();
  const pagina = await cargarListadoPokemones(numero);

  const max = pagina.count;
  document.querySelector('#max-pokemones').textContent = max;

  const lista = pagina.results;
  
  const columna1 = document.querySelector('#listado-columna-1');
  const columna2 = document.querySelector('#listado-columna-2');

  columna1.innerHTML = '';
  columna2.innerHTML = '';

  Object.keys(lista).forEach((index) => {
    const $elemento = document.createElement('a')
    $elemento.href = '#';
    $elemento.classList.add('list-group-item', 'list-group-item-action');
    $elemento.textContent = lista[index].name;
    $elemento.dataset.nombre = lista[index].name;

    $elemento.onclick = () => {
      const $elementoActivo = document.querySelector('.list-group-item.active');
      if ($elementoActivo){
        $elementoActivo.classList.remove('active');
      }
      $elemento.classList.add('active');
      actualizarPokemon(lista[index].name);
      };
      if(index > 9) {
        columna2.appendChild($elemento);
      }
      else {
        columna1.appendChild($elemento);
      }
  });
  ocultarCartelCarga();
}

function mostrarCartelCarga() {
    document.querySelector('#listados-cargando').classList.remove('oculto');
    document.querySelector('#listados').classList.add('oculto');
}

function ocultarCartelCarga() {
    document.querySelector('#listados').classList.remove('oculto');
    document.querySelector('#listados-cargando').classList.add('oculto');
}

export function cargarBuscador() {
    document.querySelector('#buscador').onclick = () => {
        const $inputBuscador = document.querySelector('#inputBuscador').value;
        actualizarPokemon($inputBuscador);
    }
}