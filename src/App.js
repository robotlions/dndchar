import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import {NewScores} from './Components/AbilityScores';

function App() {
  const [selectedRace, setSelectedRace] = useState("Human");
  const [selectedClass, setSelectedClass] = useState("Fighter")

  return (
    <div className="container">
      <div className="row">
      <div className="col-4">
        <p>Name input here</p>
      </div>
        <div className="col-4">
          <RaceSelectDropdown setSelectedRace={setSelectedRace} />
          <p>Race: {selectedRace}</p>
        </div>
        <div className="col-4">
        <ClassSelectDropdown setSelectedClass={setSelectedClass}/>
        <p>Class: {selectedClass}</p>

        </div>
        
</div>
<div className="row">
  <div className="col-12">
    <p>Line break or some other information here</p>
  </div>
</div>
        <div className="row">
          <div className="col-12">
            <NewScores selectedRace={selectedRace}/>
          </div>
        </div>
      </div>
  );
}

export default App;
