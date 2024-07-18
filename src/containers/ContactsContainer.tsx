import React from 'react';
import ContactList from '../components/ContactList';

const ContactsContainer: React.FC = () => {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactList />
    </div>
  );
};

export default ContactsContainer;
