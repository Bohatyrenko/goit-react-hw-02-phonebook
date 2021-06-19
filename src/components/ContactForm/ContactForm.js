import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  reset = () => {
    this.setState({ name: '', tel: '' });
  };

  render() {
    return (
      <form style={{ display: 'grid' }} onSubmit={this.handleSubmit}>
        <label style={{ marginBottom: '10px' }}>
          Name
          <input
            value={this.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter contact name"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone
          <input
            value={this.tel}
            type="tel"
            name="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Enter contact phone"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" style={{ width: '300px' }}>
          Отправить
        </button>
      </form>
    );
  }
}

// const ContactForm = ({ input, options }) => (
//   <form style={{ display: 'grid' }} onSubmit={options.handleSubmit}>
//     <label style={{ marginBottom: '10px' }}>
//       Name
//       <input
//         value={input.name}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         placeholder="Enter contact name"
//         required
//         onChange={options.handleChange}
//       />
//     </label>
//     <label>
//       Phone
//       <input
//         value={input.tel}
//         type="tel"
//         name="tel"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//         placeholder="Enter contact phone"
//         required
//         onChange={options.handleChange}
//       />
//     </label>
//     <button type="submit">Отправить</button>
//   </form>
// );

export default ContactForm;
