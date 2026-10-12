"use client";

import React, { use } from "react";
import { Contact } from "../types/contact.model";
import { ContactContext } from "../context/contactsContext";
import { useRouter } from "next/navigation";

export default function AddContactForm() {
  const { contacts, setContact } = use(ContactContext);
  const router = useRouter();

  const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const generatedId = Math.round(Math.random() * 100);

    const nouveaucontact: Contact = {
      id: generatedId,
      nom: form.get("nom") as string,
      email: form.get("email") as string,
      numTel: form.get("tel") as string,
      avatar: `https://api.dicebear.com/10.x/adventurer/png?seed=${generatedId}`,
    };
    setContact([nouveaucontact, ...contacts]);
    router.push("/contacts");
  };

  return (
    <form className="mt-2 flex" onSubmit={(e) => handleSubmitForm(e)}>
      <div className="form-group">
        <label htmlFor="nom">Nom du comtact</label>
        <input
          type="text"
          name="nom"
          id=""
          placeholder="Nelly"
          required
          minLength={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Adress email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="@gmail.com"
          required
          minLength={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="tel">Num tel</label>
        <input
          type="tel"
          name="tel"
          id=""
          placeholder="064343421"
          required
          minLength={3}
        />
      </div>
      <button type="submit" className="btn w-full">
        Ajouter le contact
      </button>
    </form>
  );
}
