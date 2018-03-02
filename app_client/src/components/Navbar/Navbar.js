import React, {Component} from "react";
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
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                            <span className="sr-only">
                                Toggle navigation
                            </span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">
                            NYT Scrub-a-Dub
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li >
                                <a href="/saved">
                                        Archive
                                    <span className="sr-only">
                                        (current)
                                    </span>
                                </a>
                            </li>
                        </ul>
                        {/* <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Link</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">Dropdown
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul> */}
                    </div>
                </div>
            </nav>
        ); // END RETURN
    }; // END RENDER
}; // END NAVBAR

// EXPORT NAVBAR
export default Navbar;