import { getPublicacion } from "./firebase.js";

const mostrar = document.getElementById("mostrarDocs");

//Obtener datos desde firebase
window.addEventListener('DOMContentLoaded', async (event) => {
    const querySnapshot = await getPublicacion()
    let html = ""

    querySnapshot.forEach(doc => {
        const pub = doc.data()
        html += `
           <article>
                <h1> ${pub.titulo} </h1>
                <h4> ${pub.autor} </h4>
                <p> ${pub.contenido} </p>
           </article>
        `
    });
    mostrar.innerHTML = html
})