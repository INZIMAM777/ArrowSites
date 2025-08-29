import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { app } from "../../utils/firebase";
import { useState } from "react";

export const DetailCard=()=>{
  const data=useLoaderData();
  const firestore = getFirestore(app)
  const [property,setProperty]=useState(null);
  console.log("Property Details:",property)

  const getDatasFire=async()=>{
        const collectData=collection(firestore,'properties');
        const q=query(collectData,where('id','==',data))
        const snap=await getDocs(q);
        // const snap=await getDocs(collectData);
        console.log(snap)
    }

  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}