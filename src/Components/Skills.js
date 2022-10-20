import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { skillTables } from "../Classes/Skills/SkillsTables";

const classSkillPoints = {
  Barbarian: 4,
  Bard: 6,
  Cleric: 2,
  Druid: 4,
  Fighter: 2,
  Monk: 4,
  Paladin: 2,
  Ranger: 6,
  Rogue: 8,
  Sorcerer: 2,
  Wizard: 2,
}

function calculateModifier(abil){
  return -5 + Math.floor(1*(abil/2))
}

export const SkillList = (props) => {
  return <p>Skill list</p>;
};



export const SkillsMain = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [totalNumSkills, setTotalNumSkills] = useState(0);
  // const [skillPoints, setSkillPoints] = useState(classSkillPoints[props.selectedClass] + calculateModifier(props.int)
  // );

  function handleChange(event){
    if (event.target.checked==true){
      setTotalNumSkills(totalNumSkills+1)
    }
    else{
      setTotalNumSkills(totalNumSkills-1)
    }
  }


  

  const skillDisplay = Object.values(skillTables).map((item, index) => (
    <div key={index} className="form-check">
      <input
        // onClick={() => setTotalNumSkills(totalNumSkills+1)}
        onChange={(event)=>handleChange(event)}
        className="form-check-input"
        type="checkbox"
        value=""
        id={item.skillName}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {item.skillName}
      </label>
      
    </div>
  ));
  let skillPoints = classSkillPoints[props.selectedClass] + calculateModifier(props.int)

  return (
    <>
      <h4>Skills</h4>
      <div className="row">{skillDisplay}</div>
          <div>Total: {totalNumSkills}</div>
          <div>Skill Points: {skillPoints}</div>
      <Button variant="primary" onClick={handleShow}>
        Select Skills
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Armor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">{skillDisplay}</div>
          <div>Total: {totalNumSkills}</div>
          <div>Skill Points: {classSkillPoints[props.selectedClass]}</div>
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
  );
};
