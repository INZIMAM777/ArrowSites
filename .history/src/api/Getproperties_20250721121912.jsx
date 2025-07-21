export const getProperties = async () => {
    try {
        const res = await fetch('property.json');
        
    } catch (error) {
        console.log(error);
    }
}