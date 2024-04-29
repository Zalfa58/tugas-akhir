import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWimvwUwxRiwGQTQh9jS5SQUR4hDt3gis",
  authDomain: "tugas-akhir-590ce.firebaseapp.com",
  databaseURL: "https://tugas-akhir-590ce-default-rtdb.firebaseio.com",
  projectId: "tugas-akhir-590ce",
  storageBucket: "gs://tugas-akhir-590ce.appspot.com",
  messagingSenderId: "554140848457",
  appId: "1:554140848457:web:c4661ef8570298b0d88a98",
  measurementId: "G-YT7RHGDX0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');
const sparkyRef = ref(storage, 'images/sparky.jpg')

export {app, auth, provider, analytics}