"use client";
import React, { use } from "react";
import { ContactContext } from "../context/contactsContext";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function ContactDetails() {
  const { contacts } = use(ContactContext);
  const { id } = useParams();
  const currentContact = contacts.find((c) => c.id === Number(id));

  if (!currentContact) return notFound();

  return (
    <div className="flex mt-2 flex-col bg-">
      <Image
        src={currentContact.avatar}
        alt={currentContact.nom}
        width={200}
        height={200}
      />
      <h2 className="text-left">{currentContact?.nom}</h2>
      <p>
        <strong className="text-left">Email:</strong> {currentContact.email}
      </p>
      <p>
        <strong className="text-left">Tel:</strong> {currentContact.numTel}
      </p>
      <Link href={"/contacts"} className="btn">
        Retourner
      </Link>
    </div>
  );
}

export default ContactDetails;
