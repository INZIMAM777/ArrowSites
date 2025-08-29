import { collection, getDoc, getFirestore } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { app } from "../../utils/firebase";

export const DetailCard=()=>{
  const data=useLoaderData();
  const firestore = getFirestore(app)
  const [property,setProperty]=useState(null);
  const detail=getDoc(collection(firestore,'properties',data.id))
  console.log(de)
  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}