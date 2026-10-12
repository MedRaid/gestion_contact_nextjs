"use client";

import { use } from "react";
import { ContactContext } from "../context/contactsContext";
import { Contact } from "../types/contact.model";
import { useRouter } from "next/navigation";

type Props = {
  contact: Contact;
};

const ContactCardActions = ({ contact }: Props) => {
  const router = useRouter();

  const { contacts, setContact } = use(ContactContext);
  const handleNavigate = () => {
    router.push(`/contacts/${contact.id}`);
  };

  const handleDeleteContact = () => {
    if (confirm("Etes vous sur de supprimer")) {
      const newContacts = contacts.filter((c) => c.id !== contact.id);
      setContact(newContacts);
    }
  };

  return (
    <div className="flex between">
      <button className="btn btn-netral" onClick={handleNavigate}>
        Voir
      </button>
      <button className="btn-danger" onClick={handleDeleteContact}>
        Supprimer
      </button>
    </div>
  );
};

export default ContactCardActions;
