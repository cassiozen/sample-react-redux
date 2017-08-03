import React, { Component } from "react";
import { connect } from "react-redux";

class ListContacts extends Component {
  render() {
    return (
      <div>
        <h1>Contacts:</h1>
        <ul>
          {this.props.contacts.map(contact =>
            <li key={contact.name}>
              {contact.name}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ contacts: state.contacts });

export default connect(mapStateToProps)(ListContacts);
