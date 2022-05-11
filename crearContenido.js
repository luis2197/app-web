import {setPublicacion} from './firebase.js';
const form = document.getElementById("publicacion");
console.log("");
form.addEventListener( 'submit', (e) =>  {
    event.preventDefault()

    let titulo = form["titulo"].value
    let autor = form["autor"].value
    let contenido = form["contenido"].value

    setPublicacion(titulo, autor, contenido);
    form.reset();
    alert("Agregado correctamente")
})

function sumar()
{
    console.log("sumando...");
}
