import { createContext, useEffect, useState,  useContext } from "react";
import { app } from "../utils/firebase";
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
      // console.log(propertiesData)
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
      // Residential - Apartment
      address: "Prestige Lakeside Habitat, Whitefield, Bangalore",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Clubhouse", "Children's Play Area", "Landscaped Gardens", "Power Backup"],
      area_sqft: "1850",
      bathrooms: "3",
      bedrooms: "3",
      builder: "Prestige Group",
      createdAt: new Date().toISOString(),
      furnishing: "Semi-Furnished",
      id: "RES-APT-001",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      price: "2.85",
      price_units: "crore",
      title: "Luxury 3BHK Apartment in Prestige Society",
      transaction_type: "Sale",
      type: "Apartment",
      year_built: "2022",
      description: "Spacious 3BHK apartment with modern amenities, located in prime Whitefield area with excellent connectivity to IT hubs."
    },
    {
      // Industrial - Factory
      address: "Sipcot Industrial Park, Phase II, Sriperumbudur, Chennai",
      amenities: ["Power Backup", "24/7 Security", "Loading Dock", "Office Space", "Canteen", "Parking", "Water Treatment Plant"],
      area_sqft: "15000",
      bathrooms: "6",
      bedrooms: "0",
      builder: "Sipcot Developers",
      createdAt: new Date().toISOString(),
      furnishing: "Unfurnished",
      id: "IND-FAC-002",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      price: "8.50",
      price_units: "crore",
      title: "Modern Manufacturing Facility with Office Space",
      transaction_type: "Sale",
      type: "Factory",
      year_built: "2019",
      description: "Well-maintained factory building with ample space for manufacturing, storage and office operations in established industrial park."
    },
    {
      // Commercial - Shop
      address: "Phoenix Marketcity, Kurla, Mumbai",
      amenities: ["Air Conditioning", "Security", "Mall Location", "Parking", "Fire Safety", "Elevator Access", "High Footfall"],
      area_sqft: "650",
      bathrooms: "1",
      bedrooms: "0",
      builder: "Phoenix Mills",
      createdAt: new Date().toISOString(),
      furnishing: "Unfurnished",
      id: "COM-SHP-003",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmV0YWlsJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      price: "3.25",
      price_units: "crore",
      title: "Premium Retail Space in Phoenix Mall",
      transaction_type: "Sale",
      type: "Shop",
      year_built: "2021",
      description: "Prime retail space in one of Mumbai's most popular shopping malls with high customer footfall and excellent visibility."
    },
    {
      // Residential - Villa
      address: "Lavelle Road, Central Bangalore",
      amenities: ["Private Garden", "Swimming Pool", "Home Theater", "Modular Kitchen", "Parking", "Security", "Servant Quarters"],
      area_sqft: "4500",
      bathrooms: "5",
      bedrooms: "4",
      builder: "Brigade Group",
      createdAt: new Date().toISOString(),
      furnishing: "Fully-Furnished",
      id: "RES-VIL-004",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      price: "12.50",
      price_units: "crore",
      title: "Luxury Independent Villa in Prime Location",
      transaction_type: "Sale",
      type: "Villa",
      year_built: "2020",
      description: "Exquisite 4BHK luxury villa with premium finishes, located in the heart of Bangalore with easy access to business districts."
    },
    {
      // Industrial - Warehouse
      address: "Taloja Industrial Area, Navi Mumbai",
      amenities: ["High Ceiling", "Loading Dock", "24/7 Security", "Office Space", "Power Backup", "Parking", "Fire Safety System"],
      area_sqft: "20000",
      bathrooms: "4",
      bedrooms: "0",
      builder: "Raheja Developers",
      createdAt: new Date().toISOString(),
      furnishing: "Unfurnished",
      id: "IND-WRH-005",
      image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      price: "6.75",
      price_units: "crore",
      title: "Large Warehouse with Logistics Facilities",
      transaction_type: "Sale",
      type: "Warehouse",
      year_built: "2018",
      description: "Spacious warehouse facility with high ceilings suitable for storage, logistics and distribution operations with office annex."
    },
    {
      // Commercial - Office Space
      address: "Bandra Kurla Complex, Mumbai",
      amenities: ["Reception", "Meeting Rooms", "Pantry", "High-Speed Internet", "Parking", "Security", "Air Conditioning", "Power Backup"],
      area_sqft: "3200",
      bathrooms: "4",
      bedrooms: "0",
      builder: "Godrej Properties",
      createdAt: new Date().toISOString(),
      furnishing: "Fully-Furnished",
      id: "COM-OFF-006",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      price: "9.80",
      price_units: "crore",
      title: "Premium Office Space in BKC Financial District",
      transaction_type: "Sale",
      type: "Office Space",
      year_built: "2022",
      description: "Grade A office space in Mumbai's premier business district with modern amenities and corporate finishing."
    },
    {
      // Residential - Farm House
      address: "Yelahanka, North Bangalore",
      amenities: ["Organic Farm", "Swimming Pool", "Outdoor seating", "Parking", "Water Well", "Storage Sheds", "Landscaped Garden"],
      area_sqft: "4800",
      bathrooms: "4",
      bedrooms: "4",
      builder: "Green Acres Developers",
      createdAt: new Date().toISOString(),
      furnishing: "Semi-Furnished",
      id: "RES-FRM-007",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      price: "4.20",
      price_units: "crore",
      title: "Spacious Farmhouse with Organic Farming Land",
      transaction_type: "Sale",
      type: "Farm House",
      year_built: "2017",
      description: "Beautiful farmhouse with 2 acres of organic farming land, perfect for weekend getaways or sustainable living."
    },
    {
      // Industrial - Plot
      address: "Hosur Industrial Corridor, Tamil Nadu",
      amenities: ["All Utilities", "Road Access", "Security", "Drainage", "Water Connection", "Power Connection"],
      area_sqft: "40000",
      bathrooms: "0",
      bedrooms: "0",
      builder: "Tamil Nadu Industrial Development Corporation",
      createdAt: new Date().toISOString(),
      furnishing: "Unfurnished",
      id: "IND-PLT-008",
      image: "https://images.unsplash.com/photo-1472289065660-c57c5b22b8bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cmlhbCUyMHBsb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      price: "2.80",
      price_units: "crore",
      title: "Industrial Plot with All Utilities in Growing Corridor",
      transaction_type: "Sale",
      type: "Industrial Plot",
      year_built: "N/A",
      description: "Prime industrial plot with all necessary utilities and excellent connectivity to Bangalore and Hosur industrial areas."
    },
    {
      // Commercial - Guest House
      address: "Juhu Tara Road, Mumbai",
      amenities: ["Reception", "Housekeeping", "Parking", "Security", "Restaurant", "Conference Room", "Air Conditioning"],
      area_sqft: "5800",
      bathrooms: "12",
      bedrooms: "10",
      builder: "Hospitality Developers",
      createdAt: new Date().toISOString(),
      furnishing: "Fully-Furnished",
      id: "COM-GST-009",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      price: "18.50",
      price_units: "crore",
      title: "Boutique Guest House in Juhu Prime Location",
      transaction_type: "Sale",
      type: "Guest House",
      year_built: "2019",
      description: "Well-established guest house business in premium Juhu location with regular corporate and tourist clientele."
    },
    {
      // Residential - Plot
      address: "Electronic City Phase 2, Bangalore",
      amenities: ["Gated Community", "Security", "Parking", "Landscaping", "Water Connection", "Power Connection", "Drainage"],
      area_sqft: "2400",
      bathrooms: "0",
      bedrooms: "0",
      builder: "Sobha Developers",
      createdAt: new Date().toISOString(),
      furnishing: "Unfurnished",
      id: "RES-PLT-010",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzaWRlbnRpYWwlMjBwbG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      price: "95",
      price_units: "lakh",
      title: "Residential Plot in Developed Layout",
      transaction_type: "Sale",
      type: "Residential Plot",
      year_built: "N/A",
      description: "Well-located residential plot in approved layout with all utilities, perfect for building your dream home."
    }
  ];

  try {
    // First check if properties already exist
    const existingProperties = await getDocs(collection(firestore, 'properties'));
    if (!existingProperties.empty) {
      console.log('Properties already exist in database');
      return { success: false, message: 'Properties already exist' };
    }

    // Use batch write for better performance
    const batch = writeBatch(firestore);
    
    sampleProperties.forEach((property) => {
      const docRef = doc(collection(firestore, 'properties'));
      batch.set(docRef, {
        ...property,
        createdAt: serverTimestamp() // Use server timestamp instead of local
      });
    });

    await batch.commit();
    console.log('Sample properties added successfully');
    return { success: true, message: 'Properties added successfully' };
    
  } catch (error) {
    console.error("Error adding properties:", error);
    throw error;
  }
};


  const isLoggedIn = user ? true : false;
  // console.log(properties)
  return (<>
    <ArrowContext.Provider value={{ signUpEp, signInEp, signGoogle, removeSign, getLists, handleListing, isLoggedIn, properties,loading,
      error, }}>
      {props.children}
    </ArrowContext.Provider>
  </>)
}