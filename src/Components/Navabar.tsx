import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarArticle() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img src="./public/Thales" alt="" />
            Thales Alenia Space
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarArticle;
