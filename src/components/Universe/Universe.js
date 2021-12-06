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

    const listRequest = () => {
        (data || []).map(element=>{
            <Row key={element.id}>
                <Col>{element.name}</Col>
                <Col>{element.age}</Col>
                <Col>{element.constellation}</Col>
                <Col>{element.image}</Col>
            </Row>
        })
    }
    return (
        <div className="Header">
            <h1>Universe</h1>
            {listRequest}
        </div>
    );
    }

export default Universe;
