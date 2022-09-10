import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import * as CharInfo from "./Components/CharInfo";
import { NewScores } from "./Components/AbilityScores";

function App() {
  const [selectedRace, setSelectedRace] = useState("Human");
  const [selectedClass, setSelectedClass] = useState("Fighter");
  const [con, setCon] = useState(0);
  const [charName, setCharName] = useState("");
  const [level, setLevel] = useState(1);
  const [hitPoints, setHitPoints] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          Character Name
          <CharInfo.CharName setCharName={setCharName} />
        </div>
        <div className="col-4">
          <RaceSelectDropdown setSelectedRace={setSelectedRace} />
          <p>Race: {selectedRace}</p>
        </div>
        <div className="col-4">
          <ClassSelectDropdown setSelectedClass={setSelectedClass} />
          <p>Class: {selectedClass}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <p>
            Level
            <CharInfo.Level setLevel={setLevel} />
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-2"><p>Hit Points<CharInfo.HitPoints level={level} selectedClass={selectedClass} con={con} selectedRace={selectedRace}/></p></div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <NewScores setCon={setCon} selectedRace={selectedRace} />
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
