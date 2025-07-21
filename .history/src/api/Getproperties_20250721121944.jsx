export const getProperties = async () => {
    try {
        const res = await fetch('property.json');
        const data=await res.json();

        

    } catch (error) {
        console.log(error);
    }
}