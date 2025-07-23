export const getProperties = async ({ params }) => {
  console.log(params.Id); // Debug: Logs the ID passed in the route

  try {
    const res = await fetch('../api/property.json'); // Path to your JSON file
    const data = await res.json();
     console.log(data);

    if (params.Id) {
      const property = data.properties.find((item) => item.id === params.Id);
      if (!property) throw new Error('Property not found');
      // Optional debug
      return { property };
    }

    // You can return full list here if needed for Cards page
    // return { properties: data.properties };

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