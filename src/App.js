import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import * as CharInfo from "./Components/CharInfo";
import { NewScores } from "./Components/AbilityScores";

function App() {
  const [selectedRace, setSelectedRace] = useState("Select");
  const [selectedClass, setSelectedClass] = useState("Fighter");
  const [con, setCon] = useState(0);
  const [dex, setDex] = useState(0);
  const [charName, setCharName] = useState("");
  const [level, setLevel] = useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          Character Name
          <CharInfo.CharName setCharName={setCharName} />
        </div>
        <div className="col-4">
          <RaceSelectDropdown setSelectedRace={setSelectedRace} />
        </div>
        <div className="col-4">
          <ClassSelectDropdown setSelectedClass={setSelectedClass} />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          
            Level
            <CharInfo.Level setLevel={setLevel} />
          
        </div>
        <div className="col-2"></div>
        <div className="col-2">Hit Points
        <CharInfo.HitPoints level={level} selectedClass={selectedClass} con={con} setCon={setCon} selectedRace={selectedRace}/></div>
        <div className="col-2"></div>
        <div className="col-2">Armor Class
        <CharInfo.ArmorClass dex={dex} selectedRace={selectedRace}/>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <NewScores setDex={setDex} setCon={setCon} selectedRace={selectedRace} />
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
