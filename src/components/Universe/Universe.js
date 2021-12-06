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
            <Row key={element.fields.id}>
                <Col>{element.fields.name}</Col>
                <Col>{element.fields.age}</Col>
                <Col>{element.fields.constellation}</Col>
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
