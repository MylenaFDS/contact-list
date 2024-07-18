import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [editingContact, setEditingContact] = useState<{ id: string; fullName: string; email: string; phone: string } | null>(null);

  const handleEdit = (contact: { id: string; fullName: string; email: string; phone: string }) => {
    setEditingContact(contact);
  };

  const handleSave = () => {
    setEditingContact(null);
  };

  return (
    <div>
      {editingContact ? (
        <ContactForm existingContact={editingContact} onSave={handleSave} />
      ) : (
        <ContactForm onSave={handleSave} />
      )}
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default ContactList;

