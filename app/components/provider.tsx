"use client";

import React, { ReactNode, useState } from "react";
import { ContactContext } from "../context/contactsContext";
import { contacts } from "../data/contacts";

type Props = {
  children: ReactNode;
};

export default function ContextProvider({ children }: Props) {
  const [contactlist, setContactList] = useState(contacts);

  return (
    <>
      <ContactContext
        value={{ contacts: contactlist, setContact: setContactList }}
      >
        {children}
      </ContactContext>
    </>
  );
}
