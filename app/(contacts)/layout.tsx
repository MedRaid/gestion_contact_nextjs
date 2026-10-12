import React, { ReactNode } from "react";
import NavBar from "../components/navigationBar";
import ContextProvider from "../components/provider";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="page w-full">
      <ContextProvider>
        <NavBar />
        {children}
      </ContextProvider>
    </div>
  );
}
