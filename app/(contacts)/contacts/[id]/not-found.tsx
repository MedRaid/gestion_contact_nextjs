import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col">
      <h2>Contact non trouve</h2>
      <Link className="btn-danger" href={"/contacts"}>
        Retourner !
      </Link>
    </div>
  );
};

export default NotFound;
