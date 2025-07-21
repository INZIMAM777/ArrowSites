import { useLoaderData } from "react-router-dom";
export const Cards=()=>{
    const data= useLoaderData();
    console.log(data);
    return(
        <>
            <p>Welcomes to Cards Page</p>
        </>
    )
}