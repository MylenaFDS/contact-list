import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../store/contactsSlice';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Info = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

interface ContactItemProps {
  contact: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  };
  onEdit: (contact: { id: string; fullName: string; email: string; phone: string }) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <Item>
      <Info>
        <div>{contact.fullName}</div>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
      </Info>
      <Button onClick={handleRemove}>Remover</Button>
      <Button onClick={() => onEdit(contact)}>Editar</Button>
    </Item>
  );
};

export default ContactItem;
