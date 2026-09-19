//* Buscador*//
const botonBusqueda = document.querySelector("#boton-busqueda");
const cerrarBusqueda = document.querySelector("#cerrar-busqueda");
const buscador = document.querySelector("#buscador");
const campoBusqueda = document.querySelector("#campo-busqueda");

function abrirBusqueda() {
  buscador.classList.add("activo");
  campoBusqueda.focus();
}

function cerrarPanelBusqueda() {
  buscador.classList.remove("activo");
  campoBusqueda.value = "";
  filtrarProyectos("");
}

function filtrarProyectos(texto) {
  const query = texto.trim().toLowerCase();
  const contenedor = document.querySelector("#servicios");
  const proyectos = document.querySelectorAll("#servicios .proyecto");
  let visibles = 0;

  proyectos.forEach(function (proyecto) {
    const titulo = proyecto.querySelector("h3");
    const parrafo = proyecto.querySelector("p");
    const nombre = titulo ? titulo.textContent.toLowerCase() : "";
    const servicio = parrafo ? parrafo.textContent.toLowerCase() : "";
    const coincide =
      query === "" || nombre.includes(query) || servicio.includes(query);

    proyecto.style.display = coincide ? "" : "none";
    if (coincide) {
      visibles = visibles + 1;
    }
  });

  let vacio = document.querySelector("#sin-resultados");

  if (visibles === 0 && query !== "") {
    if (!vacio) {
      vacio = document.createElement("p");
      vacio.id = "sin-resultados";
      vacio.textContent = "No encontramos proyectos con esa búsqueda.";
      contenedor.appendChild(vacio);
    }
  } else if (vacio) {
    vacio.remove();
  }
}

botonBusqueda.addEventListener("click", function () {
  if (buscador.classList.contains("activo")) {
    cerrarPanelBusqueda();
  } else {
    abrirBusqueda();
  }
});

cerrarBusqueda.addEventListener("click", cerrarPanelBusqueda);

campoBusqueda.addEventListener("input", function () {
  filtrarProyectos(campoBusqueda.value);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    cerrarPanelBusqueda();
  }
});