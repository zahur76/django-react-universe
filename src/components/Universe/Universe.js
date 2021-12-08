import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Universe(props) {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null);
    const [media, setMedia] = useState(null)

    
    const statusBar = (status) => {
                console.log(status)
                return <div>
                        {status ? <div className="search-bar w-75">
                            <form>     
                                <input className="input-bar col-12 m-1" type="text" placeholder="Search planet" required/>
                            </form></div> : <div></div>}
                         </div>
    }

    useEffect(() => {
        process.env.NODE_ENV==='development' ? setMedia('media/') : setMedia('https://django-react-universe.s3.amazonaws.com/static/') 
    }, [])
    
    useEffect(() => {
        fetch("/universe").then((res) => res.json())
        .then((data) => [setData(data), setSearch(data)]).catch((error) => {
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
        <div>
            {statusBar(props.searchStatus)}
            <div className="Planets mt-5">           
                {listRequest}            
            </div>
        </div>
    );
    }

export default Universe;
