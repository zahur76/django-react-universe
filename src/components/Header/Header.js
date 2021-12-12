import { React, useState, useEffect } from "react";
import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


function Header(props) {
    const[search, searchBar]=useState(true);
    const[admin, adminPage]=useState(true);

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Login
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(localStorage.getItem("login"));
    
    // flash messages
    const [flash, flashMessages] = useState(null)
    
    const handleSearchStatus = () => {
        {search ? searchBar(false) : searchBar(true)}
        props.onSearch(search)
    }
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value)              
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)                
    }
    
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        let data = {'username': username, 'password': password}       
        fetch("/universe/login", {method: 'POST', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify(data)}).then((res) => res.json())
        .then((data) => [localStorage.setItem("login", data.login), flashMessages(data.login)]).then(() => { 
            setLogin(localStorage.getItem("login"))
            {localStorage.getItem("login")==='false' ? flashMessages('Incorrect Username/password!') : flashMessages('Login Successful!')}
            setTimeout(() => {
                flashMessages(null)
            }, 3000);
        });
        setShow(false);                             
    }

    const handleLogout = (e) => {        
        e.preventDefault()               
        fetch("/universe/logout").then((res) => res.json())
        .then((data) => [localStorage.setItem("login", data.login)]).then(() => {            
            setLogin(localStorage.getItem("login"))
            {localStorage.getItem("login")==='false' ? flashMessages('Logged out!') : flashMessages(null)}
            setTimeout(() => {
                flashMessages(null)
            }, 3000);
        });                             
    }
    
    return (        
        <div className="Header">
            {flash ? <div className="text-light flash-messages">{flash}</div> : <div></div>}
            <Row className="text-center m-0">
                <Col className="logo" xs={2} md={2} lg={2}></Col>                               
                <Col className="h1 my-auto text-start header-text" xs={5} md={6} lg={6}>Our Universe</Col>                
                <Col className="text-light my-auto h6 text-end p-0 p-sm-2" xs={5} md={4} lg={4}>
                    {admin ?
                    <a  onClick={handleSearchStatus} className="p-2 text-light" href="#">
                        {search ? <i class="fas fa-search"></i> : <i class="fas fa-search-minus"></i>}
                    </a>
                    : <div></div>}                    
                    {login==='true' ? <a href="/admin" className="p-2"><i class="fas text-success fa-user"></i></a> : <a onClick={handleShow} className="text-light p-2" href="#"><i class="fas fa-user"></i></a>}
                    {login==='true' ? <div onClick={handleLogout} className="text-light admin p-2 btn"><i class="fas fa-sign-out-alt"></i></div> : <div></div>}
                </Col>            
            </Row>            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="m-0 p-2" closeButton>
                    <Modal.Title>Admin Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-75 mx-auto login-form" onSubmit={handleLoginSubmit}>     
                        <input className="col-12 m-1" username={username} onChange={handleUsernameChange}  type="text" placeholder="Username" required/>
                        <input className="col-12 m-1" password={password} onChange={handlePasswordChange} type="password" placeholder="Password" required/>             
                        <input className="col-12 btn submit-button text-light mt-2 border-light" type="submit" value="Submit" />  
                    </form>
                </Modal.Body>                
            </Modal>            
        </div>
        
    );
}

export default Header;
