import React, { Component } from 'react';

//Components
import ContactForm from './components/ContactForm/ContactForm';

class App extends Component {
  state = {
    inputValue: '',
    // name: '',
    // tel: '',
  };

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state);
  // };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTelChange = event => {
  //   this.setState({ tel: event.currentTarget.value });
  // };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          // input={this.state}
          // options={this}
          // optionsTel={this.handleTelChange}
        />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </>
    );
  }
}

export default App;
