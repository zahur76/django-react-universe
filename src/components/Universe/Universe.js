import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Universe(props) {
    const [data, setData] = useState(null);
    const [media, setMedia] = useState(null)
    const[term, searchTerm]=useState(props.newTerm);


    console.log(props.newTerm)

    useEffect(() => {
        process.env.NODE_ENV==='development' ? setMedia('media/') : setMedia('https://django-react-universe.s3.amazonaws.com/static/') 
    }, [])
    
    useEffect(() => {
        fetch("/universe").then((res) => res.json())
        .then((data) => setData(data)).catch((error) => {
            console.log(error);
        });        
    }, [])

    const listRequest = (data || []).map((element)=>
            <Row className="m-0 text-light" key={element.id}>                
                <Col>{element.name}</Col>
                <Col>{element.age}</Col>
                <Col>{element.description}</Col>
                <Col>{element.galaxy__name}</Col>
                <Col>{element.system__name}</Col>
                <img src={media + element.image}/>
            </Row>
        )
    
    return (
        <div className="Planets mt-5">            
            {listRequest}            
        </div>
    );
    }

export default Universe;
