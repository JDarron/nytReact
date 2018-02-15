import React, { Component } from "react";
// COMPONENTS
// import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
// import Content from "./components/Content";
// import Inputs from "./components/Inputs";

class App extends Component {
  render() {
    return (
      <div>
        {/* SEARCH BUTTON */}
      <Button
        type= "search"
        name="Search"
      />
      {/* SAVE BUTTON */}
      <Button
        type= "save"
        name="Save"
      /> 
      {/* REMOVE BUTTON */}
      <Button
        type= "remove"
        name="Remove"
      />  

      </div>
    );
  }
};

export default App;
