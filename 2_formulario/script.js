const pasos = document.querySelectorAll(".paso");

function siguiente(numero) {
  const campos = ["nombre", "correo", "clave"];
  const input = document.getElementById(campos[numero - 1]);

  // No deja avanzar si el campo está vacío
  if (input.value.trim() === "") {
    alert("Rellena el campo para continuar");
    return;
  }

  // Si es el último paso, termina
  if (numero === pasos.length) {
    alert("¡Formulario completado!");
    return;
  }

  // Oculta el paso actual y muestra el siguiente
  pasos[numero - 1].classList.remove("activo");
  pasos[numero].classList.add("activo");
}