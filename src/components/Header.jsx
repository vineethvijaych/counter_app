import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white fw-bolder">
            <img
              alt=""
              src="https://cdn.dribbble.com/userupload/19583375/file/original-3d3d6bf2c36c5cc4dc195e7d84cfd682.gif"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Counter-App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
