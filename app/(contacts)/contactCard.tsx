import React from "react";
import { Contact } from "../types/contact.model";
import Image from "next/image";
import ContactCardActions from "../components/contactCardActions";

type Props = {
  contact: Contact;
};

const ContactCard = ({ contact }: Props) => {
  return (
    <div key={contact.id} className="flex mt-2 between">
      <Image src={contact.avatar} alt={contact.nom} width={70} height={70} />
      <div className="flex-1">
        <h4>
          {contact.id} - {contact.nom}
        </h4>
        <p>{contact.email}</p>
        <p>{contact.numTel}</p>
      </div>
      <ContactCardActions contact={contact} />
    </div>
  );
};

export default ContactCard;
