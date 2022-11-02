
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/firestore'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyADOGCiksl-pH_NXiJp0S4yiBikB0hVVNw",
  authDomain: "awas-db.firebaseapp.com",
  projectId: "awas-db",
  storageBucket: "awas-db.appspot.com",
  messagingSenderId: "937316820714",
  appId: "1:937316820714:web:d951635b78639aa6649993",
  measurementId: "G-5ZNPF7C0LB"
};



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;


    const userRef = doc(firestore, `users/${userAuth.uid}`)

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()){
        const { displayName, email } = userAuth; 
        const createdAt = new Date();

        try{
            await setDoc(userRef ,{
                displayName,
                email,
                createdAt,
                ...additionalData,
            })

        }catch(error){
            console.log("error creatibg user", error.message);
        }
    }

    return userRef;
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const auth = getAuth(app);
export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
}
