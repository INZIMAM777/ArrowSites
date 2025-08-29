import { collection, getDoc, getFirestore } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { app } from "../../utils/firebase";
import { useState } from "react";

export const DetailCard=()=>{
  const data=useLoaderData();
  const firestore = getFirestore(app)
  const [property,setProperty]=useState(null);
  const detail=getDocs(collection(firestore,'properties'))
  setProperty(detail)
  console.log("Property Details:",property)

  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}