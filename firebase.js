import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

  /* API e DADOS - FireBase
  *⚠️ A firebaseConfig é pública por padrão. O acesso ao banco de dados é controlado via regras do Firebase. 
  *Nenhum dado sensível está exposto.*/
  const firebaseConfig = {
  apiKey: "AIzaSyA8ELDDVU9ykMuUaJVy5cZHsfa4ooq-Fbs",
  authDomain: "sit-remote-data.firebaseapp.com",
  databaseURL: "https://sit-remote-data-default-rtdb.firebaseio.com",
  projectId: "sit-remote-data",
  storageBucket: "sit-remote-data.firebasestorage.app",
  messagingSenderId: "32377279579",
  appId: "1:32377279579:web:7c13d6898e3abb33b2db7e",
  measurementId: "G-E2EDQ26QQ7"
};

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const textoRef = ref(database, 'msgAlert');
  /*Atualiza o texto da caixa de alerta da página inicial
  de acordo com as mudanças na propriedade msgAlert do firebase*/
  onValue(textoRef, (snapshot) => {
    document.getElementById("textAlert").innerText = snapshot.val();
  });

// Função que atualiza o texto no Firebase
const updateText = (newText) => { set(textoRef, newText); };

