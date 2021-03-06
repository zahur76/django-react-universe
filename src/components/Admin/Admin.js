import { React, useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import './Admin.css'


function Admin() {
  const [media, setMedia] = useState(null)
  const [data, setData] = useState(null);

  // Modal Add Planet
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => [setShow(true), updateModal(false)];
  //Update delete buttons
  const [modal, setModal] = useState(false);

  //Update buttons
  const [update, updateModal] = useState(false);

  // Add  Planet form
  const [planetName, setPlanetName] = useState(null);
  const [planetNickname, setPlanetNickname] = useState(null);
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [age, setAge] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [galaxy, setGalaxy] = useState(null);
  const [system, setSystem] = useState(null);
  const [celestrial, setcelestrial] = useState(null);
  const [constellation, setConstellation] = useState(null);

  useEffect(() => {
      process.env.NODE_ENV==='development' ? setMedia('media/') : setMedia('https://django-react-universe.s3.amazonaws.com/media/')
  }, [])

  useEffect(() => {
      fetch("/universe").then((res) => res.json())
      .then((data) => setData(data)).catch((error) => {
          console.log(error);
      });
  }, [])

  const handleModal = () => {
    {modal ? setModal(false) : setModal(true)}
  }

  const handleDeletion = (event) => {
      let URL = `/universe/delete_planet/${event.target.name}`
      fetch(URL).then((res) => {
        window.location.reload();
    });
  }

  const handleUpdate = (event) => {
    console.log(event.target.name)
  }

  const PlanetView = (data || []).map((element)=>
    <Col className="text-light mb-2" key={element.id} xs={6} sm={3} lg={2}>
      <a onClick={handleModal} href="#" className="image"><img src={media + element.image}/></a>
      {modal ? <div><a href="#" onClick={handleDeletion} name={element.id} className="update text-danger btn border-light bg-update">Delete</a><br></br>
        <a onClick={handleUpdate} name={element.id} href="#" className="update text-info btn border-light p-2 m-1 bg-update">Update</a>
        </div> : <div></div>}
    </Col>
  )

  const handlePlanetNameChange = (event) => {
    setPlanetName(event.target.value)
  }

  const handlePlanetNicknameChange = (event) => {
    setPlanetNickname(event.target.value)
  }

  const handleSurfaceAreaChange = (event) => {
    setSurfaceArea(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleImageChange = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    setImage(file);
  }

  const handleGalaxyChange = (event) => {
    setGalaxy(event.target.value)
  }


  const handleSystemChange = (event) => {
    setSystem(event.target.value)
  }

  const handleCelestrialChange = (event) => {
    setcelestrial(event.target.value)
  }

  const handleConstellationChange = (event) => {
    setConstellation(event.target.value)
  }


  const handlePlanetSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append('galaxy', galaxy)
    formData.append('system', system)
    formData.append('celestrial', celestrial)
    formData.append('name', planetName)
    formData.append('constellation', constellation)
    formData.append('nickname', planetNickname)
    formData.append('surface_area', surfaceArea)
    formData.append('age', age)
    formData.append('description', description)
    formData.append('image', image)

    fetch("/universe/add_planet", {method: 'POST', "Content-Type": "multipart/form-data", body: formData}).then((res) => {
        window.location.reload();
        setShow(false)
    });
  }

  return (
    <div className="Admin">
      {localStorage.getItem("login")==='false' ? <Navigate to='/' /> : console.log('')}
      <Row className="m-0">
        <Col xs={0} md={3}><h1></h1></Col>
        <Col xs={8} md={6} className="text-light"><h1>Admin</h1></Col>
        <Col xs={4} md={3}className='my-auto text-end'>
          <a href="/" className="text-light p-2"><i class="fas fa-home"></i></a>
          <a href="/admin" className="p-2"><i class="fas text-success fa-user"></i></a>
        </Col>
      </Row>
      <div onClick={handleShow} className="btn btn-dark w-50 mt-3 text-light border-light my-auto">Add Celestrial Body <i class="fas fa-globe-americas"></i></div>
      <Row className="mt-2 m-0">
        {PlanetView}
      </Row>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header className="m-0 p-2">
              <Modal.Title>Add Planet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form className="w-75 mx-auto login-form" onSubmit={handlePlanetSubmit}>
                  <Form.Select aria-label="Default select example" name="galaxy" value={galaxy} onChange={handleGalaxyChange}>
                    <option value="0">Choose Galaxy</option>
                    <option value="1">Milky Way</option>
                    <option value="3">Unknown</option>
                    <option value="4">N/A</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example" name="system" value={system} onChange={handleSystemChange} required>
                    <option value="0">Choose Systen</option>
                    <option value="1">Solar System</option>
                    <option value="2">Trappist-1 System</option>
                    <option value="2">kepler186 System</option>
                    <option value="3">Unknown</option>
                    <option value="4">N/A</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example" name="celestrial" value={celestrial} onChange={handleCelestrialChange} required>
                    <option value="0">Celestrial Body</option>
                    <option value="1">Planet</option>
                    <option value="2">Star</option>
                    <option value="3">Comet</option>
                    <option value="4">Asteroid</option>
                  </Form.Select>
                  <Form.Control type="text" name="name" placeholder="Name"  value={planetName} onChange={handlePlanetNameChange} required/>
                  <Form.Control type="text" name="nickname" placeholder="Nickname" value={planetNickname} onChange={handlePlanetNicknameChange} required/>
                  <Form.Control type="text" name="constellation" placeholder="Constellation"  value={constellation} onChange={handleConstellationChange} required/>
                  <Form.Control type="number" name="surface" placeholder="Surface Area" value={surfaceArea} onChange={handleSurfaceAreaChange} required/>
                  <Form.Control type="text" name="age" placeholder="Age" value={age} onChange={handleAgeChange} required/>
                  <Form.Control type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange} required/>
                  <Form.Control name="image" type="file" multiple onChange={handleImageChange} required/>
                  <input className="col-12 btn submit-button text-light mt-2 border-light" type="submit" value="Submit" />
              </form>
          </Modal.Body>
      </Modal>
    </div>
  );
}

export default Admin;
