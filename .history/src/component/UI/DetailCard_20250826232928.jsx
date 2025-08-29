import { getFirestore } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { app } from "../../utils/firebase";

export const DetailCard=()=>{
  const data=useLoaderData();
  const firestore = getFirestore(app)
  console.log(data)
  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}