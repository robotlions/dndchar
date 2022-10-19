import {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { skillTables } from "../Classes/Skills/SkillsTables"



export const SkillList = (props) => {

    return(
        <p>Skill list</p>
    )
}

export const SkillsMain = (props) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const skillDisplay = Object.values(skillTables).map((item, index) => 
    <div class="form-check">
  <input onClick={()=>alert(item.skillName)} class="form-check-input" type="checkbox" value="" id={item.skillName} />
  <label class="form-check-label" for="flexCheckDefault">
    {item.skillName}
  </label>
</div>
    )

    return(<>
<h4>Skills</h4>
<Button variant="primary" onClick={handleShow}>
        Select Skills
      </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Armor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {skillDisplay}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      </>
    )
}