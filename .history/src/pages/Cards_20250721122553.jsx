import { useLoaderData } from "react-router-dom";
export const Cards=()=>{
    const data= useLoaderData()
    return(
        <>
            <p>Welcomes to Cards Page</p>
        </>
    )
}