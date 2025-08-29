import { useLoaderData } from "react-router-dom"

export const DetailCard=()=>{
  const data=useLoaderData();
  const firestore
  console.log(data)
  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}