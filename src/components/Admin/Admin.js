import { React, useState } from "react";
import { Navigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Admin.css'

function Admin() {
  console.log(localStorage.getItem("login"))
  const[admin, adminPage]=useState(true); 

  return (
    <div className="Admin">
      {localStorage.getItem("login")==='false' ? <Navigate to='/' /> : console.log('zahur')}
      <Row>
        <Col xs={0} md={3}><h1></h1></Col>
        <Col xs={9} md={6} className="text-light"><h1>Admin</h1></Col>
        <Col className='my-auto text-end' xs={3}>
          <a href="/" className="text-light p-2"><i class="fas fa-home"></i></a>
          <a href="/admin" className="p-2"><i class="fas text-success fa-user"></i></a> 
        </Col>
      </Row>
    </div>
    
  );
}

export default Admin;
