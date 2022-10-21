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



export const SkillEntry = (props) => {

  let classSkill = props.item[props.selectedClass];

  const classSkillDisplay = classSkill===true ? "C" : "cc"

  function addSkillRank(){
    if(props.skillPoints === 0){
      return alert("Not enough skill points")
    }
    if(props.skillPoints <= -1){
      return alert("Not enough skill points. Did you remember to roll your character's abilities?")
    }
    if(classSkill===true){
    setSkillRank(skillRank+1);
    props.setSkillPoints(props.skillPoints-1)
    }
    else{
      setSkillRank(skillRank+1);
      props.setSkillPoints(props.skillPoints-2)
    }
  }

  function subtractSkillRank(){
    if(skillRank===0){
      return alert("This skill can't go any lower.")
    }
    if(classSkill===true){
      setSkillRank(skillRank-1);
      props.setSkillPoints(props.skillPoints+1)
      }
      else{
        setSkillRank(skillRank-1);
        props.setSkillPoints(props.skillPoints+2)
      }
  }

  const [skillRank, setSkillRank] = useState(0);

  return(
  <div><Button variant="light" onClick={()=>addSkillRank()}>+</Button> {skillRank} <Button variant="light" onClick={()=>subtractSkillRank()}>-</Button> {props.item.skillName}</div>
  );
};



export const SkillsMain = (props) => {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [totalNumSkills, setTotalNumSkills] = useState(0);
  const [skillPoints, setSkillPoints] = useState(classSkillPoints[props.selectedClass] + calculateModifier(props.int)
  );

  let raceSkillBonus = props.selectedRace === "human" ? 4 : 0;


  useEffect(()=>{
    setSkillPoints(4*(classSkillPoints[props.selectedClass] + calculateModifier(props.int))+raceSkillBonus)
  }, [props.int, props.selectedClass, props.selectedRace, raceSkillBonus])

  

  const skillDisplayClass = Object.values(skillTables).filter((item)=>item[props.selectedClass]===true).map((item, index) => (
    <div key={index} className="col-3"><SkillEntry key={index} selectedClass={props.selectedClass} item={item} skillPoints={skillPoints} setSkillPoints={setSkillPoints}/>
</div>
  ));
  
  const skillDisplayCrossClass = Object.values(skillTables).filter((item)=>item[props.selectedClass]===false).map((item, index) => (
    <div key={index} className="col-3"><SkillEntry key={index} selectedClass={props.selectedClass} item={item} skillPoints={skillPoints} setSkillPoints={setSkillPoints}/>
</div>
  ));


  return (
    <>
      <h5>Class Skills - <em>1 point</em></h5>
      <div className="d-flex flex-row flex-wrap">{skillDisplayClass}</div>
      <h5>Cross-Class Skills - <em>2 points</em></h5>
      <div className="d-flex flex-row flex-wrap">{skillDisplayCrossClass}</div>

          {/* <div>Total: {totalNumSkills}</div> */}
          <div>Skill Points: {skillPoints}</div>
      {/* <Button variant="primary" onClick={handleShow}>
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
         
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
