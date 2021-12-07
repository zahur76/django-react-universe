import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
    return (
        <div className="Header">
            <Row className="text-center m-0">
                <Col className="text-light my-auto h6" xs={0} md={2} lg={2}></Col>
                <Col className="text-light h1 my-auto" xs={8} md={8} lg={8}>Our Universe</Col>
                <Col className="text-light my-auto h6 text-end" xs={4} md={2} lg={2}>
                    <a className="p-3 text-light" href="#"><i class="fas fa-search"></i></a>
                    <a className="text-light p-2" href="#"><i class="fas fa-user"></i></a>
                </Col>
            </Row>
        </div>
    );
}

export default App;
