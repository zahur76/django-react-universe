import { React, useState, useEffect } from "react";
import './Universe.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Universe(props) {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null);
    const [media, setMedia] = useState(null)
    const [planet, planetView] = useState(true)

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
                        <div className="text-info">                                        
                            <div className="h4">{element.name}</div>
                            <div>{element.age} Billion Years</div>                            
                            <div>{element.galaxy__name}</div>
                            <div>{element.system__name}</div>
                        </div>                        
                </Col>         
        )
    
    const detailView = (data || []).map((element)=>            
            <Col className="mt-2 text-light" key={element.id} xs={12}>
                    <Row className="mx-auto">
                        <img className="col-xs-12 col-sm-4 col-md-3 col-lg-3 planet-image" src={media + element.image}/>
                        <Col className="text-start mt-2 p-4 text-info h6" xs={12} sm={8} md={9} lg={9}>                                        
                            <div className="h4 border-bottom border-info">{element.name}: {element.nickname}</div>
                            <div className="p-1">Age: {element.age} Billion Years</div>
                            <div className="p-1">Surface: {element.surface_area} Million Km2</div>
                            <div className="p-1 description">{element.description}</div>
                            <div className="p-1">Galaxy: <a href="#" className="milky-way border-bottom border-info text-info">{element.galaxy__name}</a></div>
                            <div className="p-1">System: {element.system__name}</div>                            
                        </Col>
                    </Row>                        
            </Col>         
    )
    
    return (
        <div>
            {statusBar(props.searchStatus)}
            <Col onClick={handleChangeView} xs={12} className="text-white text-end btn">{planet ? <i class="fas fa-list"></i> : <i class="fas fa-th"></i>}</Col>
            <div className="Planets mt-2">
                <Row className="m-0 p-2">           
                    {handlePlanetView()}
                </Row>            
            </div>
        </div>
    );
    }

export default Universe;
