import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-center text-white fixed-bottom"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <Container className="pt-4">
        <section className="mb-4">
          <Button
            variant="link"
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <FaFacebook />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <FaTwitter />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <FaGoogle />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <FaInstagram />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <FaLinkedin />
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <FaGithub />
          </Button>
        </section>
      </Container>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="https://counter.com/">
          counterapp.com
        </a>
      </div>
    </footer>
  );
}
