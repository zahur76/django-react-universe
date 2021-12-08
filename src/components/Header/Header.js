import { React, useState, useEffect} from "react";
import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header(props) {
    const[search, searchBar]=useState(true);

    const handleSearchStatus = () => {
        {search ? searchBar(false) : searchBar(true)}
        props.onSearch(search)
    }   

    return (
        <div className="Header">
            <Row className="text-center m-0">
            <Col className="logo" xs={2} md={2} lg={2}></Col>                               
                <Col className="h1 my-auto text-start header-text" xs={6} md={6} lg={6}>Our Universe</Col>                
                <Col className="text-light my-auto h6 text-end" xs={4} md={4} lg={4}>
                    <a  onClick={handleSearchStatus} className="p-3 text-light" href="#"><i class="fas fa-search"></i></a>
                    <a className="text-light p-2" href="#"><i class="fas fa-user"></i></a>
                </Col>
            </Row>            
        </div>
    );
}

export default Header;
