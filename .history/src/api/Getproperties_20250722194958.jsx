// loaders.js
export const getProperties = async ({ params }) => {
    console.log(params.Id)
  try {
    const res = await fetch('./api/property.json');
    const data = await res.json();

    if (params.Id) {
      const property = data.properties.filter((item) => item.id === params.Id);
      if (!property) throw new Error('Property not found');
      console.log(property);
      return { property };
    }
    
    return data; // For Cards list
  } catch (error) {
    return { error: error.message };
  }
};

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