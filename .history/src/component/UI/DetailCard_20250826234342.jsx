import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import { app } from "../../utils/firebase";
import { useState, useEffect } from "react";

export const DetailCard = () => {
  const data = useLoaderData();
  console.log("Loader Data:", data); // PR-1

  const firestore = getFirestore(app);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        if (data) { // Ensure id exists
          const docRef = doc(firestore, "properties", data.id);
          
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProperty({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.log("No such document!");
          }
        }
      } catch (err) {
        console.error("Error fetching property:", err);
      }
    };

    fetchProperty();
  }, [data, firestore]);

  console.log("Property Details:", property);

  return (
    <>
      <p>Welcome to DetailCard Page.</p>
      {property ? (
        <div>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
        </div>
      ) : (
        <p>Loading property...</p>
      )}
    </>
  );
};
