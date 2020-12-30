import './App.css';
import NavBar from './components/Nav/Navbar.component';
import {BrowserRouter as Router, Route} from "react-router-dom";

// bootstrap
import { Row, Col } from 'react-bootstrap'


// Components
import Home from "./components/Home/Home.component"
import About from "./components/About/About.component"
import Blogs from "./components/Blogs/Blogs.component"
import Portfolios from "./components/Portfolios/Portfolios.component"
import Resume from "./components/Resume/Resume.component"
import Contact from "./components/Contact/Contact.component"

function App() {
  return (
    <Router>
      <div>
          <Row>
            <Col xs={3} className="p-0">
              <NavBar></NavBar>
            </Col>
            
            <Col className="p-0">
                <Route path='/' exact component={Home}/>
                <Route path='/about'  component={About}/>
                <Route path='/blogs'  component={Blogs}/>
                <Route path='/portfolios'  component={Portfolios}/>
                <Route path='/resume'  component={Resume}/>
                <Route path='/contact'  component={Contact}/>
            </Col>

          </Row>

      </div>
    </Router>
  );
}

export default App;
