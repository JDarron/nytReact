import React, {Component} from "react";
import "./Footer.css";

// FOOTER COMPONENT
class Footer extends Component {
    // RENDER
    render() {
        // RETURN
        return (
                <footer className="navbar-default navbar-fixed-bottom text-center">
                    <div className="container-fluid">
                        <span>
                            NYT Scrub-a-Dub | Joshua Spears-Phillips
                        </span>
                    </div>
                </footer>
        ); // END RETURN
    }; // END RENDER
}; // END NAVBAR

// EXPORT NAVBAR
export default Footer;