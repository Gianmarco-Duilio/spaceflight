import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarArticle() {
  return (
    <Container>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" id="bodyCard" className="mt-3">
        <Navbar.Brand className="ps-3" href="#">
          <img src="Thales.svg" alt="" />
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default NavbarArticle;
