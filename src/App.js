import './App.css';
import NavBar from './components/nav/navbar.component';

// bootstrap
import { Row, Col } from 'react-bootstrap'


function App() {
  return (
    <div>
        <Row>
          <Col xs={3} className="p-0">
            <NavBar></NavBar>
          </Col>
          
          <Col className="p-0">
            <div className="main-container">
              <h1>Main container</h1>
            </div>
          </Col>

        </Row>

    </div>
  );
}

export default App;
