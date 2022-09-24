// vairable general

const formularioUI =document.querySelector("#formulario")
const listaActuvidadesUI = document.getElementById("listaBusqueda");
let arrayBusquedas = [];


// funtiones
 
const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: true
    }
    arrayBusquedas.push(item);
    return item;

}

const guardarBD = (Actividad) => {
    localStorage.setItem("busqueda", JSON.stringify(arrayBusquedas));
    pintarDB();
}
const pintarDB = () => {
    listaActuvidadesUI.innerHTML = "";
    arrayBusquedas= JSON.parse(localStorage.getItem("busqueda"));
    if (arrayBusquedas.length > 3) {
        arrayBusquedas.shift(); //asi hago 
}}
if (arrayBusquedas === null) { 
    arrayBusquedas = [];

} else { 
    arrayBusquedas.forEach(element => { 
        listaActuvidadesUI.innerHTML +=
        <div>
            <b class="Clickeable" onclik="enviarvalor(`${Element.actividad}`)">${Element.actividad}</b>
         </div>
    });
}
// escuchar el evento del click del boton

formularioUI.addEventListener("submit",(e) => { 
    e.preventDefault();
    let actividadUI = document.getElementById("search").value;
    CrearItem(actividadUI)
    guardarBD
    formularioUI.requestFullscreen();
});

// pintamos en el dom

document.addEventListener("DOMContentLoaded",pintarDB)