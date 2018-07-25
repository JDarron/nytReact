import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


// HOME PAGE
import Home from "./pages/home/Home";
// ARTICLE PAGE
import Archive from "./pages/archive/Archive";

import './App.css';

// APP COMPONENT
/*
<Router>
          <div>
            }
<Navbar />
 
<Route exact path="/" component={Home} />
 
<Route exact path="/archive" component={Archive} />
 }
          </div >
        </Router >
*/
class App extends Component {

  render() {

    return (
      // ROUTES TO PAGES
      <div>
        hello
      </div>
    ); // END RETURN 
  };  // END RENDER 
};  // END APP COMPONENT 

export default App;
