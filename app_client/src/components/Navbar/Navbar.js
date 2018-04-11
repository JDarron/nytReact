import React, { Component } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// NAVBAR STYLES
import "./Navbar.css";

// NAVBAR COMPONENT
class NavbarComponent extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <Navbar inverse collapseOnSelect className="navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">NYT Scrub</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="/archive">
                            Archive
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ); // END RETURN
    }; // END RENDER
}; // END NAVBAR

// EXPORT NAVBAR
export default NavbarComponent;