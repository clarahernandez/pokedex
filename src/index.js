import {
  cargarBuscador,
  actualizarFlechasPaginas,
  cargarPagina,
} from './ui/pagina-general.js'

const MAX_POKEMON = 964;

function inicializar() {
  cargarPagina(0);
  cargarBuscador(); 

  actualizarFlechasPaginas();
}

inicializar();