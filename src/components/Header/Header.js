import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
    return (
        <div className="Header">
            <Row className="text-center m-0">
                <Col className="text-light my-auto h6" xs={0} md={2} lg={2}></Col>
                <Col className="text-light h1 my-auto" xs={8} md={8} lg={8}>Header</Col>
                <Col className="text-light my-auto h6 text-end" xs={4} md={2} lg={2}><a className="p-3 text-light" href="#">O</a><a className="text-light" href="#">login</a></Col>
            </Row>
        </div>
    );
}

export default App;
