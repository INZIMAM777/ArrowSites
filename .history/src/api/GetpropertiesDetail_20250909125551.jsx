import { getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";

export const getPropertiesDetails = async (param) => {
  const id = param.params.Id;
  console.log("Looking for property with ID:", id);
  
  try {
    const firestore = getFirestore(app);
    const collectData = collection(firestore, "properties");
    const q = query(collectData, where("id", "==", id));
    const snap = await getDocs(q);
    
    console.log("Found documents:", snap.size);
    
    if (snap.empty) {
      console.log("No property found with ID:", id);
      throw new Error("Property not found");
    }
    
    let result = null;
    snap.forEach((doc) => {
      result = { id: doc.id, ...doc.data() };
      console.log("Found property:", result);
    });
    
    return result;
  } catch (error) {
    console.error("Error fetching property details:", error);
    throw error;
  }
};