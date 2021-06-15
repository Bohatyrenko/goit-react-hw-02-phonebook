import React, { Component } from 'react';

//Components
import ContactForm from './components/ContactForm/ContactForm';

class App extends Component {
  state = {
    inputValue: '',
    name: '',
    tel: '',
  };

  handelNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handelTelChange = event => {
    this.setState({ tel: event.currentTarget.value });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          input={this.state}
          optionsName={this.handelNameChange}
          optionsTel={this.handelTelChange}
        />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </>
    );
  }
}

export default App;
