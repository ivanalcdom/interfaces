
// ---------- Estado ----------
let tareas = cargarTareas(); // array de objetos { id, texto, completada }
 
// ---------- Referencias al DOM ----------
const form = document.getElementById("form-tarea");
const input = document.getElementById("input-tarea");
const lista = document.getElementById("lista");
const vacio = document.getElementById("vacio");
 
// ---------- Persistencia (localStorage) ----------
function cargarTareas() {
  try {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  } catch {
    return [];
  }
}
 
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}
 
// ---------- Operaciones sobre las tareas ----------
function añadirTarea(texto) {
  tareas.push({ id: Date.now(), texto, completada: false });
  guardarTareas();
  pintar();
}
 
function alternarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) tarea.completada = !tarea.completada;
  guardarTareas();
  pintar();
}
 
function borrarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardarTareas();
  pintar();
}
 
// ---------- Pintar la interfaz ----------
function pintar() {
  lista.innerHTML = "";
 
  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.className = "tarea" + (tarea.completada ? " completada" : "");
 
    const texto = document.createElement("span");
    texto.className = "tarea__texto";
    texto.textContent = tarea.texto; // textContent evita inyectar HTML
 
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = tarea.completada;
    check.setAttribute("aria-label", "Marcar como hecha: " + tarea.texto);
    check.addEventListener("change", () => alternarTarea(tarea.id));
 
    const borrar = document.createElement("button");
    borrar.type = "button";
    borrar.className = "tarea__borrar";
    borrar.textContent = "×";
    borrar.setAttribute("aria-label", "Eliminar tarea: " + tarea.texto);
    borrar.addEventListener("click", () => borrarTarea(tarea.id));
 
    li.append(texto, check, borrar);
    lista.appendChild(li);
  });
 
  vacio.hidden = tareas.length > 0;
}
 
// ---------- Eventos ----------
form.addEventListener("submit", evento => {
  evento.preventDefault();
  const texto = input.value.trim();
  if (texto === "") return;
  añadirTarea(texto);
  input.value = "";
  input.focus();
});
 
// ---------- Inicio ----------
pintar();