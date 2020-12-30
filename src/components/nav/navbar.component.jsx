import React, { Component } from 'react';
import "./navbar.style.css";
import { Link,BrowserRouter as Router } from 'react-router-dom';

// bootstrap
import { ListGroup } from 'react-bootstrap';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navigation-bar  border border-right border-dark">
                <div className="m-3">
                    <img src="https://www.lse.ac.uk/finance/assets/images/profile-images/Peng2-Cropped-200x200-Profile.jpg" alt="Profiles picture"/>
                </div>
                
                
                <ListGroup as="ul" className="list-group" >
                        
                    <Link to="/"><ListGroup.Item  variant="dark"  as="li" active>Home</ListGroup.Item></Link>
                    <Link to="/about"><ListGroup.Item   variant="dark"  as="li">About</ListGroup.Item></Link>
                    <Link to="/resume"><ListGroup.Item  variant="dark" as="li">Resume</ListGroup.Item></Link>
                    <Link to="/portfolios"><ListGroup.Item  variant="dark" as="li">Portfolios</ListGroup.Item></Link>
                    <Link to="/blogs"><ListGroup.Item  variant="dark" as="li">Blogs</ListGroup.Item></Link>
                    <Link to="/contact"><ListGroup.Item  variant="dark" as="li">Contact</ListGroup.Item></Link>
                    
                </ListGroup>
                

                <div className="nav-bottom">
                    <p>© 2020 <b>Salyhal Themes</b></p>
                </div>

            </div>
         );
    }
}
 
export default NavBar;