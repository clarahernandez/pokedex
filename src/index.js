import {
  cargarBuscador,
  actualizarFlechasPaginas,
  cargarPagina,
} from './ui/pagina-general.js'

function inicializar() {
  cargarPagina(0);
  cargarBuscador(); 

  actualizarFlechasPaginas();
}

inicializar();