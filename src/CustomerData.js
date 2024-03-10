// CustomerData.js

'use client';
import { db } from './Firebase';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import Customer from "./Customer"
import CardS from "./CardS"
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
export default function CustomerData() {
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
      <div>

        {
        userData.map((userDataItem) => (
          <>
          <CardS userDataItem={userDataItem}/>

          </>
        ))}
  
      </div>

    </main>
  );
}
