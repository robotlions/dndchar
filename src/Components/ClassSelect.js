import {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from "react-bootstrap";



 export const ClassSelectDropdown = (props) => {
  
    const [thisState, setThisState] = useState("Fighter");
  
  return(
    <Dropdown onSelect={(eventKey) => {setThisState(eventKey); props.setBasicEdited(true); props.setSelectedClass(eventKey)}}>
    <DropdownButton variant="secondary rounded-0" title={thisState}>
      <Dropdown.Item eventKey="Barbarian">Barbarian</Dropdown.Item>
      <Dropdown.Item eventKey="Bard">Bard</Dropdown.Item>
      <Dropdown.Item eventKey="Cleric">Cleric</Dropdown.Item>
      <Dropdown.Item eventKey="Druid">Druid</Dropdown.Item>
      <Dropdown.Item eventKey="Fighter">Fighter</Dropdown.Item>
      <Dropdown.Item eventKey="Monk">Monk</Dropdown.Item>
      <Dropdown.Item eventKey="Paladin">Paladin</Dropdown.Item>
      <Dropdown.Item eventKey="Ranger">Ranger</Dropdown.Item>
      <Dropdown.Item eventKey="Rogue">Rogue</Dropdown.Item>
      <Dropdown.Item eventKey="Sorcerer">Sorcerer</Dropdown.Item>
      <Dropdown.Item eventKey="Wizard">Wizard</Dropdown.Item>
    </DropdownButton>
    </Dropdown>
  )
  }

  export const SecondClassSelectDropdown = (props) => {
  
    const [thisState, setThisState] = useState("Choose Multiclass");

    function selectSecondClass(eventKey){
      setThisState(eventKey);
      props.setBasicEdited(true);
      props.setSelectedSecondClass(eventKey)
    }
  
  return(
    <Dropdown onSelect={(eventKey) => selectSecondClass(eventKey)}>
    <DropdownButton variant="secondary rounded-0" title={thisState}>
      <Dropdown.Item eventKey="Barbarian" disabled={props.selectedClass=="Barbarian" ? true : false}>Barbarian</Dropdown.Item>
      <Dropdown.Item eventKey="Bard" disabled={props.selectedClass=="Bard" ? true : false}>Bard</Dropdown.Item>
      <Dropdown.Item eventKey="Cleric" disabled={props.selectedClass=="Cleric" ? true : false}>Cleric</Dropdown.Item>
      <Dropdown.Item eventKey="Druid" disabled={props.selectedClass=="Druid" ? true : false}>Druid</Dropdown.Item>
      <Dropdown.Item eventKey="Fighter" disabled={props.selectedClass=="Fighter" ? true : false}>Fighter</Dropdown.Item>
      <Dropdown.Item eventKey="Monk" disabled={props.selectedClass=="Monk" ? true : false}>Monk</Dropdown.Item>
      <Dropdown.Item eventKey="Paladin" disabled={props.selectedClass=="Paladin" ? true : false}>Paladin</Dropdown.Item>
      <Dropdown.Item eventKey="Ranger" disabled={props.selectedClass=="Ranger" ? true : false}>Ranger</Dropdown.Item>
      <Dropdown.Item eventKey="Rogue" disabled={props.selectedClass=="Rogue" ? true : false}>Rogue</Dropdown.Item>
      <Dropdown.Item eventKey="Sorcerer" disabled={props.selectedClass=="Sorcerer" ? true : false}>Sorcerer</Dropdown.Item>
      <Dropdown.Item eventKey="Wizard" disabled={props.selectedClass=="Wizard" ? true : false}>Wizard</Dropdown.Item>
    </DropdownButton>
    </Dropdown>
  )
  }