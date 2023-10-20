import {
  Menu,
  MenuItem,
  Divider,
  Button,
  ButtonGroup,
} from "@aws-amplify/ui-react";

import Image from "next/image";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

import { Auth } from "aws-amplify";

const Header = () => {
  async function signOut() {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <>
      <Navbar bg="light" variant={"light"} expand="xl" fixed="top">
        <Container fluid>
          <Link href="/">
            <Navbar.Brand>
              <Image src="/img/logo.svg" width={500} height={80} />
            </Navbar.Brand>
          </Link>
          <Nav className="justify-content-end" activeKey="/">
            <Nav.Link>
              <ButtonGroup size="large">
                <Button variation="link" size="large" colorTheme="overlay">
                  <Link href="/">Inicio</Link>
                </Button>
                <Button variation="link" size="large" colorTheme="overlay">
                  <Link href="/event">Crear Evento</Link>
                </Button>
                <Menu menuAlign="end" size="large">
                  <MenuItem isDisabled onClick={() => alert("Mis Bandas")}>
                    Mis Bandas
                  </MenuItem>
                  <MenuItem isDisabled onClick={() => alert("Configuración")}>
                    Configuración
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={signOut}>Cerrar Sesión</MenuItem>
                </Menu>
              </ButtonGroup>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
