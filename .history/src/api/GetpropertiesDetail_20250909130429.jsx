import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";

export const getPropertiesDetails = async (param) => {
  const id = param.params.Id;
  console.log("Looking for property with ID:", id);

  try {
    const firestore = getFirestore(app);
    const docRef = doc(firestore, "properties", id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      console.log("No property found with ID:", id);
      throw new Error("Property not found");
    }

    const result = { id: snap.id, ...snap.data() };
    console.log("Found property:", result);

    return result;
  } catch (error) {
    console.error("Error fetching property details:", error);
    throw error;
  }
};
