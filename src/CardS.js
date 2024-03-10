
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import fetchDataFromFirestore from './SellerData';
export function CardS({userDataItem}){
  // const [userData, setUserData] = useState([]);



  if(!userDataItem){
    return null
  }
  const websiteContent= 
  [
    {
      email: userDataItem.email,
      role: userDataItem.role,
      address:userDataItem.address,
      number:userDataItem.number
    }
  ];
  // document.write(websiteContent);
  // console.log('Final data array:', userData);
  
  // const websiteContent= 
  // userData.map((userDataItem) => (
  //             <>
  //             <CardC userDataItem={userDataItem} />
    
  //             </>))
  // console.log("h1");
  return(
    <div className="d-flex justify-content-around" style={{ overflowX: 'auto' }}>
    {websiteContent.map(item => (
      // <h1>{item.email}</h1>
     
      <Card key={item.email} style={{ width: '18rem' }} className='card1'>
        <Card.Body>
          <Card.Title>{item.email}</Card.Title>
          <Card.Text>{item.role}<br></br>
          {item.address}<br></br>
          {item.number}<br></br>
          </Card.Text>
          <Button variant="primary" className='button-31'>Go somewhere</Button>
        </Card.Body>
       
      </Card>
    ))}
  </div>
  );

}
export default CardS;




  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await fetchDataFromFirestore();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error('Error fetching data from Firestore:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  