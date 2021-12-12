import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

function Universe(props) {
    // Modal Galaxy
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (event) => {        
        console.log(event.target.name)
        fetch(`/universe/galaxy/${event.target.name}`).then((res) => res.json())
        .then((data) => [setGalaxy([data]), console.log(data), setShow(true)]).catch((error) => {
            console.log(error)       
        }); 
    }

    
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null);
    const [media, setMedia] = useState(null)
    const [planet, planetView] = useState(true)
    const [galaxy, setGalaxy] = useState(null);
    

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

    const handleChangeView = () => {
        {planet ? planetView(false) : planetView(true)}
    }

    const handlePlanetView = () => {
        if(planet){            
            return compactView
        }        
        return detailView
    }

    const compactView = (data || []).map((element)=>            
                <Col className="text-light mb-2" key={element.id} xs={12} sm={6} md={4} lg={3}>
                        <img src={media + element.image}/>
                        <div>                                        
                            <div className="h4 text-info">{element.name}</div>
                            <div className="text-light">{element.age} Billion Years</div>                            
                            <div className="text-light">{element.galaxy__name}</div>
                            <div className="text-light">{element.system__name}</div>
                        </div>                        
                </Col>         
        )    
    
    const detailView = (data || []).map((element)=>            
            <Col className="mt-2 text-light" key={element.id} xs={12}>
                    <Row className="mx-auto">
                        <img className="col-xs-12 col-sm-4 col-md-3 col-lg-3 planet-image" src={media + element.image}/>
                        <Col className="text-start mt-2 p-4 h6" xs={12} sm={8} md={9} lg={9}>                                        
                            <div className="bg-custom p-2"> 
                                <div className="h4 border-bottom border-info text-info">{element.name}: {element.nickname}</div>
                                <div className="p-1 text-light">Classification: {element.celestrial__name}</div>
                                <div className="p-1 text-light">Age: {element.age} Billion Years</div>
                                <div className="p-1 text-light">Surface: {element.surface_area} Million Km2</div>
                                <div className="p-1 description text-light">{element.description}</div>
                                <div className="p-1 text-light">Galaxy: <a onClick={handleShow} name={element.galaxy__name} className="milky-way border-bottom text-light btn">{element.galaxy__name}</a></div>
                                <div className="p-1 text-light">System: {element.system__name}</div>                            
                            </div>
                        </Col>
                    </Row>                        
            </Col>         
    )

    const GalaxyView = (galaxy || []).map((element)=>            
        <Row>
            <Col xs={12} className="h4 text-info text-center border-bottom border-info">{element.name}</Col>
            <Row className="m-0">
                <Col className="text-center" xs={12} sm={6}><img src={media + element.image}/></Col>       
                <Col xs={12} sm={6} className="text-light mt-3 p-0">
                    <div>Age: {element.age} Billion Years</div>
                    <div className="mt-1"> {element.description}</div>
                </Col>                            
            </Row>                       
        </Row>         
    )
     
    return (
        <div>
            {statusBar(props.searchStatus)}
            <div className="text-end">
                <div onClick={handleChangeView} className="text-white btn p-3">{planet ? <i class="fas fa-list"></i> : <i class="fas fa-th"></i>}</div>
            </div>
            <div className="Planets mt-2">
                <Row className="m-0 p-2">           
                    {handlePlanetView()}
                </Row>            
            </div>
            <Modal show={show} onHide={handleClose}>                
                <Modal.Body>
                    {GalaxyView}
                </Modal.Body>                   
            </Modal>
        </div>       
        
        );
    }

export default Universe;
