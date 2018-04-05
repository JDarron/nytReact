import React, { Component } from "react";
// NAVBAR STYLES
import "./Navbar.css";

// NAVBAR COMPONENT
class Navbar extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            NYT Scrub-a-Dub
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/" className="nav-home">
                                    Home
                                </a>
                            </li>
                            <li >
                                <a href="/archive">
                                    Archive
                                    <span className="sr-only">
                                        (current)
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); // END RETURN
    }; // END RENDER
}; // END NAVBAR

// EXPORT NAVBAR
export default Navbar;