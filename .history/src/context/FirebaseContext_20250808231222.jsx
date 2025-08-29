import { createContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import { useContext } from "react";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getAuth } from 'firebase/auth'
import {  collection, getFirestore,getDocs, addDoc } from 'firebase/firestore'
// import { getStorage, ref,uploadBytes } from 'firebase/storage'


const ArrowContext = createContext(null);

export const useFirebase = () => useContext(ArrowContext)
const firestore=getFirestore(app)

const firebaseAuth = getAuth(app);

const googleAuth = new GoogleAuthProvider();
const signUpEp = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
}
const signInEp = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
}

const signGoogle = () => {
    return signInWithPopup(firebaseAuth, googleAuth);
}

const removeSign=()=>{
    return signOut(firebaseAuth);
}

const getLists=()=>{
    return getDocs(collection(firestore,'properties'))
}

// const Storage=getStorage();


export const ArrowProvider = (props) => {
    const [user, setUser] = useState('')
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    // const handleListing=async(bname,bnmbr,bprice)=>{
    // // const imgRef=ref(Storage,`uploads/images/${Date.now}-${bpic.name}`)
    // // const uploadResult=await uploadBytes(imgRef,bpic)
    // await addDoc(collection(firestore,'books'),{
    //     Name:bname,
    //     Number:bnmbr,
    //     Price:bprice,
    //     // Image:uploadResult.ref.fullPath,
    //     userEmail:user.email,
    //     displayName:user.displayName,
    //     photoURL:user.photoURL,


    // })

    const handleListing = async () => {
  const properties = [
    {
      address: "123, Main road, Bangalore",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Clubhouse", "Cafeteria", "Lift", "Lawn"],
      area_sqft: "2000",
      bathrooms: "2",
      bedrooms: "4",
      builder: "Skyline Constructions",
      createdAt: "2025-08-06T18:44:01.105Z",
      furnishing: "Semi-Furnished",
      id: "PR-31",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_BB%26T_Building_in_Macon%2C_Georgia.jpg/800px-The_BB%26T_Building_in_Macon%2C_Georgia.jpg",
      price: "2.20",
      price_units: "lakh/month",
      title: "Luxury House",
      transaction_type: "Rent",
      type: "Farmhouse",
      year_built: "2024"
    },
    // ... rest of your property objects
  ];

  for (const property of properties) {
    await addDoc(collection(firestore, 'properties'), property);
  }
};




    const isLoggedIn=user?true:false;
    return (<>
        <ArrowContext.Provider value={{ signUpEp, signInEp, signGoogle,removeSign,getLists,handleListing,isLoggedIn }}>
            {props.children}
        </ArrowContext.Provider>
    </>)
    }}