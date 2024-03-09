// 'use client'
// import {db} from "./Firebase"
// import React, { useEffect, useState } from 'react';
// import {getDocs, collection} from "firebase/firestore";

// async function FetchDataFromFirestore(){
//   const querySnapshot=await getDocs(collection(db,"users"));
//   const data=[];
//   data.forEach((doc)=>{
//     data.push({id:doc.id,...doc.data()});
//   });
//   return data;
// }
// export default function Home(){
//   const [userData,setUserData]=useState([]);
//   useEffect(()=>{
//     async function fetchData(){
//       const data= await FetchDataFromFirestore();
//       setUserData(data);

//     }
//     fetchData();
//   },[])
//   return(
//     <main>
//       <div >
//         {userData.map((user)=>  
//         <div key={user.id}>
//           <p>{user.email}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// Import statements
'use client';
import { db } from './Firebase';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

// Function to fetch data from Firestore
async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const data = [];
  
  querySnapshot.forEach((doc) => {
    // Use doc.data() to get the document data
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

// React component
export default function Home() {
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
        {userData.map((user) => (
          <div key={user.id}>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
