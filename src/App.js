import React, { Component } from "react";
import AddContact from "./AddContact";
import ListContacts from "./ListContacts";
import "./App.css";

class App extends Component {
  x3;
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AddContact />
        </div>
        <ListContacts name="whatever" />
      </div>
    );
  }
}

export default App;
