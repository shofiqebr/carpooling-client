import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; 
// import { auth } from './../config/firebaseConfig';
import { auth } from './../config/firebase.config';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    // const [brands, setBrands] = useState([]);
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true)
//    useEffect(() => {
//       fetch("/data.json")
//         .then((res) => res.json())
//         .then((data) => setBrands(data));
//     }, []);

    const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

      const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut = () => {
        return signOut(auth)
    }

      
      useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          setUser(user)
          setLoading(false)
        })
      },[])
      console.log(user);


    const authInfo = {
        // brands,
        googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading
    }

    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
)};

export default AuthProvider;