import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {GoogleAuthProvider} from 'firebase/auth'


// configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDgO8HYKhCyq3cq0w2VtrqcAHoGOj5rjU",
  authDomain: "intensivo-react-2022.firebaseapp.com",
  projectId: "intensivo-react-2022",
  storageBucket: "intensivo-react-2022.appspot.com",
  messagingSenderId: "422030560831",
  appId: "1:422030560831:web:45e65621af6306dc53b28a"
};

// inicialización de Firebase
const app = initializeApp(firebaseConfig);

//configuración de Firestore
const db = getFirestore(app);

//configuración de la autenticación de Google
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}