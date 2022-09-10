import { useState } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


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

  const levelInput = 
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

    const levelDisplay = <button className="nameDisplay" onClick={() => setEditing(true)}>{thisState}</button>

  return (
    <div>
    {editing==true ? levelInput : levelDisplay}
    </div>
  );
};

export const HitPoints = (props) => {

    const [thisState, setThisState] = useState(0);

    function calculateModifier(abil){
      return -5 + Math.floor(1*(abil/2))
    }

    const hitDice ={
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
      Barbarian: 12

    }
    const hpDice = hitDice[props.selectedClass]
    const mod = calculateModifier(props.con);
    const printHP = (rando(1, hpDice)+mod)*props.level

    return(
        <div>
            {printHP}
        </div>
    )
}
