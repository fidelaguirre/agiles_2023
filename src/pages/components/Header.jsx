import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant={"light"} expand="lg" fixed="top">
        <Link href="/">
          <Navbar.Brand>
            <Image src="/img/logo.svg" width={700} height={100} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
