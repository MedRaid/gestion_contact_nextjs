"use client";
import { use } from "react";
import ContactCard from "../(contacts)/contactCard";
import { ContactContext } from "../context/contactsContext";

function ContactList() {
  const { contacts } = use(ContactContext);
  return (
    <div className="w-full">
      {contacts.length === 0 && <h5>Il ya aucun contact disponible</h5>}
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
