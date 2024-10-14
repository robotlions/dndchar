import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState, useRef } from "react";
import { RaceSelectDropdown } from "./Components/RaceSelect";
import { ClassSelectDropdown } from "./Components/ClassSelect";
import * as CharInfo from "./Components/CharInfo";
import * as Inventory from "./Components/Inventory";
import { NewScores } from "./Components/AbilityScores";
import * as Skills from "./Components/Skills";
import { TopNav } from "./Components/NavBar";
import { QuickScores } from "./Components/QuickScores";
import { Accordion } from "react-bootstrap";
import * as Feats from "./Components/Feats";
import * as Spells from "./Components/Spells";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { ComponentToPrint } from "./Components/ComponentToPrint";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { BottomNav } from "./Components/BottomNav";
import { BaseAttack } from "./Components/BaseAttack";

function App() {
  const [modeChosen, setModeChosen] = useState(false);
  const [quickMode, setQuickMode] = useState(false);
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
  const [spellArray, setSpellArray] = useState([]);
  const [learnedSkillsArray, setLearnedSkillsArray] = useState([]);
  const [skillPoints, setSkillPoints] = useState([]);
  const [rolled, setRolled] = useState(false);
  const [featArray, setFeatArray] = useState([]);
  const [featSlots, setFeatSlots] = useState(0);
  const [fontThemeFantasy, setFontThemeFantasy] = useState(false);
  const [munchkinMode, setMunchkinMode] = useState(false);
  const [basicEdited, setBasicEdited] = useState(false);
  const [spellCaster, setSpellCaster] = useState(false);
  const [show, setShow] = useState(false);
  const [baseAttack, setBaseAttack] = useState(0);
  const [quickCreate, setQuickCreate] = useState(false);

  // const firebaseConfig = {
  //   apiKey: "AIzaSyBSuAK85OYWD-ABAyXvlu1CNmlI1z-Mkb8",
  //   authDomain: "dnd35charactergenerator.firebaseapp.com",
  //   projectId: "dnd35charactergenerator",
  //   storageBucket: "dnd35charactergenerator.appspot.com",
  //   messagingSenderId: "505264646208",
  //   appId: "1:505264646208:web:e9888e241db95ebea0d7a5",
  //   measurementId: "G-GP3E2PN6X6",
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref = useRef();

  const nameCheck = charName !== "" ? charName : "Basic Info";
  const fontCheck = fontThemeFantasy === true ? "eagle-lake" : "gotham-black";

  useEffect(() => {
    if (
      selectedClass === "Wizard" ||
      selectedClass === "Bard" ||
      selectedClass === "Paladin" ||
      selectedClass === "Sorcerer" ||
      selectedClass === "Druid" ||
      selectedClass === "Ranger" ||
      selectedClass === "Cleric"
    ) {
      setSpellCaster(true);
    } else {
      setSpellCaster(false);
    }
  }, [selectedClass]);

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
          {counts[item.armorName] > 1 && counts[item.armorName]}{" "}
          {item.armorName} -{" "}
          <span style={{ fontWeight: "normal" }}>
            Armor Bonus: {item.armorBonus}
          </span>
        </p>
      </div>
    ));
  }

  function rando(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function quickRollStats() {
    let statArray = [];
    let largestInt;
    let abilFunc;
    let abilArray = [setStr, setInt, setWis, setDex, setCon, setChr];
    for (let i = 0; i < 6; i++) {
      let x = rando(3, 6) + rando(3, 6) + rando(3, 6);
      statArray.push(Number(x));
    }
    largestInt = Math.max(...statArray);
    // console.log(largestInt)

    // console.log(statArray)

    // if(selectedClass==="Fighter"){
    //   abilFunc = setStr
    // }

    if (["Fighter", "Paladain", "Barbarian"].includes(selectedClass)) {
      abilFunc = setStr;
    } else if (["Rogue", "Ranger"].includes(selectedClass)) {
      abilFunc = setDex;
    } else if (["Sorcerer, Bard"].includes(selectedClass)) {
      abilFunc = setChr;
    } else if (["Druid", "Cleric", "Monk"].includes(selectedClass)) {
      abilFunc = setWis;
    } else if (["Wizard"].includes(selectedClass)) {
      abilFunc = setInt;
    } else {
      abilFunc = setCon;
    }

    abilFunc(largestInt);
    statArray.splice(statArray.indexOf(largestInt), 1);
    abilArray.splice(abilArray.indexOf(abilFunc), 1);

    for (let i = 0; i < abilArray.length; i++) {
      let r = rando(0, abilArray.length - 1);
      abilFunc = abilArray[r];
      abilFunc(statArray[0]);
      statArray.splice(0, 1);
      abilArray.splice(abilArray.indexOf(abilFunc), 1);
    }
  }

  function createInstantCharacter() {
    setLevel(1);
    setCharName("Chuckles");
    quickRollStats();
    setQuickCreate(true);
  }

  if (modeChosen === false) {
    return (
      <div style={{ minHeight: 1000 }}>
        <TopNav
          fontThemeFantasy={fontThemeFantasy}
          setFontThemeFantasy={setFontThemeFantasy}
          setMunchkinMode={setMunchkinMode}
        />
        <div
          className={
            fontThemeFantasy === false
              ? "container font-standard"
              : "container font-fantasy"
          }
          style={{ textAlign: "center" }}
        >
          <h5 style={{ paddingTop: "20px", marginBottom: "50px" }}>
            How would you like to create your Dungeons and Dragons 3.5
            character?
          </h5>
          <div className="row">
            <div className="col-lg-4" style={{ marginBottom: "10px" }}>
              <div>
                <h4 style={{ fontFamily: fontCheck }}>
                  Lawful Mode
                  <br />
                  (Standard)
                </h4>
                Roll up a first-level character in accordance with the{" "}
                <em>Player's Handbook</em>.
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    variant="secondary"
                    onClick={() => setModeChosen(true)}
                  >
                    Lawful
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: "10px" }}>
              <div>
                <h4 style={{ fontFamily: fontCheck }}>
                  Neutral Mode
                  <br />
                  (Quick)
                </h4>
                Instantly create a randomized character with the touch of a
                button.
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setQuickMode(true);
                      setModeChosen(true);
                    }}
                  >
                    Neutral
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div>
                <h4 style={{ fontFamily: fontCheck }}>
                  Chaotic Mode
                  <br />
                  (Custom)
                </h4>
                Manually set level and ability scores and start with a million
                silver.
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setMunchkinMode(true);
                      setModeChosen(true);
                    }}
                  >
                    Chaotic
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <br />

          <BottomNav />
        </div>
      </div>
    );
  }

  if (modeChosen === true && quickMode === true) {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <h5>Choose your race, class and alignment, then hit Go!</h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <RaceSelectDropdown
              setBasicEdited={setBasicEdited}
              setSelectedRace={setSelectedRace}
            />
          </div>
          <div className="col-auto">
            <ClassSelectDropdown
              setBasicEdited={setBasicEdited}
              setSelectedClass={setSelectedClass}
            />
          </div>
          <div className="col-auto">
            <CharInfo.AlignmentSelect
              setBasicEdited={setBasicEdited}
              setAlignment={setAlignment}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <button onClick={() => quickRollStats()}>Roll Again</button>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <p>Name: {charName !== "Basic Info" ? charName : ""}</p>
          </div>
          <div className="col-2">
            <p>Level: {level}</p>
          </div>
          <div className="col-2">
            <p>
              Race:{" "}
              {selectedRace.charAt(0).toUpperCase() + selectedRace.slice(1)}
            </p>
          </div>
          <div className="col-2">
            <p>Class: {selectedClass}</p>
          </div>
          <div className="col-2">
            <p>Alignment: {alignment}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <QuickScores
              str={str}
              chr={chr}
              int={int}
              wis={wis}
              dex={dex}
              con={con}
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
          <div className="col-md-1">
            <p></p>
          </div>
          <div className="col-md-2" style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}>Hit Points:</span>
            <CharInfo.HitPoints
              setHP={setHP}
              level={level}
              selectedClass={selectedClass}
              con={con}
              setCon={setCon}
              selectedRace={selectedRace}
              featArray={featArray}
            />
            <br />
            <span style={{ fontWeight: "bold" }}>
              Base Armor Class:
              <br />
              <span style={{ fontWeight: "normal" }}>
                (not inluding armor bonuses)
              </span>
            </span>
            <CharInfo.ArmorClass
              setAC={setAC}
              armorBonusTotal={armorBonusTotal}
              setBaseAC={setBaseAC}
              dex={dex}
              selectedRace={selectedRace}
            />
          </div>
          <div className="col-md-2" style={{ textAlign: "center" }}>
            <CharInfo.SavingThrows
              level={level}
              selectedClass={selectedClass}
              dex={dex}
              con={con}
              wis={wis}
            />
          </div>
          <div className="col-md-1" style={{ textAlign: "center" }}>
            <BaseAttack
              str={str}
              level={level}
              selectedClass={selectedClass}
              setBaseAttack={setBaseAttack}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="col-1">
              <button onClick={() => createInstantCharacter()}>Create!</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p style={{ fontWeight: "bold" }}>Weapons and Armor</p>
            <Inventory.WeaponsAndArmorQuick
              setArmorBonusTotal={setArmorBonusTotal}
              totalSilver={totalSilver}
              setArmorMoney={setArmorMoney}
              updated={updated}
              setUpdated={setUpdated}
              setArmorArray={setArmorArray}
              weaponsMoney={weaponsMoney}
              weaponArray={weaponArray}
              setWeaponArray={setWeaponArray}
              selectedClass={selectedClass}
              quickCreate={quickCreate}
              setQuickCreate={setQuickCreate}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <p style={{ fontWeight: "bold" }}>Skills</p>
            <Skills.SkillsQuick 
            learnedSkillsArray={learnedSkillsArray}
            setLearnedSkillsArray={setLearnedSkillsArray}
            selectedClass={selectedClass}
            quickCreate={quickCreate}
            setQuickCreate={setQuickCreate}
            int={int}
            selectedRace={selectedRace}
            />
          </div>
          <div className="col-2">
            <p style={{ fontWeight: "bold" }}>Feats</p>
          </div>
          <div className="col-3">
            <p style={{ fontWeight: "bold" }}>Spells</p>
          </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{ marginBottom: 100 }}
        className={
          fontThemeFantasy === false
            ? "container font-standard"
            : "container font-fantasy"
        }
      >
        <TopNav
          fontThemeFantasy={fontThemeFantasy}
          setFontThemeFantasy={setFontThemeFantasy}
          setMunchkinMode={setMunchkinMode}
        />
        <div style={{ textAlign: "center" }}>
          <br />
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Start Over
          </Button>
        </div>
        <br />
        {/* <Accordion defaultActiveKey={['0']} alwaysOpen> */}
        <Accordion alwaysOpen>
          <Accordion.Item
            onClick={() => {
              if (charName !== "Basic Info") {
                setBasicEdited(true);
              }
            }}
            eventKey="0"
          >
            <Accordion.Header>
              <div className="accTitle">
                <h2 style={{ fontFamily: fontCheck }}>{nameCheck}</h2>
                {basicEdited === true && (
                  <div>
                    <p style={{ fontWeight: "bold" }}>
                      {alignment}{" "}
                      {selectedRace.charAt(0).toUpperCase() +
                        selectedRace.slice(1)}{" "}
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
                  </div>
                )}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="row justify-content-evenly">
                <div className="col-md-6">
                  <CharInfo.CharName
                    basicEdited={basicEdited}
                    setBasicEdited={setBasicEdited}
                    setCharName={setCharName}
                  />
                </div>
                <div className="col">
                  <RaceSelectDropdown
                    setBasicEdited={setBasicEdited}
                    setSelectedRace={setSelectedRace}
                  />
                </div>
                <div className="col">
                  <ClassSelectDropdown
                    setBasicEdited={setBasicEdited}
                    setSelectedClass={setSelectedClass}
                  />
                </div>
                <div className="col">
                  <CharInfo.AlignmentSelect
                    setBasicEdited={setBasicEdited}
                    setAlignment={setAlignment}
                  />
                </div>
              </div>
              <div
                style={{ textAlign: "center" }}
                className="row justify-content-evenly"
              >
                <div className="col">
                  Level
                  {munchkinMode === true ? (
                    <CharInfo.Level
                      setBasicEdited={setBasicEdited}
                      setLevel={setLevel}
                    />
                  ) : (
                    <p>1</p>
                  )}
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
                <h2 style={{ fontFamily: fontCheck }}>Abilities and Saves</h2>
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
                <div className="col">
                  <BaseAttack
                    str={str}
                    level={level}
                    selectedClass={selectedClass}
                    setBaseAttack={setBaseAttack}
                  />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="accTitle">
                <h2 style={{ fontFamily: fontCheck }}>Money</h2>
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
                munchkinMode={munchkinMode}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="accTitle">
                <h2 style={{ fontFamily: fontCheck }}>Armor</h2>
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
                <h2 style={{ fontFamily: fontCheck }}>Weapons</h2>
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
                <h2 style={{ fontFamily: fontCheck }}>Skills</h2>

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
                <h2 style={{ fontFamily: fontCheck }}>Feats</h2>
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
                level={level}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <div className="accTitle">
                <h2 style={{ fontFamily: fontCheck }}>Spells</h2>
                {/* {spellArray.map((item, index)=><p key={index}>{item.spellName}</p>)} */}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {spellCaster === true ? (
                <Spells.SpellsMain
                  level={level}
                  updated={updated}
                  setUpdated={setUpdated}
                  selectedClass={selectedClass}
                  setSpellArray={setSpellArray}
                  int={int}
                  wis={wis}
                  chr={chr}
                  // spellCaster={spellCaster}
                />
              ) : (
                `${selectedClass} is not a spellcasting class.`
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="row" style={{ textAlign: "center", marginTop: 20 }}>
          <div className="col-md-12">
            <Button
              name="printCharacterButton"
              variant="secondary"
              onClick={(e) => handleShow()}
            >
              {/* <Button name="printCharacterButton" variant="secondary" onClick={(e)=>{console.log(e)}}> */}
              View and Print Character
            </Button>
            <br />
            <br />
            <Button
              variant="secondary"
              onClick={() => window.location.reload()}
            >
              Start Over
            </Button>
          </div>
        </div>
      </div>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Print Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ComponentToPrint
              ref={ref}
              charName={charName}
              selectedClass={selectedClass}
              selectedRace={selectedRace}
              level={level}
              str={str}
              int={int}
              wis={wis}
              dex={dex}
              con={con}
              chr={chr}
              alignment={alignment}
              hp={hp}
              silver={totalSilver - weaponsMoney - armorMoney}
              armorArray={armorArray}
              weaponArray={weaponArray}
              learnedSkillsArray={learnedSkillsArray}
              featArray={featArray}
              spellArray={spellArray}
              baseAttack={baseAttack}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactToPrint bodyClass="pdfWindow" content={() => ref.current}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <p>
                    <Button variant="secondary" onClick={handlePrint}>
                      Print
                    </Button>
                  </p>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
            <p>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <BottomNav />
    </>
  );
}

export default App;
