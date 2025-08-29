import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
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

  const getDatasFire=async()=>{
        const collectData=collection(firestore,'properties');
        const q=query(collectData,where('id','==',data))
        const snap=await getDocs(q);
        // const snap=await getDocs(collectData);
        snap.forEach((data)=>console.log(data._document.data.value.mapValue.fields))
    }

  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}