import { createContext, useEffect, useState, useContext } from "react";
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
  // 1. Residential (7 Types)
  {
    id: "RES-FLT-001",
    type: "Residential Flat",
    title: "2BHK Modern Apartment in Whitefield",
    address: "Whitefield, Bangalore",
    amenities: ["Lift", "Parking", "Security", "Power Backup", "Clubhouse"],
    area_sqft: "1200",
    bedrooms: "2",
    bathrooms: "2",
    builder: "Prestige Group",
    furnishing: "Semi-Furnished",
    price: "85",
    price_units: "lakh",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1600607688964-6f72b84f70a2?auto=format&fit=crop&w=600&q=60",
    year_built: "2018",
    description: "Spacious flat in prime locality with modern amenities."
  },
  {
    id: "RES-FLR-002",
    type: "Residential Floors",
    title: "Independent Builder Floor in South Delhi",
    address: "Greater Kailash, New Delhi",
    amenities: ["Parking", "Terrace", "CCTV", "Water Supply"],
    area_sqft: "1800",
    bedrooms: "3",
    bathrooms: "3",
    builder: "DLF Builders",
    furnishing: "Furnished",
    price: "2.5",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1598928506311-c55dedf4f7d6?auto=format&fit=crop&w=600&q=60",
    year_built: "2015",
    description: "Independent floor with premium finishing in posh locality."
  },
  {
    id: "RES-PLT-003",
    type: "Residential Plot",
    title: "Residential Plot in Developed Layout",
    address: "Electronic City Phase 2, Bangalore",
    amenities: ["Gated Community", "Security", "Parking", "Water Connection", "Power Connection", "Drainage"],
    area_sqft: "2400",
    bedrooms: "0",
    bathrooms: "0",
    builder: "Sobha Developers",
    furnishing: "Unfurnished",
    price: "95",
    price_units: "lakh",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=60",
    year_built: "N/A",
    description: "Approved layout with all utilities, perfect for building your dream home."
  },
  {
    id: "RES-LND-004",
    type: "Residential Land",
    title: "Open Residential Land for Villas",
    address: "Hyderabad Outer Ring Road",
    amenities: ["Clear Title", "Gated Compound", "Road Access"],
    area_sqft: "5000",
    bedrooms: "0",
    bathrooms: "0",
    builder: "Private Owner",
    furnishing: "N/A",
    price: "1.2",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?auto=format&fit=crop&w=600&q=60",
    year_built: "N/A",
    description: "Prime land suitable for villa construction in growing locality."
  },
  {
    id: "RES-VIL-005",
    type: "Residential Villa",
    title: "Luxury 4BHK Villa with Private Pool",
    address: "ECR Road, Chennai",
    amenities: ["Private Pool", "Garden", "Parking", "Security", "Gym"],
    area_sqft: "3500",
    bedrooms: "4",
    bathrooms: "5",
    builder: "Casagrand",
    furnishing: "Furnished",
    price: "3.5",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=60",
    year_built: "2020",
    description: "Premium luxury villa with modern interiors and private amenities."
  },
  {
    id: "RES-PHN-006",
    type: "Residential Penthouse",
    title: "Skyline Penthouse with Panoramic View",
    address: "Marine Drive, Mumbai",
    amenities: ["Terrace", "Jacuzzi", "Parking", "24/7 Security", "Lift"],
    area_sqft: "4200",
    bedrooms: "5",
    bathrooms: "6",
    builder: "Lodha Group",
    furnishing: "Furnished",
    price: "12",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1622127167726-88dbfdbf8e1a?auto=format&fit=crop&w=600&q=60",
    year_built: "2019",
    description: "Exclusive penthouse with unmatched luxury and city skyline views."
  },
  {
    id: "RES-SAP-007",
    type: "Residential Service Apartment",
    title: "Fully Serviced 1BHK Apartment",
    address: "MG Road, Bangalore",
    amenities: ["Housekeeping", "Furnished", "WiFi", "Parking", "Security"],
    area_sqft: "750",
    bedrooms: "1",
    bathrooms: "1",
    builder: "Brigade Group",
    furnishing: "Furnished",
    price: "45",
    price_units: "lakh",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1560184897-64a8a63a1c34?auto=format&fit=crop&w=600&q=60",
    year_built: "2017",
    description: "Ideal serviced apartment for professionals and corporates."
  },

  // 2. Industrial (3 Types)
  {
    id: "IND-FAC-008",
    type: "Industrial Factory",
    title: "Operational Manufacturing Factory",
    address: "Pune Industrial Zone",
    amenities: ["Power Supply", "Water Connection", "Parking", "24/7 Security"],
    area_sqft: "20000",
    bedrooms: "0",
    bathrooms: "5",
    builder: "Industrial Corp",
    furnishing: "Semi-Furnished",
    price: "15",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1581092334898-eda31d61b5a4?auto=format&fit=crop&w=600&q=60",
    year_built: "2010",
    description: "Ready-to-use factory setup with approvals for manufacturing."
  },
  {
    id: "IND-PLT-009",
    type: "Industrial Plot",
    title: "Industrial Plot for Manufacturing Unit",
    address: "Noida Phase 2, NCR",
    amenities: ["Road Access", "Power Line", "Water Connection"],
    area_sqft: "10000",
    bedrooms: "0",
    bathrooms: "0",
    builder: "Private Owner",
    furnishing: "N/A",
    price: "8",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1578775887804-699de7086c3f?auto=format&fit=crop&w=600&q=60",
    year_built: "N/A",
    description: "Industrial plot suitable for setting up small/medium unit."
  },
  {
    id: "IND-LND-010",
    type: "Industrial Land for Warehouse/Industry",
    title: "Industrial Land near Logistic Hub",
    address: "NH-48, Gurgaon",
    amenities: ["NH Access", "Transport Facility", "Clear Title"],
    area_sqft: "20000",
    bedrooms: "0",
    bathrooms: "0",
    builder: "DLF Infra",
    furnishing: "N/A",
    price: "20",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=60",
    year_built: "N/A",
    description: "Strategic location for warehouses and industrial setup."
  },

  // 3. Warehouse (4 Types)
  {
    id: "WH-COM-011",
    type: "Warehouse - Commercial",
    title: "Commercial Storage Warehouse",
    address: "Bhiwandi, Maharashtra",
    amenities: ["Loading Docks", "Parking", "CCTV", "24/7 Access"],
    area_sqft: "15000",
    bedrooms: "0",
    bathrooms: "2",
    builder: "Logistic Solutions Ltd",
    furnishing: "Unfurnished",
    price: "6",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1607082349566-187342d1f71d?auto=format&fit=crop&w=600&q=60",
    year_built: "2012",
    description: "Well-maintained commercial warehouse for logistics and storage."
  },
  {
    id: "WH-AGR-012",
    type: "Warehouse - Agro",
    title: "Cold Storage Agro Warehouse",
    address: "Nagpur, Maharashtra",
    amenities: ["Cold Storage", "Power Backup", "Parking"],
    area_sqft: "10000",
    bedrooms: "0",
    bathrooms: "1",
    builder: "Agro Infra",
    furnishing: "Semi-Furnished",
    price: "4",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1599427303058-f04c7be267f4?auto=format&fit=crop&w=600&q=60",
    year_built: "2016",
    description: "Temperature-controlled agro storage for perishable goods."
  },
  {
    id: "WH-TRN-013",
    type: "Warehouse - Transport",
    title: "Transport & Logistic Warehouse",
    address: "Sanand, Gujarat",
    amenities: ["Truck Access", "Loading Dock", "Security"],
    area_sqft: "12000",
    bedrooms: "0",
    bathrooms: "1",
    builder: "Transport Infra",
    furnishing: "Unfurnished",
    price: "5.5",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1549921296-3d8783a034b6?auto=format&fit=crop&w=600&q=60",
    year_built: "2015",
    description: "Warehouse designed for transport and logistics companies."
  },
  {
    id: "WH-LND-014",
    type: "Warehouse Land / Industrial Land",
    title: "Land for Warehouse Development",
    address: "Sriperumbudur, Chennai",
    amenities: ["NH Access", "Clear Title", "Road Access"],
    area_sqft: "25000",
    bedrooms: "0",
    bathrooms: "0",
    builder: "Private Owner",
    furnishing: "N/A",
    price: "9",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1603816240592-8ea8a708dee0?auto=format&fit=crop&w=600&q=60",
    year_built: "N/A",
    description: "Strategic land parcel ideal for industrial warehouse setup."
  },

  // 4. Commercial (4 Types)
  {
    id: "COM-SHP-015",
    type: "Commercial Shop",
    title: "Retail Shop in Mall",
    address: "Phoenix Market City, Bangalore",
    amenities: ["Power Backup", "Parking", "Security"],
    area_sqft: "500",
    bedrooms: "0",
    bathrooms: "1",
    builder: "Phoenix Developers",
    furnishing: "Semi-Furnished",
    price: "1.2",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=60",
    year_built: "2018",
    description: "High footfall retail shop located inside premium mall."
  },
  {
    id: "COM-OFS-016",
    type: "Commercial Office Space",
    title: "Grade A Office Space",
    address: "Cyberhub, Gurgaon",
    amenities: ["Lift", "Parking", "Security", "Cafeteria"],
    area_sqft: "3500",
    bedrooms: "0",
    bathrooms: "4",
    builder: "DLF",
    furnishing: "Furnished",
    price: "6",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e17d?auto=format&fit=crop&w=600&q=60",
    year_built: "2019",
    description: "Corporate office space in prime IT hub."
  },
  {
    id: "COM-GST-017",
    type: "Commercial Guest House",
    title: "Guest House with 12 Rooms",
    address: "Banjara Hills, Hyderabad",
    amenities: ["Parking", "WiFi", "Kitchen", "Security"],
    area_sqft: "6000",
    bedrooms: "12",
    bathrooms: "14",
    builder: "Private Owner",
    furnishing: "Furnished",
    price: "7",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=60",
    year_built: "2014",
    description: "Running guest house suitable for hospitality business."
  },
  {
    id: "COM-SAP-018",
    type: "Commercial Service Apartment",
    title: "Service Apartment for Corporate Leasing",
    address: "Andheri East, Mumbai",
    amenities: ["Housekeeping", "WiFi", "Parking", "Furnished"],
    area_sqft: "1500",
    bedrooms: "2",
    bathrooms: "2",
    builder: "Private Developer",
    furnishing: "Furnished",
    price: "2.5",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=60",
    year_built: "2016",
    description: "Ready service apartment targeted for corporates & investors."
  },

  // 5. Farm Houses (2 Types)
  {
    id: "FARM-RDY-019",
    type: "Farm House - Ready",
    title: "Ready Farm House with Organic Farm",
    address: "Nandi Hills, Bangalore",
    amenities: ["Organic Farm", "Swimming Pool", "Parking", "Security"],
    area_sqft: "10000",
    bedrooms: "3",
    bathrooms: "3",
    builder: "Private Owner",
    furnishing: "Semi-Furnished",
    price: "5",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=60",
    year_built: "2013",
    description: "Peaceful farm house with organic farming and luxury amenities."
  },
  {
    id: "FARM-LND-020",
    type: "Farm House Land",
    title: "Land for Farm House Development",
    address: "ECR Road, Pondicherry",
    amenities: ["Clear Title", "Compound Wall", "Water Supply"],
    area_sqft: "15000",
    bedrooms: "0",
    bathrooms: "0",
    builder: "Private Owner",
    furnishing: "N/A",
    price: "2.2",
    price_units: "crore",
    transaction_type: "Sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=60",
    year_built: "N/A",
    description: "Serene land parcel for developing customized farm house."
  }
];


    for (const property of properties) {
      await addDoc(collection(firestore, 'properties'), property);
    }
  };



  const isLoggedIn = user ? true : false;
  // console.log(properties)
  return (<>
    <ArrowContext.Provider value={{
      signUpEp, signInEp, signGoogle, removeSign, getLists, handleListing, isLoggedIn, properties, loading,
      error,firestore
    }}>
      {props.children}
    </ArrowContext.Provider>
  </>)
}