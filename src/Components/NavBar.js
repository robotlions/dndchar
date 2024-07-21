import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import dnd2000Logo from "../images/dnd2000Logo.png";

export const TopNav = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleFontSwitch(event) {
    if (event.target.checked === true) {
      props.setFontThemeFantasy(true);
    } else {
      props.setFontThemeFantasy(false);
    }
  }

  const fontCheck =
    props.fontThemeFantasy === true ? "eagle-lake" : "gotham-black";
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link onClick={() => handleShow()}>About</Nav.Link>
              <Nav.Link href="https://robotlions.com" target="_blank">
                robotlions.com
              </Nav.Link>
            </Nav>
            <div className="d-flex" style={{marginLeft:"auto"}}>
              <div
                className="form-check form-switch"
                
              >
                <label
                  style={{ color: "rgb(102, 108, 109)" }}
                  className="form-check-label"
                  htmlFor="flexSwitchCheckFont"
                >
                  Rad fantasy font
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={(event) => handleFontSwitch(event)}
                  id="flexSwitchCheckFont"
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img
        alt="modern dnd logo"
        src={dnd2000Logo}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "50%",
        }}
      ></img>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: fontCheck }}>
          3.5 Edition
          <br />
          Character Creator
        </h3>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <h5>Character Creator for Dungeons and Dragons edition 3.5</h5>
          <p>Copyright {currentYear} by Chad Musick</p>
          <br />
          <p>
            Based on Dungeons and Dragons Players Handbook
            <br />
            Core Rulebook 1 v3.5
            <br />
            by
            <br />
            Monte Cook, Jonathan Tweet and Skip Williams
          </p>

          <p>Copyright 2003 by Wizards of the Coast, Inc</p>
          <p>
            Based on the original Dungeons and Dragons game
            <br />
            created by E. Gary Gygax and Dave Arneson
          </p>
          <p>
            Email: <a href="mailto:info@robotlions.com">info@robotlions.com</a>
          </p>
          <p>
            Website: <a href="https://robotlions.com/">robotlions.com</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
