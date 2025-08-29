import { createContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import { useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getAuth } from 'firebase/auth'
import { collection, getFirestore, getDocs, addDoc, query, where } from 'firebase/firestore'
// import { getStorage, ref,uploadBytes } from 'firebase/storage'


const ArrowContext = createContext(null);

export const useFirebase = () => useContext(ArrowContext)
const firestore = getFirestore(app)

const firebaseAuth = getAuth(app);

const googleAuth = new GoogleAuthProvider();
const signUpEp = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
}
const signInEp = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
}

const signGoogle = () => {
  return signInWithPopup(firebaseAuth, googleAuth);
}

const removeSign = () => {
  return signOut(firebaseAuth);
}



// const Storage=getStorage();


export const ArrowProvider = (props) => {
  const [user, setUser] = useState('')
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  // const getLists=()=>{
  //   return getDocs(collection(firestore,'properties'))
  // }
  const [properties, setProperties] = useState([])
   const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getLists = async (filters = {}) => {
    setLoading(true)
    setError(null)
    try {
      let q = collection(firestore, 'properties')
      
      // Add filters if provided
      if (filters.transaction_type) {
        q = query(q, where('transaction_type', '==', filters.transaction_type))
      }
      if (filters.type) {
        q = query(q, where('type', '==', filters.type))
      }
      
      const querySnapshot = await getDocs(q)
      const propertiesData = []
      
      querySnapshot.forEach((doc) => {
        propertiesData.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      setProperties(propertiesData)
      return propertiesData
    } catch (err) {
      setError(err.message)
      console.error("Error fetching properties:", err)
      return []
    } finally {
      setLoading(false)
    }
  }


  // const handleListing=async(bname,bnmbr,bprice)=>{
  // // const imgRef=ref(Storage,`uploads/images/${Date.now}-${bpic.name}`)
  // // const uploadResult=await uploadBytes(imgRef,bpic)
  // await addDoc(collection(firestore,'books'),{
  //     Name:bname,
  //     Number:bnmbr,
  //     Price:bprice,
  //     // Image:uploadResult.ref.fullPath,
  //     userEmail:user.email,
  //     displayName:user.displayName,
  //     photoURL:user.photoURL,


  // })

  const handleListing = async () => {
    const properties = [
      {
        address: "123, Main road, Bangalore",
        amenities: ["Swimming Pool", "Gym", "24/7 Security", "Clubhouse", "Cafeteria", "Lift", "Lawn"],
        area_sqft: "2000",
        bathrooms: "2",
        bedrooms: "4",
        builder: "Skyline Constructions",
        createdAt: "2025-08-06T18:44:01.105Z",
        furnishing: "Semi-Furnished",
        id: "PR-1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Modern_house_in_Australia.jpg/640px-Modern_house_in_Australia.jpg",
        price: "2.20",
        price_units: "lakh/month",
        title: "Luxury House",
        transaction_type: "Rent",
        type: "Farmhouse",
        year_built: "2024"
      },
      {
        address: "45, MG Road, Chennai",
        amenities: ["Gym", "24/7 Security", "Lift", "Power Backup"],
        area_sqft: "1500",
        bathrooms: "2",
        bedrooms: "3",
        builder: "Prestige Group",
        createdAt: "2025-08-07T09:15:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/High-rise_apartments_in_Singapore.jpg/640px-High-rise_apartments_in_Singapore.jpg",
        price: "1.50",
        price_units: "crore",
        title: "Premium Apartment",
        transaction_type: "Sale",
        type: "Apartment",
        year_built: "2022"
      },
      {
        address: "89, Park Avenue, Hyderabad",
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "Cafeteria"],
        area_sqft: "1800",
        bathrooms: "3",
        bedrooms: "3",
        builder: "Lodha Developers",
        createdAt: "2025-08-07T11:20:00.000Z",
        furnishing: "Semi-Furnished",
        id: "PR-3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Residential_building_in_Mumbai.jpg/640px-Residential_building_in_Mumbai.jpg",
        price: "70",
        price_units: "thousand/month",
        title: "Modern Gated Community Flat",
        transaction_type: "Rent",
        type: "Flat",
        year_built: "2021"
      },
      {
        address: "17, Residency Road, Pune",
        amenities: ["Garden", "Parking", "Security", "Lift"],
        area_sqft: "2200",
        bathrooms: "3",
        bedrooms: "4",
        builder: "Godrej Properties",
        createdAt: "2025-08-07T13:00:00.000Z",
        furnishing: "Unfurnished",
        id: "PR-4",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Contemporary_villa_in_Spain.jpg/640px-Contemporary_villa_in_Spain.jpg",
        price: "3.00",
        price_units: "crore",
        title: "Contemporary Villa",
        transaction_type: "Sale",
        type: "Villa",
        year_built: "2020"
      },
      {
        address: "6, Church Street, Kochi",
        amenities: ["Swimming Pool", "Gym", "Spa", "Clubhouse"],
        area_sqft: "2500",
        bathrooms: "4",
        bedrooms: "5",
        builder: "Sobha Ltd",
        createdAt: "2025-08-07T15:45:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-5",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Beachfront_property_in_Goa.jpg/640px-Beachfront_property_in_Goa.jpg",
        price: "1.80",
        price_units: "crore",
        title: "Sea View Luxury House",
        transaction_type: "Sale",
        type: "House",
        year_built: "2023"
      },
      {
        address: "12, Brigade Road, Bangalore",
        amenities: ["Lift", "Power Backup", "24/7 Security"],
        area_sqft: "900",
        bathrooms: "1",
        bedrooms: "2",
        builder: "DLF Homes",
        createdAt: "2025-08-07T16:10:00.000Z",
        furnishing: "Semi-Furnished",
        id: "PR-6",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Apartment_interior_in_Japan.jpg/640px-Apartment_interior_in_Japan.jpg",
        price: "30",
        price_units: "thousand/month",
        title: "Budget Friendly Flat",
        transaction_type: "Rent",
        type: "Apartment",
        year_built: "2019"
      },
      {
        address: "54, Palace Road, Jaipur",
        amenities: ["Garden", "Parking", "Lift", "Security"],
        area_sqft: "1600",
        bathrooms: "2",
        bedrooms: "3",
        builder: "Mahindra Lifespaces",
        createdAt: "2025-08-07T18:30:00.000Z",
        furnishing: "Unfurnished",
        id: "PR-7",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Heritage_home_in_Jaipur.jpg/640px-Heritage_home_in_Jaipur.jpg",
        price: "60",
        price_units: "lakh",
        title: "City Center Apartment",
        transaction_type: "Sale",
        type: "Apartment",
        year_built: "2018"
      },
      {
        address: "99, Marina Street, Mumbai",
        amenities: ["Gym", "Swimming Pool", "Cafeteria", "Spa"],
        area_sqft: "2100",
        bathrooms: "3",
        bedrooms: "4",
        builder: "Hiranandani Group",
        createdAt: "2025-08-07T20:00:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-8",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Luxury_highrise_in_Dubai.jpg/640px-Luxury_highrise_in_Dubai.jpg",
        price: "4.50",
        price_units: "crore",
        title: "Luxury Marina View Flat",
        transaction_type: "Sale",
        type: "Flat",
        year_built: "2024"
      },
      {
        address: "21, Hill View, Shimla",
        amenities: ["Parking", "Garden", "Fireplace"],
        area_sqft: "3000",
        bathrooms: "4",
        bedrooms: "5",
        builder: "Himalaya Constructions",
        createdAt: "2025-08-08T07:00:00.000Z",
        furnishing: "Semi-Furnished",
        id: "PR-9",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mountain_cottage_in_India.jpg/640px-Mountain_cottage_in_India.jpg",
        price: "1.10",
        price_units: "crore",
        title: "Mountain View Villa",
        transaction_type: "Sale",
        type: "Villa",
        year_built: "2021"
      },
      {
        address: "11, Lotus Avenue, Surat",
        amenities: ["Lift", "24/7 Security", "Power Backup"],
        area_sqft: "1300",
        bathrooms: "2",
        bedrooms: "3",
        builder: "Shree Builders",
        createdAt: "2025-08-08T08:20:00.000Z",
        furnishing: "Unfurnished",
        id: "PR-10",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Modern_apartment_complex_in_Delhi.jpg/640px-Modern_apartment_complex_in_Delhi.jpg",
        price: "45",
        price_units: "lakh",
        title: "Affordable City Apartment",
        transaction_type: "Sale",
        type: "Apartment",
        year_built: "2017"
      },
      {
        address: "88, Green Park, New Delhi",
        amenities: ["Swimming Pool", "Gym", "24/7 Security", "Clubhouse", "Spa"],
        area_sqft: "2600",
        bathrooms: "4",
        bedrooms: "5",
        builder: "DLF Homes",
        createdAt: "2025-08-08T09:10:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-11",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Penthouse_view_in_Hong_Kong.jpg/640px-Penthouse_view_in_Hong_Kong.jpg",
        price: "5.25",
        price_units: "crore",
        title: "DLF Luxury Tower Penthouse",
        transaction_type: "Sale",
        type: "Penthouse",
        year_built: "2023"
      },
      {
        address: "54, Seaside Road, Goa",
        amenities: ["Beach Access", "Swimming Pool", "Gym", "Clubhouse"],
        area_sqft: "1800",
        bathrooms: "3",
        bedrooms: "3",
        builder: "Oceanic Builders",
        createdAt: "2025-08-08T10:00:00.000Z",
        furnishing: "Semi-Furnished",
        id: "PR-12",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Goa_beach_house.jpg/640px-Goa_beach_house.jpg",
        price: "1.80",
        price_units: "crore",
        title: "Beachfront Villa",
        transaction_type: "Sale",
        type: "Villa",
        year_built: "2022"
      },
      {
        address: "19, Silicon Valley, Bangalore",
        amenities: ["Power Backup", "Lift", "24/7 Security", "Parking"],
        area_sqft: "1400",
        bathrooms: "2",
        bedrooms: "3",
        builder: "Brigade Group",
        createdAt: "2025-08-08T11:20:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-13",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tech_park_area_in_Bangalore.jpg/640px-Tech_park_area_in_Bangalore.jpg",
        price: "55",
        price_units: "thousand/month",
        title: "Tech Park Facing Apartment",
        transaction_type: "Rent",
        type: "Apartment",
        year_built: "2021"
      },
      {
        address: "77, Riverside Lane, Kolkata",
        amenities: ["Garden", "Parking", "Lift", "CCTV"],
        area_sqft: "2000",
        bathrooms: "3",
        bedrooms: "4",
        builder: "Ambuja Neotia",
        createdAt: "2025-08-08T12:00:00.000Z",
        furnishing: "Unfurnished",
        id: "PR-14",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Riverside_property_in_Kolkata.jpg/640px-Riverside_property_in_Kolkata.jpg",
        price: "1.25",
        price_units: "crore",
        title: "Riverside Apartment",
        transaction_type: "Sale",
        type: "Apartment",
        year_built: "2019"
      },
      {
        address: "23, Hilltop View, Ooty",
        amenities: ["Fireplace", "Garden", "Parking", "Security"],
        area_sqft: "2800",
        bathrooms: "4",
        bedrooms: "5",
        builder: "Hillside Estates",
        createdAt: "2025-08-08T13:15:00.000Z",
        furnishing: "Semi-Furnished",
        id: "PR-15",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ooty_hill_station_home.jpg/640px-Ooty_hill_station_home.jpg",
        price: "95",
        price_units: "lakh",
        title: "Mountain Log House",
        transaction_type: "Sale",
        type: "House",
        year_built: "2020"
      },
      {
        address: "101, Skyline Towers, Mumbai",
        amenities: ["Gym", "Swimming Pool", "Clubhouse", "Lift"],
        area_sqft: "1900",
        bathrooms: "3",
        bedrooms: "3",
        builder: "Oberoi Realty",
        createdAt: "2025-08-08T14:05:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-16",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Luxury_condo_in_Mumbai.jpg/640px-Luxury_condo_in_Mumbai.jpg",
        price: "3.75",
        price_units: "crore",
        title: "Luxury City Condo",
        transaction_type: "Sale",
        type: "Condo",
        year_built: "2024"
      },
      {
        address: "32, Rosewood Street, Chandigarh",
        amenities: ["Garden", "Parking", "Security"],
        area_sqft: "1500",
        bathrooms: "2",
        bedrooms: "3",
        builder: "Rosewood Builders",
        createdAt: "2025-08-08T15:30:00.000Z",
        furnishing: "Unfurnished",
        id: "PR-17",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Modern_townhouse_in_Chandigarh.jpg/640px-Modern_townhouse_in_Chandigarh.jpg",
        price: "45",
        price_units: "lakh",
        title: "Modern Townhouse",
        transaction_type: "Sale",
        type: "Townhouse",
        year_built: "2021"
      },
      {
        address: "70, Garden Street, Mysore",
        amenities: ["Garden", "Swimming Pool", "Clubhouse"],
        area_sqft: "2400",
        bathrooms: "4",
        bedrooms: "4",
        builder: "Mysore Estates",
        createdAt: "2025-08-08T16:10:00.000Z",
        furnishing: "Semi-Furnished",
        id: "PR-18",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Garden_villa_in_Mysore.jpg/640px-Garden_villa_in_Mysore.jpg",
        price: "1.50",
        price_units: "crore",
        title: "Garden View Villa",
        transaction_type: "Sale",
        type: "Villa",
        year_built: "2022"
      },
      {
        address: "14, Pearl Avenue, Ahmedabad",
        amenities: ["Lift", "Parking", "24/7 Security"],
        area_sqft: "1200",
        bathrooms: "2",
        bedrooms: "2",
        builder: "Pearl Developers",
        createdAt: "2025-08-08T17:25:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-19",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Compact_flat_in_Ahmedabad.jpg/640px-Compact_flat_in_Ahmedabad.jpg",
        price: "35",
        price_units: "thousand/month",
        title: "Compact City Flat",
        transaction_type: "Rent",
        type: "Flat",
        year_built: "2020"
      },

      {
        address: "5, Palm Grove, Kochi",
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "Spa", "Cafeteria"],
        area_sqft: "3000",
        bathrooms: "5",
        bedrooms: "6",
        builder: "Palm Grove Developers",
        createdAt: "2025-08-08T18:40:00.000Z",
        furnishing: "Fully-Furnished",
        id: "PR-20",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Luxury_beach_house_in_Kerala.jpg/640px-Luxury_beach_house_in_Kerala.jpg",
        price: "6.50",
        price_units: "crore",
        title: "Ultra Luxury Beach Villa",
        transaction_type: "Sale",
        type: "Villa",
        year_built: "2024"
      }
    ];

    for (const property of properties) {
      await addDoc(collection(firestore, 'properties'), property);
    }
  };






  const isLoggedIn = user ? true : false;
  return (<>
    <ArrowContext.Provider value={{ signUpEp, signInEp, signGoogle, removeSign, getLists, handleListing, isLoggedIn, properties }}>
      {props.children}
    </ArrowContext.Provider>
  </>)
}