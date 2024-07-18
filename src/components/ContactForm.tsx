import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact, editContact } from '../store/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

interface ContactFormProps {
  existingContact?: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  };
  onSave: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ existingContact, onSave }) => {
  const [contact, setContact] = useState(existingContact || { id: '', fullName: '', email: '', phone: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (existingContact) {
      setContact(existingContact);
    }
  }, [existingContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.id) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact({ ...contact, id: uuidv4() }));
    }
    onSave();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="fullName" value={contact.fullName} onChange={handleChange} placeholder="Nome Completo" required />
      <Input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="E-mail" required />
      <Input type="tel" name="phone" value={contact.phone} onChange={handleChange} placeholder="Telefone" required />
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default ContactForm;
