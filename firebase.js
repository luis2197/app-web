  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs 
  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDaISmXesUnyXlGgfRlSLbqsj2lYmRz0Tc",
    authDomain: "practica-taller.firebaseapp.com",
    projectId: "practica-taller",
    storageBucket: "practica-taller.appspot.com",
    messagingSenderId: "673242867741",
    appId: "1:673242867741:web:75c0a4ba8d9839b054bef4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  export const setPublicacion = (titulo, autor, contenido) => {
      addDoc(collection(db, 'publicaciones'),{titulo, autor, contenido})
  }

  export const getPublicacion = () => {
    return getDocs(collection(db, 'publicaciones'))
  }