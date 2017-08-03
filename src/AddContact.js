import React, { Component } from "react";
import { addContact } from "./reducer";
import { connect } from "react-redux";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleAddContact() {
    const name = window.prompt("What's the name");
    const email = name + "@gmail.com";
    const id = Date.now();
    this.props.addContact({ id, name, email });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAddContact}>Add Contact</button>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
