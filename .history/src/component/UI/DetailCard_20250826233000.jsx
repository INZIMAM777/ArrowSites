import { getFirestore } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { app } from "../../utils/firebase";

export const DetailCard=()=>{
  const data=useLoaderData();
  const firestore = getFirestore(app)
  const [property]
  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}