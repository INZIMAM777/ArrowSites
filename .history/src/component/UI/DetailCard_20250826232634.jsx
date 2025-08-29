import { useLoaderData } from "react-router-dom"

export const DetailCard=()=>{
  const data=useLoaderData();
  console.log(data+'hello')
  return(
    <>
      <p>Welcome to DetailCard Page.</p>
    </>
  )
}