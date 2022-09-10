import { useState } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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

    return(
        <div>
            Hit points
        </div>
    )
}
