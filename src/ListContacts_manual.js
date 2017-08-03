import React, { Component } from "react";
import store from "./store";

class ListContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: store.getState().contacts
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ contacts: store.getState().contacts });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>Contacts:</h1>
        <ul>
          {this.state.contacts.map(contact =>
            <li key={contact.name}>
              {contact.name}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListContacts;
