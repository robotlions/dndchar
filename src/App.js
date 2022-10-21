import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import * as CharInfo from "./Components/CharInfo";
import * as Inventory from "./Components/Inventory";
import { NewScores } from "./Components/AbilityScores";
import * as Skills from "./Components/Skills";
import { TopNav } from "./Components/NavBar";
import  {Accordion}  from "react-bootstrap";


function App() {
  const [selectedRace, setSelectedRace] = useState("human");
  const [selectedClass, setSelectedClass] = useState("Fighter");
  const [con, setCon] = useState(10);
  const [dex, setDex] = useState(10);
  const [wis, setWis] = useState(10);
  const [int, setInt] = useState(10);
  const [str, setStr] = useState(10);
const [chr, setChr] = useState(10);
  const [charName, setCharName] = useState("");
  const [level, setLevel] = useState(1);
  const [totalSilver, setTotalSilver] = useState(0);
  const [updated, setUpdated] = useState(false);
  const [armorMoney, setArmorMoney] = useState(0);
  const [ac, setAC] = useState(10);
  const [armorBonusTotal, setArmorBonusTotal] = useState(0);
  const [baseAC, setBaseAC] = useState(0);
  const [weaponsMoney, setWeaponsMoney] = useState(0);
  const [alignment, setAlignment] = useState("Lawful Good");
  const [hp, setHP] = useState(0);

  const nameCheck = charName != "" ? charName : "CHARACTER NAME"

  return (
    <div style={{marginBottom: 100}} className="container">
      <TopNav />
      
      
      <br/>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><div className="accTitle"><h5>{nameCheck}</h5>
        <p>{alignment} {selectedRace.charAt(0).toUpperCase()+selectedRace.slice(1)}  {selectedClass}</p>
        <p>Level {level}</p>
        <p>Hit Points: {hp}</p>
        <p>Armor Class: {ac}</p>
        </div></Accordion.Header>
        <Accordion.Body>
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
        <CharInfo.HitPoints setHP={setHP} level={level} selectedClass={selectedClass} con={con} setCon={setCon} selectedRace={selectedRace}/></div>
        <div className="col-2"></div>
        <div className="col-2">Armor Class
        <CharInfo.ArmorClass setAC={setAC} armorBonusTotal={armorBonusTotal} setBaseAC={setBaseAC} dex={dex} selectedRace={selectedRace}/>
        </div>
        <div className="col-2"></div>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="accTitle"><h5>Abilities and Saves</h5><p>STR-{str} INT-{int} WIS-{wis} DEX-{dex} CON-{con} CHR-{chr}</p></div></Accordion.Header>
        <Accordion.Body>
        <div className="row">
        <div className="col-md-4">
          <NewScores setStr={setStr} setChr={setChr} setInt={setInt} setWis={setWis} setDex={setDex} setCon={setCon} selectedRace={selectedRace} />
        </div>
        <div className="col-md-4">
          <CharInfo.SavingThrows level={level} selectedClass={selectedClass} dex={dex} con={con} wis={wis}/>
        </div>
        <div className="col-md-4"></div>

      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><div className="accTitle"><h5>Money</h5><p>{totalSilver - armorMoney - weaponsMoney} silver</p></div></Accordion.Header>
        <Accordion.Body>
        <div className="row">
          <div className="col-md-3">
        <Inventory.StartingSilver setWeaponsMoney={setWeaponsMoney} setArmorMoney={setArmorMoney} totalSilver={totalSilver} selectedClass={selectedClass} setTotalSilver={setTotalSilver} />
        </div>
        <div className="col-md-3">
        <p>Silver: {totalSilver - armorMoney - weaponsMoney}</p>
        </div>
        <div className="col-md-6"></div>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="accTitle"><h5>Armor</h5></div></Accordion.Header>
        <Accordion.Body>
        <Inventory.ArmorMain setArmorBonusTotal={setArmorBonusTotal} totalSilver={totalSilver} setArmorMoney={setArmorMoney} updated={updated} setUpdated={setUpdated}/>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="accTitle"><h5>Weapons</h5></div></Accordion.Header>
        <Accordion.Body>
        <Inventory.WeaponsMain totalSilver={totalSilver} setWeaponsMoney={setWeaponsMoney} updated={updated} setUpdated={setUpdated}/>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><div className="accTitle"><h5>Skills</h5></div></Accordion.Header>
        <Accordion.Body>
        <Skills.SkillsMain int={int} selectedRace={selectedRace} selectedClass={selectedClass}/>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><div className="accTitle"><h5>Spells</h5></div></Accordion.Header>
        <Accordion.Body>
        stuff here
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        <div className="row">
        <div className="col-md-12">
        </div>
      </div>
    </div>
  );
}

export default App;
