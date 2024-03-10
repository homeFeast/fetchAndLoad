import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Random from './Random';
import CardC from "./CardC"
import SellerData from "./SellerData"


export function Seller() {
  //{userDataItem}
  // console.log(typeof userDataItem);
  const [searchQuery, setSearchQuery] = useState('');

  
  // Dummy data representing different sections of the website
  // const websiteContent= 
  // [
  //   {
  //     title: userDataItem.email,
  //     content: userDataItem.role,
  //     address:userDataItem.address,
  //     number:userDataItem.number
  //   }
  // ];

  // Filter content based on search query
  // const filteredContent = websiteContent.filter(item =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   item.content.toLowerCase().includes(searchQuery.toLowerCase())||
  //   item.address.toLowerCase().includes(searchQuery.toLowerCase())||
  //   item.number.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const properties = Object.keys(userDataItem);

  // // Filter content based on search query using userDataItem
  // const filteredContent = properties.map(property => ({
  //   title: property,
  //   content:userDataItem[property]
  // })).filter(item =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   item.content.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary topnav">
        <Container fluid>
          <Navbar.Brand href="#">Home Feast</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <a href=''><box-icon name='user' type='solid' color='#111'></box-icon></a>
        </Container>
      </Navbar>

      <div className="sidebar">
        <div className="left">
          <header id="header">
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <a href=''>Order Details</a>
                <a href=''>Navigation</a>
                <a href=''>Take a Break</a>
                <a href=''>Customer Details</a>
              </ul>
            </nav>
          </header>
        </div>
      </div>

      <div className="right">
        <br /><br />
        <SellerData />
        {/* <div className="d-flex justify-content-around" style={{ overflowX: 'auto' }}> */}
          {/* {filteredContent.map(item => (
            <Card key={item.title} style={{ width: '18rem' }} className='card1'>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}<br></br>
                {item.address}<br></br>
                {item.number}<br></br>
                </Card.Text>
                <Button variant="primary" className='button-31'>Go somewhere</Button>
              </Card.Body>
             
            </Card>
          ))} */}
        {/* </div> */}

        <div className='Rand'>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
export default Seller;

