// Función para cotizar
function cotizarLillos(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Cantidad de productos seleccionados
  const selectedLillo = document.getElementById("lillos").value;
  const cantidad = document.getElementById("cantidad").value;

  // Calcula el costo 
  let precioTotal = 0;
  switch (selectedLillo) {
    case "1": // Lillo Celulosa naranja x10
    case "4": // Lillo Libella x10
    case "7": // Lillo sabor chocolate x10
      precioTotal = cantidad * 10; 
      break;
    case "2": // Lillo Celulosa naranja x15
    case "5": // Lillo Libella x15
    case "8": // Lillo sabor chocolate x15
      precioTotal = cantidad * 15; 
      break;
    case "3": // Lillo Celulosa naranja x21
    case "6": // Lillo Libella x21
    case "9": // Lillo sabor chocolate x21
      precioTotal = cantidad * 21; 
      break;
  }

  // Actualiza el precio
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `Precio total: $${precioTotal}`;
}

// Realiza la compra
const realizarCompraBtn = document.getElementById("realizarCompra");

realizarCompraBtn.addEventListener("click", function() {
  // Mensaje de alerta una vez realizada la compra
  alert("¡Gracias por su compra en Mundo Lillos!");

  // Elimina el resultado de la compra una vez realizada
  document.getElementById("resultado").textContent = "";
});

// Llama a `cotizarLillos` una vez que se cierra el formulario
const cotizadorForm = document.getElementById("cotizador").querySelector("form");
cotizadorForm.addEventListener("submit", cotizarLillos);
