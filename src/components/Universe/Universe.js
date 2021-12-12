import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import FadeIn from 'react-fade-in'

function Universe(props) {
    // Modal Galaxy
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        const galaxyQuery = () => fetch(`/universe/galaxy/${event.target.name}`).then((res) => res.json())
        .then((data) => [setGalaxy([data]), console.log(data), setShow(true)]).catch((error) => {
            console.log(error)       
        });
        const systemQuery = () => fetch(`/universe/system/${event.target.name}`).then((res) => res.json())
        .then((data) => [setGalaxy([data]), console.log(data), setShow(true)]).catch((error) => {
            console.log(error)       
        });        
        console.log(event.target.name)
        let category = event.target.id
        {category==='galaxy' ? galaxyQuery() : systemQuery()}
    }
    
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null);
    const [media, setMedia] = useState(null)
    const [planet, planetView] = useState(true)
    const [galaxy, setGalaxy] = useState(null);
    const [allActive, setAllActive] = useState(true);
    const [planetActive, setPlanetActive] = useState(false);
    const [starActive, setStarActive] = useState(false);
    const [cometActive, setCometActive] = useState(false);
    const [AsteroidActive, setAsteroidActive] = useState(false);
    const [celestrial, setCelestrial] = useState('all')

    const handleAllActive = () => {
        handleClassification('all')
        setAsteroidActive(false)
        setCometActive(false)
        setAllActive(true)
        setPlanetActive(false)
        setStarActive(false)
    }

    const handlePlanetActive = () => {
        handleClassification('planet')
        setAsteroidActive(false)
        setCometActive(false)
        setAllActive(false)
        setPlanetActive(true)
        setStarActive(false)
    }

    const handleStarActive = () => {
        handleClassification('star')
        setAsteroidActive(false)
        setCometActive(false)
        setStarActive(true)
        setAllActive(false)
        setPlanetActive(false)
    }

    const handleCometActive = () => {
        handleClassification('comet')
        setAsteroidActive(false)
        setCometActive(true)
        setStarActive(false)
        setAllActive(false)
        setPlanetActive(false)
    }

    const handleAsteroidActive = () => {
        handleClassification('asteroid')
        setAsteroidActive(true)
        setCometActive(false)
        setStarActive(false)
        setAllActive(false)
        setPlanetActive(false)
    }
    
    const handleClassification  = (name) => {
        setCelestrial(name)
        let allItems  = search            
        let newList = []    
        allItems.map(element=>{        
            if(((element.celestrial__name).toLowerCase()).includes(name.toLowerCase())){
                newList.push(element)                   
            }                                                 
        })
        {name==='all' ? setData(search): setData(newList)}
    }

    const handleSearchTerm = (event) => {
        console.log(celestrial)
        let allItems  = search        
        let term = event.target.value        
        let newList = []          
        const allPlanets = () => {allItems.map(element=>{        
                if(((element.name).toLowerCase()).includes(term.toLowerCase())){
                    newList.push(element)                   
                }                                                 
            })
        setData(newList)
        }
        const selectedPlanets = () => {allItems.map(element=>{        
                if(((element.name).toLowerCase()).includes(term.toLowerCase()) && ((element.celestrial__name===celestrial))){
                    newList.push(element)                   
                }                                                 
            })
        setData(newList)
        }
        {celestrial==='all' ? allPlanets() : selectedPlanets() }  
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
        process.env.NODE_ENV==='development' ? setMedia('media/') : setMedia('https://django-react-universe.s3.amazonaws.com/') 
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
                            <FadeIn delay={500}>                       
                                <img src={media + element.image}/>
                            </FadeIn> 
                            <FadeIn delay={1000}>
                                <div>                                        
                                    <div className="h4 text-info">{element.name}</div>
                                    <div className="text-light">{element.age} Billion Years</div>                            
                                    <div className="text-light">{element.galaxy__name}</div>
                                    <div className="text-light">{element.system__name}</div>
                                </div>
                            </FadeIn>                    
                    </Col>                 
        )    
    
    const detailView = (data || []).map((element)=>
            <FadeIn delay={600}>             
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
                                    <div className="p-1">Galaxy: <a onClick={handleShow} name={element.galaxy__name} id="galaxy" className="milky-way border-bottom p-1 text-light btn">{element.galaxy__name}</a></div>
                                    <div className="p-1">System: <a onClick={handleShow} name={element.system__name} id="system" className="milky-way border-bottom p-1 text-light btn">{element.system__name}</a></div>                            
                                </div>
                            </Col>                                                
                    </Row>                                           
                </Col>
            </FadeIn>         
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
            <Row className="text-center m-0">
                <Col xs={9} md={10} className="text-ligh text-start">
                    {allActive ? <div className="text-light btn celesterial-links border-bottom">All</div> : <div onClick={handleAllActive} className="text-light btn celesterial-links">All</div>}
                    {planetActive ? <div className="text-light btn celesterial-links border-bottom">Planets</div> : <div onClick={handlePlanetActive} className="text-light btn celesterial-links">Planets</div>}
                    {starActive ? <div className="text-light btn celesterial-links border-bottom">Stars</div> : <div onClick={handleStarActive}  className="text-light btn celesterial-links">Stars</div>}
                    {cometActive ? <div className="text-light btn celesterial-links border-bottom">Comets</div> : <div onClick={handleCometActive} className="text-light btn celesterial-links">Comets</div>}
                    {AsteroidActive ? <div className="text-light btn celesterial-links border-bottom">Asteroids</div> : <div onClick={handleAsteroidActive} className="text-light btn celesterial-links">Asteroids</div>}
                </Col>
                <Col xs={3} md={2} onClick={handleChangeView} className="p-2 pt-0 text-end">{planet ? <i class="text-white fas fa-list btn"></i> : <i class="text-white fas fa-th btn"></i>}</Col>
            </Row>            
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
