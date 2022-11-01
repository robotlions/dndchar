import * as SpellLists from "../Spells/SpellLists";
import * as KnownSpells from "../Spells/KnownSpells";
import { useEffect, useState } from "react";

let spArray = [];




export const SpellListing = (props) => {
   /* eslint-disable no-eval */


   function handleCheck(event, item) {

    let func = eval(`props.setLevel${item.level}`);
    let tar = eval(`props.level${item.level}`);
  
    if (event.target.checked === true) {
      if (tar === 0) {
        return (event.preventDefault(),
        alert("No more spell slots"));
      }
      else{
      func(tar - 1);
      spArray.push(item);
      props.triggerUpdate();
      }
  
    }
    if (event.target.checked === false) {
      func(tar + 1);
    }
  }

  

  let lvlCheck = KnownSpells[props.selectedClass][props.level];
  let spellObject = SpellLists[props.selectedClass];
  function displayList(lvlFilter){ return( Object.values(spellObject)
    .filter((item) => lvlCheck[item.level] > 0)
    .filter((item)=>item.level===lvlFilter)
    .map((item, index) => (
      <div key={index} className="form-check col-4">
        <input
          className="form-check-input"
          type="checkbox"
          value={item.spellName}
          onChange={(event) => handleCheck(event, item)}
        />
        <label
          style={{ fontWeight: "bold" }}
          className="form-check-label"
          htmlFor="flexCheckDefault"
        >
          {item.spellName}
        </label>
      </div>
    )))};

  return (
  <div><h6>Level 0</h6>
  <div className="d-flex flex-row flex-wrap">
    {displayList(0)}
 </div>
 
 {displayList(1).length > 0 && <><h6>Level 1</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(1)}</div></>}
  {displayList(2).length > 0 && <><h6>Level 2</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(2)}</div></>}
  {displayList(3).length > 0 && <><h6>Level 3</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(3)}</div></>}
  {displayList(4).length > 0 && <><h6>Level 4</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(4)}</div></>}
  {displayList(5).length > 0 && <><h6>Level 5</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(5)}</div></>}
  {displayList(6).length > 0 && <><h6>Level 6</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(6)}</div></>}
  {displayList(7).length > 0 && <><h6>Level 7</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(7)}</div></>}
  {displayList(8).length > 0 && <><h6>Level 8</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(8)}</div></>}
  {displayList(9).length > 0 && <><h6>Level 9</h6>
 <div className="d-flex flex-row flex-wrap">
  {displayList(9)}</div></>}
  </div>);
};

export const SpellsMain = (props) => {
  const [level0, setLevel0] = useState(null);
  const [level1, setLevel1] = useState(null);
  const [level2, setLevel2] = useState(null);
  const [level3, setLevel3] = useState(null);
  const [level4, setLevel4] = useState(null);
  const [level5, setLevel5] = useState(null);
  const [level6, setLevel6] = useState(null);
  const [level7, setLevel7] = useState(null);
  const [level8, setLevel8] = useState(null);
  const [level9, setLevel9] = useState(null);

  function setSpellSlotsInState(key, value) {
     /* eslint-disable no-eval */
    let input = eval(key);
    input(value);
  }
  
  function triggerUpdate(){
    props.setSpellArray(spArray);
    props.setUpdated(!props.updated);
  }

  useEffect(() => {
    Object.entries(
      KnownSpells[props.selectedClass][props.level]
    ).map(([key, value], index) => setSpellSlotsInState(`setLevel${key}`, value));
  }, [props.level, props.selectedClass]);

  return (
    <div>
      <p>
        Available Spells: <br/>
        {level0 && `Level 0: ${level0}`}{" "}
        {level1 && `Level 1: ${level1}`} {level2 && `Level 2: ${level2}`}
        {level3 && `Level 3: ${level3}`} {level4 && `Level 4: ${level4}`}{" "}
        {level5 && `Level 5: ${level5}`}
        {level6 && `Level 6: ${level6}`} {level7 && `Level 7: ${level7}`}{" "}
        {level8 && `Level 8: ${level8}`} {level9 && `Level 9: ${level9}`}
      </p>
      <div>
        <SpellListing
          level0={level0}
          setLevel0={setLevel0}
          level1={level1}
          setLevel1={setLevel1}
          level2={level2}
          setLevel2={setLevel2}
          level3={level3}
          setLevel3={setLevel3}
          level4={level4}
          setLevel4={setLevel4}
          level5={level5}
          setLevel5={setLevel5}
          level6={level6}
          setLevel6={setLevel6}
          level7={level7}
          setLevel7={setLevel7}
          level8={level8}
          setLevel8={setLevel8}
          level9={level9}
          setLevel9={setLevel9}
          selectedClass={props.selectedClass}
          level={props.level}
          triggerUpdate={triggerUpdate}
        />
      </div>
    </div>
  );
};
