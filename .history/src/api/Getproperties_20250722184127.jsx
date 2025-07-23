// loaders.js
export const getProperties = async ({ params }) => {
  try {
    const res = await fetch('/api/property.json'); // Must be from /public for fetch
    const data = await res.json();

    if (params.Id) {
      const property = data.properties.find((item) => item.id === params.Id);
      if (!property) throw new Error('Property not found');
      return { property };
    }

    return data; // For Cards list
  } catch (error) {
    return { error: error.message };
  }
};
