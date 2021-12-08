import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Universe(props) {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null);
    const [media, setMedia] = useState(null)


    const handleSearchTerm = (event) => {
        let allItems  = search        
        let term = event.target.value        
        let newList = []    
        allItems.map(element=>{        
            if(((element.name).toLowerCase()).includes(term.toLowerCase())){
                newList.push(element)          
                           
            }                                                 
        })
        setData(newList)
    }

    const statusBar = (status) => {
                console.log(status)
                return <div>
                        {status ? <div className="search-bar w-75">
                            <form>     
                                <input onChange={handleSearchTerm} className="input-bar col-12 m-1" type="text" placeholder="Search planet" required/>
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
                <Col className="m-0 text-light" key={element.id} xs={6} md={4} lg={3}>
                        <img src={media + element.image}/>                                        
                        <div>{element.name}</div>
                        <div>{element.age}</div>
                        <div>{element.description}</div>
                        <div>{element.galaxy__name}</div>
                        <div>{element.system__name}</div>                        
                </Col>         
        )
    
    return (
        <div>
            {statusBar(props.searchStatus)}
            <Col xs={12} className="text-white">list</Col>
            <div className="Planets mt-5">
                <Row className="m-0">           
                    {listRequest}
                </Row>            
            </div>
        </div>
    );
    }

export default Universe;
