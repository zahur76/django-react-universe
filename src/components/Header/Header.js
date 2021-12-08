import { React, useState, useEffect} from "react";
import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";

function Header(props) {
    const[search, searchBar]=useState(true);

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSearchStatus = () => {
        {search ? searchBar(false) : searchBar(true)}
        props.onSearch(search)
    }   

    return (
        <div className="Header">
            <Row className="text-center m-0">
            <Col className="logo" xs={2} md={2} lg={2}></Col>                               
            <Col className="h1 my-auto text-start header-text" xs={5} md={6} lg={6}>Our Universe</Col>                
            <Col className="text-light my-auto h6 text-end" xs={5} md={4} lg={4}>
                <a  onClick={handleSearchStatus} className="p-3 text-light" href="#">
                    {search ? <i class="fas fa-search"></i> : <i class="fas fa-search-minus"></i> }
                </a>
                <a onClick={handleShow} className="text-light p-2" href="#"><i class="fas fa-user"></i></a>
            </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-75 mx-auto login-form">     
                        <input className="col-12 m-1" type="text" placeholder="Username" required/>
                        <input className="col-12 m-1" type="password" placeholder="Password" required/>             
                    </form>
                </Modal.Body>
                <Modal.Footer>                    
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>            
        </div>
        
    );
}

export default Header;
