import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import {NewScores} from './Components/AbilityScores';

function App() {
  const [selectedRace, setSelectedRace] = useState("Human");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <RaceSelectDropdown setSelectedRace={setSelectedRace} />
          <p>Selected: {selectedRace}</p>
        </div>
        <div className="row">
          <div className="col-12">
            <NewScores selectedRace={selectedRace}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
