import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import * as CharInfo from "./Components/CharInfo";
import * as Inventory from "./Components/Inventory";
import { NewScores } from "./Components/AbilityScores";
// import { SkillList } from "./Components/Skills";
import * as Skills from "./Components/Skills";

function App() {
  const [selectedRace, setSelectedRace] = useState("select");
  const [selectedClass, setSelectedClass] = useState("Fighter");
  const [con, setCon] = useState(0);
  const [dex, setDex] = useState(0);
  const [wis, setWis] = useState(0);
  const [int, setInt] = useState(0);
  const [charName, setCharName] = useState("");
  const [level, setLevel] = useState(1);
  const [totalSilver, setTotalSilver] = useState(0);
  const [updated, setUpdated] = useState(false);
  const [armorMoney, setArmorMoney] = useState(0);
  const [armorBonusTotal, setArmorBonusTotal] = useState(0);
  const [baseAC, setBaseAC] = useState(0);
  const [weaponsMoney, setWeaponsMoney] = useState(0);
  const [alignment, setAlignment] = useState("Lawful Good");

  return (
    <div style={{marginBottom: 100}} className="container">
      <div className="row">
        <div className="col-md-4">
          <CharInfo.CharName setCharName={setCharName} />
        </div>
        <div className="col-md-3">
          <RaceSelectDropdown setSelectedRace={setSelectedRace} />
        </div>
        <div className="col-md-3">
          <ClassSelectDropdown setSelectedClass={setSelectedClass} />
        </div>
        <div className="col-md-2">
          <CharInfo.AlignmentSelect setAlignment={setAlignment} />
        </div>
      </div>
      <div style={{textAlign: "center"}}className="row">
        <div className="col-2">
          {/* the disabled component allows for changing the level, but it's deactivated for now because
          I don't plan to build out all of the tables necessary to make a character beyond level 1 */}
            Level
            {/* <CharInfo.Level setLevel={setLevel} /> */}
            <p>1</p>
          
        </div>
        <div className="col-2"></div>
        <div className="col-2">Hit Points
        <CharInfo.HitPoints level={level} selectedClass={selectedClass} con={con} setCon={setCon} selectedRace={selectedRace}/></div>
        <div className="col-2"></div>
        <div className="col-2">Armor Class
        <CharInfo.ArmorClass armorBonusTotal={armorBonusTotal} setBaseAC={setBaseAC} dex={dex} selectedRace={selectedRace}/>
        {/* <p>{baseAC + armorBonusTotal}</p> */}
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <NewScores setInt={setInt} setWis={setWis} setDex={setDex} setCon={setCon} selectedRace={selectedRace} />
        </div>
        <div className="col-md-4">
          <CharInfo.SavingThrows level={level} selectedClass={selectedClass} dex={dex} con={con} wis={wis}/>
        </div>
        <div className="col-md-4"></div>

      </div>
      <div className="row">
          <div className="col-md-3">
        <Inventory.StartingSilver setWeaponsMoney={setWeaponsMoney} setArmorMoney={setArmorMoney} totalSilver={totalSilver} selectedClass={selectedClass} setTotalSilver={setTotalSilver} />
        </div>
        <div className="col-md-3">
        <p>Silver: {totalSilver - armorMoney - weaponsMoney}</p>
        </div>
        <div className="col-md-6"></div>
        </div>
        <br/>
      <div className="row">
        <div className="col-md-12">
          <Inventory.ArmorMain setArmorBonusTotal={setArmorBonusTotal} totalSilver={totalSilver} setArmorMoney={setArmorMoney} updated={updated} setUpdated={setUpdated}/>
        </div>
        </div>
        <br/>
        <div className="row">
        <div className="col-md-12">
          <Inventory.WeaponsMain totalSilver={totalSilver} setWeaponsMoney={setWeaponsMoney} updated={updated} setUpdated={setUpdated}/>
        </div>
      </div>
      <br/>
        <div className="row">
        <div className="col-md-12">
          <Skills.SkillsMain int={int} selectedRace={selectedRace} selectedClass={selectedClass}/>
        </div>
      </div>
    </div>
  );
}

export default App;
