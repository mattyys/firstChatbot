//se importa la libreria de firebase
import { initializeApp } from "firebase/app";
import{ getFirestore} from 'firebase/firestore/lite';

// Se declara la configuracion de firebase en un objeto
const firebaseConfig = {
  apiKey: "AIzaSyC5c7erRNFUQFGS6A2UUHhhRVICqdbTl2E",
  authDomain: "first-chatbot-react.firebaseapp.com",
  projectId: "first-chatbot-react",
  storageBucket: "first-chatbot-react.appspot.com",
  messagingSenderId: "269808972781",
  appId: "1:269808972781:web:b9b44b23f1fc155f9e6de4"
};

// Initialize Firebase con la configuracion
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exporto la constante app
export default db;