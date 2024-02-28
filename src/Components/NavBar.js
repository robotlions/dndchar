import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useState } from "react";
import dndModLogo from "../images/dndModLogo.png";

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

  function handleMunchkinSwitch(event) {
    if (event.target.checked === true) {
      props.setMunchkinMode(true);
      alert("Munchkin Mode allows you to manually adjust the character's level and ability scores and it sets the silver to a million. Warning: this generator works best for level one characters. At higher levels, things get unreliable.");
    } else {
      props.setMunchkinMode(false);
    }
  }

  const fontCheck = props.fontThemeFantasy===true ? "eagle-lake" : "gotham-black"
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear()

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            style={{ textAlign: "center", whiteSpace: "normal" }}
            href="#home"
          >
            <img alt="modern dnd logo" src={dndModLogo} style={{maxWidth:"30%"}}></img>
            <h3 style={{ fontFamily: fontCheck }}>
              3.5 Edition<br/>Character Creator
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse   style={{textAlign: "center"}} id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleShow()}>About</Nav.Link>
              <Nav.Link href="https://chadmusick.com" target="_blank">
                chadmusick.com
              </Nav.Link>

              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      onChange={(event) => handleMunchkinSwitch(event)}
                      id="flexSwitchCheckMunchkin"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckMunchkin"
                    >
                      Munchkin Mode
                    </label>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      onChange={(event) => handleFontSwitch(event)}
                      id="flexSwitchCheckFont"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckFont"
                    >
                      Rad fantasy font
                    </label>
                  </div>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
