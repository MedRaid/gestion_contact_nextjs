import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col center">
      <h2>NotFound</h2>
      <Link href={"/"} className="btn-link">
        Retourner
      </Link>
    </div>
  );
}

export default NotFound;
