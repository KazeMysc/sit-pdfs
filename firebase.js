import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

  // API e DADOS - FireBase
  const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "32377279579",
  appId: "",
  measurementId: ""
};

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const textoRef = ref(database, 'msgAlert');

  onValue(textoRef, (snapshot) => {
    document.getElementById("textAlert").innerText = snapshot.val();
  });

// Função que atualiza o texto no Firebase
const updateText = (newText) => { set(textoRef, newText); };

