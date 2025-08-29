import { useLoaderData } from "react-router-dom"

export const DetailCard=()=>{
  const data=useLoaderData();
  console.log(data)
  return(
    <>
      <p>Welcome to Detail</p>
    </>
  )
}