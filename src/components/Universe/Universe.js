import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Universe() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/universe").then((res) => res.json())
        .then((data) => setData(data)).catch((error) => {
            console.log(error);
        });        
    }, [])

    const listRequest = (data || []).map((element)=>
            <Row key={element.id}>                
                <Col>{element.name}</Col>
                <Col>{element.age}</Col>
                <Col>{element.description}</Col>
                <Col>{element.galaxy__name}</Col>
                <Col>{element.system__name}</Col>
                <img src='/media/edge2.jpg' />
            </Row>
        )
    
    return (
        <div className="Planets">
            <h1>Universe</h1>
            {listRequest}            
        </div>
    );
    }

export default Universe;
