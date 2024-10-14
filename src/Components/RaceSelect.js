import {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from "react-bootstrap";
import { RaceInfo } from '../Races/RaceTables';



 export const RaceSelectDropdown = (props) => {
  
    const [thisState, setThisState] = useState("human");
  
  return(
    <Dropdown onSelect={(eventKey) => {props.setBasicEdited(true); setThisState(eventKey); props.setSelectedRace(eventKey)}}>
    <DropdownButton variant="secondary rounded-0" title={RaceInfo[thisState].raceName}>
      <Dropdown.Item eventKey="human">Human</Dropdown.Item>
      <Dropdown.Item eventKey="dwarf">Dwarf</Dropdown.Item>
      <Dropdown.Item eventKey="elf">Elf</Dropdown.Item>
      <Dropdown.Item eventKey="gnome">Gnome</Dropdown.Item>
      <Dropdown.Item eventKey="halfElf">Half-elf</Dropdown.Item>
      <Dropdown.Item eventKey="halfOrc">Half-orc</Dropdown.Item>
      <Dropdown.Item eventKey="halfling">Halfling</Dropdown.Item>
    </DropdownButton>
    </Dropdown>
  )
  }
  
  

