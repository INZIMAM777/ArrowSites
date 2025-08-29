import { createContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import { useContext } from "react";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getAuth } from 'firebase/auth'
import {  collection, getFirestore,getDocs } from 'firebase/firestore'
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

    const handleListing=async(bname,bnmbr,bprice)=>{
    // const imgRef=ref(Storage,`uploads/images/${Date.now}-${bpic.name}`)
    // const uploadResult=await uploadBytes(imgRef,bpic)
    await addDocs(collection(firestore,'books'),{
        Name:bname,
        Number:bnmbr,
        Price:bprice,
        // Image:uploadResult.ref.fullPath,
        userEmail:user.email,
        displayName:user.displayName,
        photoURL:user.photoURL,


    })



    const isLoggedIn=user?true:false;
    return (<>
        <ArrowContext.Provider value={{ signUpEp, signInEp, signGoogle,removeSign,getLists,isLoggedIn }}>
            {props.children}
        </ArrowContext.Provider>
    </>)
}