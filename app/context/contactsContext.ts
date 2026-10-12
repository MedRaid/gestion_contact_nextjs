import { createContext, Dispatch, SetStateAction } from "react";
import { Contact } from "../types/contact.model";

type ContactContextType = {
  contacts: Contact[];
  setContact: Dispatch<SetStateAction<Contact[]>>;
};

export const ContactContext = createContext<ContactContextType>({
  contacts: [],
  setContact: () => {},
});
