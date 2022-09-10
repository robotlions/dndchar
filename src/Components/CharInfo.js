import { useState } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as RaceBonuses from "../Races/AbilBonuses";


function rando(min, max) {
  return Math.floor(Math.random() * max) + min;
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
        //   placeholder={thisState != "" ? thisState : "Character Name"}
        onChange={(e) => {
          setThisState(e.target.value);
          props.setCharName(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <Form.Text className="text-muted">
        Dumb, made-up fantasy type name like "Ravinor" or some crap like that.
      </Form.Text>
    </InputGroup>
  );

  const nameDisplay = (
    <button className="nameDisplay" onClick={() => setEditing(true)}>
      {thisState}
    </button>
  );

  return <div>{editing == true ? nameInput : nameDisplay}</div>;
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
        placeHolder={1}
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

  return <div>{editing == true ? levelInput : levelDisplay}</div>;
};

export const HitPoints = (props) => {
  
  function calculateModifier(abil) {
    return -5 + Math.floor(1 * (abil / 2));
  }

  const hitDice = {
    Sorcerer: 4,
    Wizard: 4,
    Bard: 6,
    Rogue: 6,
    Cleric: 8,
    Druid: 8,
    Monk: 8,
    Ranger: 8,
    Fighter: 10,
    Paladin: 10,
    Barbarian: 12,
  };

  const racialBonus = RaceBonuses[props.selectedRace];


  const hpDice = hitDice[props.selectedClass];
  const mod = calculateModifier(props.con+racialBonus.bonusCon);

  let total = 0;
  for (let i = 1; i <= props.level; i++) {
    if(i==1){
      total=parseInt(total)+hpDice+mod
    }
    else{
    total = parseInt(total)+parseInt(rando(1, hpDice)+mod)
    }
  }

  const printHP = total;

  return <div>{printHP}</div>;
};
