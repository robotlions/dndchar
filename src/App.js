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
      {/* <Accordion defaultActiveKey={['0']} alwaysOpen> */}
      <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><div className="accTitle"><h5>{nameCheck}</h5>
        <p>{alignment} {selectedRace.charAt(0).toUpperCase()+selectedRace.slice(1)}  {selectedClass}</p>
        <p><span style={{fontWeight: "bold"}}>Level: </span>{level}</p>
        <p><span style={{fontWeight: "bold"}}>Hit Points: </span>{hp}</p>
        <p><span style={{fontWeight: "bold"}}>Armor Class: </span>{ac}</p>
        </div></Accordion.Header>
        <Accordion.Body>
        <div className="row justify-content-evenly">
        <div className="col-md-6">
          <CharInfo.CharName setCharName={setCharName} />
        </div>
        <div className="col">
          <RaceSelectDropdown setSelectedRace={setSelectedRace} />
        </div>
        <div className="col">
          <ClassSelectDropdown setSelectedClass={setSelectedClass} />
        </div>
        <div className="col">
          <CharInfo.AlignmentSelect setAlignment={setAlignment} />
        </div>
      </div>
      <div style={{textAlign: "center"}} className="row justify-content-evenly">
        <div className="col">
          {/* the disabled component allows for changing the level, but it's deactivated for now because
          I don't plan to build out all of the tables necessary to make a character beyond level 1 */}
            Level
            {/* <CharInfo.Level setLevel={setLevel} /> */}
            <p>1</p>
          
        </div>
        <div className="col">Hit Points
        <CharInfo.HitPoints setHP={setHP} level={level} selectedClass={selectedClass} con={con} setCon={setCon} selectedRace={selectedRace}/></div>
        <div className="col">Armor Class
        <CharInfo.ArmorClass setAC={setAC} armorBonusTotal={armorBonusTotal} setBaseAC={setBaseAC} dex={dex} selectedRace={selectedRace}/>
        </div>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="accTitle"><h5>Abilities and Saves</h5>
        <p><span style={{fontWeight: "bold"}}>Str </span>{str} <span style={{fontWeight: "bold"}}>Int </span>{int} <span style={{fontWeight: "bold"}}>Wis </span>{wis} <span style={{fontWeight: "bold"}}>Dex </span>{dex} <span style={{fontWeight: "bold"}}>Con </span>{con} <span style={{fontWeight: "bold"}}>Chr </span>{chr}</p>
        </div></Accordion.Header>
        <Accordion.Body>
        <div className="row justify-content-evenly">
        <div className="col">
          <NewScores setStr={setStr} setChr={setChr} setInt={setInt} setWis={setWis} setDex={setDex} setCon={setCon} selectedRace={selectedRace} />
        </div>
        <div className="col">
          <CharInfo.SavingThrows level={level} selectedClass={selectedClass} dex={dex} con={con} wis={wis}/>
        </div>

      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><div className="accTitle"><h5>Money</h5><p>{totalSilver - armorMoney - weaponsMoney} silver</p></div></Accordion.Header>
        <Accordion.Body>
        <p>Silver: {totalSilver - armorMoney - weaponsMoney}</p>
        <Inventory.StartingSilver setWeaponsMoney={setWeaponsMoney} setArmorMoney={setArmorMoney} totalSilver={totalSilver} selectedClass={selectedClass} setTotalSilver={setTotalSilver} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="accTitle"><h5>Armor</h5></div></Accordion.Header>
        <Accordion.Body>
        <Inventory.ArmorMain setArmorBonusTotal={setArmorBonusTotal} totalSilver={totalSilver} setArmorMoney={setArmorMoney} updated={updated} setUpdated={setUpdated}/>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
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
