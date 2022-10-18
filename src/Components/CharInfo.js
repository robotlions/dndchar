import { useEffect, useState } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from "react-bootstrap";
import * as RaceBonuses from "../Races/AbilBonuses";
import * as ClassTables from "../Classes/ClassTables";
import * as RaceTables from "../Races/RaceTables";
import * as SavingThrowTables from "../Classes/SavingThrowsTables";

function rando(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function calculateModifier(abil) {
  return -5 + Math.floor(1 * (abil / 2));
}

export const CharName = (props) => {
  const [thisState, setThisState] = useState("");
  const [editing, setEditing] = useState(true);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const nameInput = (
    <InputGroup className="mb-3" id="charName">
      <Form.Control
        type="text"
        placeholder="Character Name"
        //   placeholder={thisState != "" ? thisState : "Character Name"}
        onChange={(e) => {
          setThisState(e.target.value);
          props.setCharName(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {/* <Form.Text className="text-muted">
      </Form.Text> */}
    </InputGroup>
  );

  const nameDisplay = (
    <button className="nameDisplay" onClick={() => setEditing(true)}>
      {thisState}
    </button>
  );

  return <div>{editing === true ? nameInput : nameDisplay}</div>;
};

export const Level = (props) => {
  const [thisState, setThisState] = useState(1);
  const [editing, setEditing] = useState(true);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const levelInput = (
    <InputGroup className="mb-3" id="level">
      <Form.Control
        type="text"
        placeholder={1}
        onChange={(e) => {
          setThisState(e.target.value);
          props.setLevel(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );

  const levelDisplay = (
    <button className="nameDisplay" onClick={() => setEditing(true)}>
      {thisState}
    </button>
  );

  return <div>{editing === true ? levelInput : levelDisplay}</div>;
};

export const HitPoints = (props) => {
  // function calculateModifier(abil) {
  //   return -5 + Math.floor(1 * (abil / 2));
  // }

  const racialBonus = RaceBonuses[props.selectedRace];
  const hpDice = ClassTables.hitDice[props.selectedClass];
  const mod = calculateModifier(props.con + racialBonus.bonusCon);
  const [printHP, setPrintHP] = useState(1);

  useEffect(() => {
    let loading = true;
    if (loading === true) {
      let total = 0;
      for (let i = 1; i <= props.level; i++) {
        if (i === 1) {
          total = parseInt(total) + hpDice + mod;
        } else {
          total = parseInt(total) + parseInt(rando(1, hpDice) + mod);
        }
      }
      setPrintHP(total);
    }
    return () => {
      loading = false;
    };
  }, [props.level, hpDice, mod]);

  return <div>{printHP}</div>;
};

export const ArmorClass = (props) => {
  const dexModifier = calculateModifier(props.dex);
  const sizeModifier = RaceTables.sizeModifier[props.selectedRace].ac;
  // const printAC = 10 + props.armorBonus + props.shieldBonus + props.dexModifier + props.sizeModifier
  const printAC = 10 + sizeModifier + dexModifier;
  return props.setBaseAC(printAC);
};

export const SavingThrows = (props) => {

const fortSave = SavingThrowTables[props.selectedClass][props.level].f + calculateModifier(props.con)
const reflexSave = SavingThrowTables[props.selectedClass][props.level].r + calculateModifier(props.dex);
const willSave = SavingThrowTables[props.selectedClass][props.level].w + calculateModifier(props.wis);

  return(
    <div style={{textAlign: "center"}}>
      <table>
        <thead>
          <tr>
            <th>Saving Throws</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fortitude: {fortSave}</td>
          </tr>
          <tr>
            <td>Reflex: {reflexSave}</td>
          </tr>
          <tr>
            <td>Will: {willSave}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export const AlignmentSelect = (props) => {

  
    const [thisState, setThisState] = useState("Lawful Good");
  
  return(
    <Dropdown onSelect={(eventKey) => {setThisState(eventKey); props.setAlignment(eventKey)}}>
    <DropdownButton variant="secondary" title={thisState}>
      <Dropdown.Item eventKey="Lawful Good">Lawful Good</Dropdown.Item>
      <Dropdown.Item eventKey="Neutral Good">Neutral Good</Dropdown.Item>
      <Dropdown.Item eventKey="Chaotic Good">Chaotic Good</Dropdown.Item>
      <Dropdown.Item eventKey="Lawful Neutral">Lawful Neutral</Dropdown.Item>
      <Dropdown.Item eventKey="True Neutral">True Neutral</Dropdown.Item>
      <Dropdown.Item eventKey="Chaotic Neutral">Chaotic Neutral</Dropdown.Item>
      <Dropdown.Item eventKey="Lawful Evil">Lawful Evil</Dropdown.Item>
      <Dropdown.Item eventKey="Neutral Evil">Neutral Evil</Dropdown.Item>
      <Dropdown.Item eventKey="Chaotic Evil">ChaoticEvil</Dropdown.Item>
    </DropdownButton>
    </Dropdown>
  )
  }
