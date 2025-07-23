export const getPropertiesDetails= async(params)=>{
     console.log(params)
    try{
          const res = await fetch(`/property.json`);
        const data = await res.json();
        `${console.log(data)}`
        return [data,params.params.id;
    }
    catch(error){
        console.log(error)
    }
}
