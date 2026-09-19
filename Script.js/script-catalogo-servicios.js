
const seccionServicios = document.querySelector("#servicios")
productos.forEach((producto) => {
  const card = document.createElement("article")
  card.className = "proyecto"
  card.innerHTML = `
    <img src="${producto.img[0]}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.servicio}</p>
    
  `
  seccionServicios.appendChild(card)
})
