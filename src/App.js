import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import * as CharInfo from "./Components/CharInfo";
import * as Inventory from "./Components/Inventory";
import { NewScores } from "./Components/AbilityScores";
import * as Skills from "./Components/Skills";
import { TopNav } from "./Components/NavBar";
import { Accordion } from "react-bootstrap";
import * as Feats from "./Components/Feats";

function App() {
  const [selectedRace, setSelectedRace] = useState("human");
  const [selectedClass, setSelectedClass] = useState("Fighter");
  const [con, setCon] = useState(10);
  const [dex, setDex] = useState(10);
  const [wis, setWis] = useState(10);
  const [int, setInt] = useState(10);
  const [str, setStr] = useState(10);
  const [chr, setChr] = useState(10);
  const [charName, setCharName] = useState("Basic Info");
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
  const [armorArray, setArmorArray] = useState([]);
  const [weaponArray, setWeaponArray] = useState([]);
  const [learnedSkillsArray, setLearnedSkillsArray] = useState([]);
  const [skillPoints, setSkillPoints] = useState([]);
  const [rolled, setRolled] = useState(false);
  const [featArray, setFeatArray] = useState([]);
  const [featSlots, setFeatSlots] = useState(0);
  const [fontThemeFantasy, setFontThemeFantasy] = useState(false);
  const [munchkinMode, setMunchkinMode] = useState(false);
  const [basicEdited, setBasicEdited] = useState(false);

  const nameCheck = charName !== "" ? charName : "Basic Info";

  useEffect(() => {
    setUpdated(!updated);
  }, [setLearnedSkillsArray, learnedSkillsArray]);

  function weaponHeaderDisplay() {
    let counts = {};
    weaponArray.forEach(function (x) {
      counts[x.weaponName] = (counts[x.weaponName] || 0) + 1;
    });
    let weaponSet = [...new Set(weaponArray)];

    return weaponSet.map((item, index) => (
      <div key={index}>
        <p style={{ fontWeight: "bold" }}>
          {counts[item.weaponName] > 1 && counts[item.weaponName]}{" "}
          {item.weaponName} -{" "}
          <span style={{ fontWeight: "normal" }}>
            Damage: {item.dmgS}/{item.dmgM}
          </span>
        </p>
      </div>
    ));
  }

  function armorHeaderDisplay() {
    let counts = {};
    armorArray.forEach(function (x) {
      counts[x.armorName] = (counts[x.armorName] || 0) + 1;
    });
    let armorSet = [...new Set(armorArray)];

    return armorSet.map((item, index) => (
      <div key={index}>
        <p style={{ fontWeight: "bold" }}>
        {counts[item.armorName] > 1 && counts[item.armorName]} {item.armorName} -{" "}
          <span style={{ fontWeight: "normal" }}>
            Armor Bonus: {item.armorBonus}
          </span>
        </p>
      </div>
    ));
  }

  return (
    <div style={{ marginBottom: 100 }} className={fontThemeFantasy===false ? "container font-standard" : "container font-fantasy"}>
      <TopNav setFontThemeFantasy={setFontThemeFantasy} setMunchkinMode={setMunchkinMode}/>

      <br />
      {/* <Accordion defaultActiveKey={['0']} alwaysOpen> */}
      <Accordion alwaysOpen>
        <Accordion.Item onClick={()=>{if(charName != "Basic Info"){setBasicEdited(true)}}} eventKey="0">
          <Accordion.Header>
            <div className="accTitle">
              <h2>{nameCheck}</h2>
              {basicEdited===true &&
              <div>
              <p style={{ fontWeight: "bold" }}>
                {alignment}{" "}
                {selectedRace.charAt(0).toUpperCase() + selectedRace.slice(1)}{" "}
                {selectedClass}
              </p>
              <div>
                <span style={{ fontWeight: "bold" }}>Level: </span>
                <span style={{ marginRight: 10 }}>{level}</span>

                <span style={{ fontWeight: "bold" }}>Hit Points: </span>
                <span style={{ marginRight: 10 }}>{hp}</span>

                <span style={{ fontWeight: "bold" }}>Armor Class: </span>
                {ac}
              </div>
            </div>}</div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row justify-content-evenly">
              <div className="col-md-6">
                <CharInfo.CharName basicEdited={basicEdited} setBasicEdited={setBasicEdited} setCharName={setCharName} />
              </div>
              <div className="col">
                <RaceSelectDropdown setBasicEdited={setBasicEdited} setSelectedRace={setSelectedRace} />
              </div>
              <div className="col">
                <ClassSelectDropdown setBasicEdited={setBasicEdited} setSelectedClass={setSelectedClass} />
              </div>
              <div className="col">
                <CharInfo.AlignmentSelect setBasicEdited={setBasicEdited} setAlignment={setAlignment} />
              </div>
            </div>
            <div
              style={{ textAlign: "center" }}
              className="row justify-content-evenly"
            >
              <div className="col">
                {/* the disabled component allows for changing the level, but it's deactivated for now because
          I don't plan to build out all of the tables necessary to make a character beyond level 1 */}
                Level
                {/* <CharInfo.Level setLevel={setLevel} /> */}
                <p>1</p>
              </div>
              <div className="col">
                Hit Points
                <CharInfo.HitPoints
                  setHP={setHP}
                  level={level}
                  selectedClass={selectedClass}
                  con={con}
                  setCon={setCon}
                  selectedRace={selectedRace}
                  featArray={featArray}
                />
              </div>
              <div className="col">
                Armor Class
                <CharInfo.ArmorClass
                  setAC={setAC}
                  armorBonusTotal={armorBonusTotal}
                  setBaseAC={setBaseAC}
                  dex={dex}
                  selectedRace={selectedRace}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Abilities and Saves</h2>
              {rolled === true && (
                <div>
                  <span style={{ fontWeight: "bold" }}>Str </span>
                  {str} <span style={{ fontWeight: "bold" }}>Int </span>
                  {int} <span style={{ fontWeight: "bold" }}>Wis </span>
                  {wis} <span style={{ fontWeight: "bold" }}>Dex </span>
                  {dex} <span style={{ fontWeight: "bold" }}>Con </span>
                  {con} <span style={{ fontWeight: "bold" }}>Chr </span>
                  {chr}
                </div>
              )}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row justify-content-evenly">
              <div className="col">
                <NewScores
                  setStr={setStr}
                  setChr={setChr}
                  setInt={setInt}
                  setWis={setWis}
                  setDex={setDex}
                  setCon={setCon}
                  selectedRace={selectedRace}
                  setRolled={setRolled}
                  munchkinMode={munchkinMode}
                />
              </div>
              <div className="col">
                <CharInfo.SavingThrows
                  level={level}
                  selectedClass={selectedClass}
                  dex={dex}
                  con={con}
                  wis={wis}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Money</h2>
              {totalSilver > 0 && (
                <div>{totalSilver - armorMoney - weaponsMoney} silver</div>
              )}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p>Silver: {totalSilver - armorMoney - weaponsMoney}</p>
            <Inventory.StartingSilver
              setWeaponsMoney={setWeaponsMoney}
              setArmorMoney={setArmorMoney}
              totalSilver={totalSilver}
              selectedClass={selectedClass}
              setTotalSilver={setTotalSilver}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Armor</h2>
              {/* {armorArray.map((item, index) => (
                <div key={index}>
                  <p style={{ fontWeight: "bold" }}>
                    {item.armorName} -{" "}
                    <span style={{ fontWeight: "normal" }}>
                      Armor Bonus: {item.armorBonus}
                    </span>
                  </p>
                </div>
              ))} */}
              {armorHeaderDisplay()}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Inventory.ArmorMain
              setArmorBonusTotal={setArmorBonusTotal}
              totalSilver={totalSilver}
              setArmorMoney={setArmorMoney}
              updated={updated}
              setUpdated={setUpdated}
              setArmorArray={setArmorArray}
              weaponsMoney={weaponsMoney}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Weapons</h2>
              {/* {weaponArray.map((item, index) => (
                <div key={index}>
                  <p style={{ fontWeight: "bold" }}>
                    {item.weaponName} -{" "}
                    <span style={{ fontWeight: "normal" }}>
                      Damage: {item.dmgS}/{item.dmgM}
                    </span>
                  </p>
                </div>
              ))} */}
              {weaponHeaderDisplay()}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Inventory.WeaponsMain
              totalSilver={totalSilver}
              setWeaponsMoney={setWeaponsMoney}
              updated={updated}
              setUpdated={setUpdated}
              setWeaponArray={setWeaponArray}
              armorMoney={armorMoney}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Skills</h2>

              {learnedSkillsArray.length > 0 && (
                <div>
                  <div>
                    <span>
                      <em>Class</em>
                    </span>
                    {learnedSkillsArray
                      .filter((item) => item[selectedClass] === true)
                      .map((item, index) => (
                        <span key={index}> - {item.skillName}</span>
                      ))}
                  </div>
                  <div>
                    <span>
                      <em>Cross-class</em>
                    </span>
                    {learnedSkillsArray
                      .filter((item) => item[selectedClass] === false)
                      .map((item, index) => (
                        <span key={index}> - {item.skillName}</span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Skills.SkillsMain
              level={level}
              int={int}
              selectedRace={selectedRace}
              selectedClass={selectedClass}
              setLearnedSkillsArray={setLearnedSkillsArray}
              setSkillPoints={setSkillPoints}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Feats</h2>
              {featArray.map((item, index) => (
                <div key={index}>{item.featName}</div>
              ))}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Feats.FeatsMain
              featsSlots={featSlots}
              setFeatSlots={setFeatSlots}
              setFeatArray={setFeatArray}
              selectedRace={selectedRace}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <div className="accTitle">
              <h2>Spells</h2>
            </div>
          </Accordion.Header>
          <Accordion.Body>stuff here</Accordion.Body>
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
