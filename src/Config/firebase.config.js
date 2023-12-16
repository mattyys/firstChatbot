//se importa la libreria de firebase
import { initializeApp } from "firebase/app";
import{ getFirestore} from 'firebase/firestore/lite';

// Se declara la configuracion de firebase en un objeto
/*const firebaseConfig = {
  apiKey: "AIzaSyC5c7erRNFUQFGS6A2UUHhhRVICqdbTl2E",
  authDomain: "first-chatbot-react.firebaseapp.com",
  projectId: "first-chatbot-react",
  storageBucket: "first-chatbot-react.appspot.com",
  messagingSenderId: "269808972781",
  appId: "1:269808972781:web:b9b44b23f1fc155f9e6de4"
};*/

//2da
const firebaseConfig = {
  apiKey: "AIzaSyAARkt5a9TTHxU6pF4ik5sX6itZlgZ_JYs",
  authDomain: "react-chatbot-first.firebaseapp.com",
  projectId: "react-chatbot-first",
  storageBucket: "react-chatbot-first.appspot.com",
  messagingSenderId: "175715048457",
  appId: "1:175715048457:web:0315bd6e22d2d2781a6cd8"
};

// Initialize Firebase con la configuracion
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exporto la constante app
export default db;