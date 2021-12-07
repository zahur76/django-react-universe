import { React, useState, useEffect} from "react";
import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
    const[search, SearchBar]=useState(true);

    const handleSearchBar = () => {
        {search ? SearchBar(false) : SearchBar(true)}
    }

    return (
        <div className="Header">
            <Row className="text-center m-0">
            <Col className="logo" xs={2} md={2} lg={2}></Col>                               
                <Col className="h1 my-auto text-start header-text" xs={6} md={6} lg={6}>Our Universe</Col>                
                <Col className="text-light my-auto h6 text-end" xs={4} md={4} lg={4}>
                    <a  onClick={handleSearchBar} className="p-3 text-light" href="#"><i class="fas fa-search"></i></a>
                    <a className="text-light p-2" href="#"><i class="fas fa-user"></i></a>
                </Col>
            </Row>
            {search ? <div className="search-bar w-75">
                        <form>     
                            <input className="input-bar col-12 m-1" type="text" placeholder="Search planet" required/>
                        </form></div> : <div></div>}
        </div>
    );
}

export default Header;
