import Link from "next/link";

function NavBar() {
  return (
    <header className="navbar">
      <Link href={"/"}>
        <h4>Wateja</h4>
      </Link>
    </header>
  );
}

export default NavBar;
