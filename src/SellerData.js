// SellerData.js

'use client';
import { db } from './Firebase';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import Seller from "./Seller"
import Random from './Random';
import CardC from "./CardC"
// Function to fetch data from Firestore
async function fetchDataFromFirestore() {

  const querySnapshot = await getDocs(collection(db, 'users'));
  const data = [];
  
  querySnapshot.forEach((doc) => {
    // console.log('Document data:', doc.data());
    // Use doc.data() to get the document data
    data.push({ id: doc.id, ...doc.data() });
  });

  // console.log('Final data array:', data);
  return data;
}
// export default fetchDataFromFirestore;

// React component
export default function SellerData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataFromFirestore();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <div className='card1'>

        {
        userData.map((userDataItem) => (
          <>
          <CardC userDataItem={userDataItem} className='card1'/>

          </>
        ))}
  
      </div>

    </main>
  );
}
