import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import { app } from "../../utils/firebase";
import { useEffect, useState } from "react";

export const DetailCard = () => {
  const data = useLoaderData(); // This should be the property id
  const firestore = getFirestore(app);
  const [property, setProperty] = useState(null);

  const getDatasFire = async () => {
    const collectData = collection(firestore, "properties");
    const q = query(collectData, where("id", "==", data));
    const snap = await getDocs(q);

    let result = [];
    snap.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() }); // ✅ Correct way
    });

    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      const props = await getDatasFire();
      if (props.length > 0) {
        setProperty(props[0]); // store first matched property
      }
    };
    fetchData();
  }, []);

  console.log("Property Details:", property);

  return (
    <>
      <p>Welcome to DetailCard Page.</p>
      {property && (
        <div>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
        </div>
      )}
    </>
  );
};
