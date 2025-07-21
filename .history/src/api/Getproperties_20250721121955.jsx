export const getProperties = async () => {
    try {
        const res = await fetch('property.json');
        const data=await res.json();

        console
        return data;

    } catch (error) {
        console.log(error);
    }
}