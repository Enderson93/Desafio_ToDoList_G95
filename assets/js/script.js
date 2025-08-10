const inputTarea = document.querySelector("#inputTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const tbody = document.querySelector("tbody");
const conteoDeTareas = document.querySelector(".contadores");
const checkbox = document.querySelector("#checkbox");

const tareas = [
  { id: 1, tarea: "Tarea 1", estado: false },
  { id: 2, tarea: "Tarea 2", estado: false },
  { id: 3, tarea: "Tarea 3", estado: false },
];

function renderTareas() {
  let html = "";
  for (let tarea of tareas) {
    html += `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.tarea}</td>
        <td><input id="checkbox" type="checkbox" name="" id="" unchecked></td>
        <td><button onclick="eliminarTarea(${tarea.id})">Eliminar</button></td>
        </tr>`;
  }
  tbody.innerHTML = html;
  conteoDeTareas.innerHTML = `<p>Total: <h3>${tareas.length}</h3></p>
    <p>Realizadas: <h3>${
      tareas.filter((tareas) => tareas.estado === true).length
    }</h3></p>`;
}

renderTareas();

function eliminarTarea(id) {
  const index = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(index, 1);
  renderTareas();
}

btnAgregar.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value;
  tareas.push({ id: Date.now(), tarea: nuevaTarea, estado: false });
  inputTarea.value = "";
  renderTareas();
});
