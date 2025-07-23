export const getProperti= async(param)=>{
    console.log(param.params.MovieId)

    try{
          const res = await fetch(`https://www.omdbapi.com/?i=${param.params.MovieId}&apikey=${import.meta.env.VITE_OMDBAPI_KEY}`);
        const data = await res.json();
        `${console.log(data)}`
        return data;
    }
    catch(error){
        console.log(error)
    }
}
// export const getProperties = async () => {
//   try {
//     const res = await fetch('../api/property.json');
    
//     if (!res.ok) {
//       throw new Error(`Failed to fetch (${res.status})`);
//     }

//     const data = await res.json();
    
//     // Validate data structure
//     if (!data.properties || !Array.isArray(data.properties)) {
//       throw new Error('Invalid data format');
//     }

//     return data;
    
//   } catch (error) {
//     // Return error structure that matches your success case
//     return {
//       city: 'Error',
//       state: 'Error',
//       properties: [],
//       error: error.message
//     };
//   }
// };