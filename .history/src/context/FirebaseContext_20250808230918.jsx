import { createContext, useEffect, useState } from "react";
import { app } from "../utils/firebase";
import { useContext } from "react";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getAuth } from 'firebase/auth'
import {  collection, getFirestore,getDocs } from 'firebase/firestore'
// import { getStorage, ref,uploadBytes } from 'firebase/storage'


const ArrowContext = createContext(null);

export const useFirebase = () => useContext(ArrowContext)
const firestore=getFirestore(app)

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

const removeSign=()=>{
    return signOut(firebaseAuth);
}

const getLists=()=>{
    return getDocs(collection(firestore,'properties'))
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

    const handleListing=async()=>{
    // const imgRef=ref(Storage,`uploads/images/${Date.now}-${bpic.name}`)
    // const uploadResult=await uploadBytes(imgRef,bpic)
    await addDoc(collection(firestore,'books'),[
        {
    address: "123, Main road, Bangalore",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Clubhouse", "Cafeteria", "Lift", "Lawn"],
    area_sqft: "2000",
    bathrooms: "2",
    bedrooms: "4",
    builder: "Skyline Constructions",
    createdAt: "2025-08-06T18:44:01.105Z",
    furnishing: "Semi-Furnished",
    id: "PR-31",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_BB%26T_Building_in_Macon%2C_Georgia.jpg/800px-The_BB%26T_Building_in_Macon%2C_Georgia.jpg",
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
    id: "PR-32",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Modern_apartment_building.jpg/640px-Modern_apartment_building.jpg",
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
    id: "PR-33",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Residential_building_in_Dubai.jpg/640px-Residential_building_in_Dubai.jpg",
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
    id: "PR-34",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Contemporary_house_in_Melbourne.jpg/640px-Contemporary_house_in_Melbourne.jpg",
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
    id: "PR-35",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Modern_House_in_Poland.jpg/640px-Modern_House_in_Poland.jpg",
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
    id: "PR-36",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Apartment_building_in_Toronto.jpg/640px-Apartment_building_in_Toronto.jpg",
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
    id: "PR-37",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apartment_Building_in_Stockholm.jpg/640px-Apartment_Building_in_Stockholm.jpg",
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
    id: "PR-38",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Luxury_apartment_building_in_Sydney.jpg/640px-Luxury_apartment_building_in_Sydney.jpg",
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
    id: "PR-39",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mountain_home_in_Colorado.jpg/640px-Mountain_home_in_Colorado.jpg",
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
    id: "PR-40",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Apartment_block_in_London.jpg/640px-Apartment_block_in_London.jpg",
    price: "45",
    price_units: "lakh",
    title: "Affordable City Apartment",
    transaction_type: "Sale",
    type: "Apartment",
    year_built: "2017"
  }

    ])



    const isLoggedIn=user?true:false;
    return (<>
        <ArrowContext.Provider value={{ signUpEp, signInEp, signGoogle,removeSign,getLists,handleListing,isLoggedIn }}>
            {props.children}
        </ArrowContext.Provider>
    </>)
