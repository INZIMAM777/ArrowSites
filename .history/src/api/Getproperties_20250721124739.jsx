export const getProperties = async () => {
  try {
    const res = await fetch('/api/property.json');
    
    if (!res.ok) {
      throw new Error(`Failed to fetch (${res.status})`);
    }

    const data = await res.json();
    
    // Validate data structure
    if (!data.properties || !Array.isArray(data.properties)) {
      throw new Error('Invalid data format');
    }

    return data;
    
  } catch (error) {
    // Return error structure that matches your success case
    return {
      city: 'Error',
      state: 'Error',
      properties: [],
      error: error.message
    };
  }
};