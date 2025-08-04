import { useEffect, useState } from "react";
import { useFirebase } from "../context/FirebaseContext";

export const DisplayCards=()=>{
    const [properties, setProperties] = useState([]);
    const firebase = useFirebase();
     useEffect(() => {
        firebase.getLists().then((propertiesSnapshot) => {
            const propertyData = propertiesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProperties(propertyData);
        });
    }, []);
    
    return (
        <>
            <style>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
                    padding: 2rem 1rem;
                    max-width: 1200px;
                    margin: auto;
                }

                h1 {
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 2.5rem;
                    color: #343a40;
                }

                button {
                    display: block;
                    margin: 1rem auto;
                    padding: 0.5rem 1.2rem;
                    background-color: #dc3545;
                    border: none;
                    color: white;
                    font-size: 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #c82333;
                }
            `}</style>
            <h1>Welcome to Cards page</h1>

            <div className="container">
                {properties.map((prorety) => (
                    <BCard key={property.id} book={} />
                ))}
            </div>
        </>
    );
}