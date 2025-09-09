import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../utils/firebase";

export const getPropertiesDetails = async (param) => {
  const id = param.params.Id;
  
  try {
    // Fetch the property data from Firestore
    const firestore = getFirestore(appp);
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