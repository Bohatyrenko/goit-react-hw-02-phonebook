import React from 'react';

const ContactForm = ({ input, optionsName, optionsTel }) => (
  <form>
    <label>
      Name
      <input
        value={input.name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder="Enter contact name"
        required
        onChange={optionsName}
      />
    </label>
    <label>
      Phone
      <input
        value={input.tel}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        placeholder="Enter contact phone"
        required
        onChange={optionsTel}
      />
    </label>
  </form>
);

export default ContactForm;
