import React, { Component } from 'react';
import "./navbar.style.css";

// bootstrap
import { ListGroup } from 'react-bootstrap';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navigation-bar  border border-right border-dark">
                <div>
                    <img src="https://www.lse.ac.uk/finance/assets/images/profile-images/Peng2-Cropped-200x200-Profile.jpg" alt="Profiles picture"/>
                </div>
                
                <ListGroup as="ul">
                    
                    <ListGroup.Item as="li" active>Home</ListGroup.Item>
                    <ListGroup.Item as="li">About</ListGroup.Item>
                    <ListGroup.Item as="li">Resume</ListGroup.Item>
                    <ListGroup.Item as="li">Portfolios</ListGroup.Item>
                    <ListGroup.Item as="li">Blogs</ListGroup.Item>
                    <ListGroup.Item as="li">Contact</ListGroup.Item>
                </ListGroup>
            </div>
         );
    }
}
 
export default NavBar;