import ContactList from "@/app/components/contactList";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-2">
      <header className="flex between">
        <h1>liste de contacts</h1>
        <Link href={"/add-contact"} className="btn">
          Ajouter un contact
        </Link>
      </header>
      <ContactList />
    </div>
  );
};

export default page;
