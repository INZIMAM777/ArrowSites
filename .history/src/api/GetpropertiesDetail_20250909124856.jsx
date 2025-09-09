import { collection, getFirestore, query, where } from "firebase/firestore";

export const getPropertiesDetails = async (param) => {
  const id = param.params.Id;
  
  try {
    // Fetch the property data from Firestore
    const firestore = getFirestore(app);
    const collectData = collection(firestore, "properties");
    const q = query(collectData, where("id", "==", id));
    const snap = await getDocs(q);
    
    if (snap.empty) {
      throw new Error("Property not found");
    }
    
    let result = null;
    snap.forEach((doc) => {
      result = { id: doc.id, ...doc.data() };
    });
    
    return result;
  } catch (error) {
    console.error("Error fetching property details:", error);
    throw error;
  }
};