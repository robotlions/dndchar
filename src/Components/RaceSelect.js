import {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from "react-bootstrap";



 export const RaceSelectDropdown = (props) => {
  
    const [thisState, setThisState] = useState("Select Race");
  
  return(
    <Dropdown onSelect={(eventKey) => {setThisState(eventKey); props.setSelectedRace(eventKey)}}>
    <DropdownButton title={thisState}>
      <Dropdown.Item eventKey="Human">Human</Dropdown.Item>
      <Dropdown.Item eventKey="Dwarf">Dwarf</Dropdown.Item>
      <Dropdown.Item eventKey="Elf">Elf</Dropdown.Item>
      <Dropdown.Item eventKey="Gnome">Gnome</Dropdown.Item>
      <Dropdown.Item eventKey="HalfElf">Half-elf</Dropdown.Item>
      <Dropdown.Item eventKey="HalfOrc">Half-orc</Dropdown.Item>
      <Dropdown.Item eventKey="Halfling">Halfling</Dropdown.Item>
    </DropdownButton>
    </Dropdown>
  )
  }
  
  

