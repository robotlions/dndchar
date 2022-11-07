import React, { forwardRef } from "react";
import dndLogo from "../images/dndLogo.png";
import * as RaceBonuses from "../Races/AbilBonuses";

export const ComponentToPrint = forwardRef((props, ref) => {
  function calculateModifier(abil) {
    return -5 + Math.floor(1 * (abil / 2));
  }

  function armorHeaderDisplay() {
    let counts = {};
    props.armorArray.forEach(function (x) {
      counts[x.armorName] = (counts[x.armorName] || 0) + 1;
    });
    let armorSet = [...new Set(props.armorArray)];

    return armorSet.map((item, index) => (
      <div className="row" key={index}>
        <div className="col">
          <p style={{ fontWeight: "bold" }}>
            {counts[item.armorName] > 1 && counts[item.armorName]}{" "}
            {item.armorName}
          </p>
        </div>

        <div className="col">
          <p>Armor Bonus: {item.armorBonus}</p>
        </div>
        <div className="col">
          <p>Max Dex Bonus: {item.maxDexBonus}</p>
        </div>
        <div className="col">
          <p>Armor Check: {item.armorCheck}</p>
        </div>
        <div className="col">
          <p>Spell Fail: {item.spellFail}</p>
        </div>
        <div className="col">
          <p>Speed 30': {item.speed30}</p>
        </div>
        <div className="col">
          <p>Speed 20': {item.speed20}</p>
        </div>
      </div>
    ));
  }

  function weaponHeaderDisplay() {
    let counts = {};
    props.weaponArray.forEach(function (x) {
      counts[x.weaponName] = (counts[x.weaponName] || 0) + 1;
    });
    let weaponSet = [...new Set(props.weaponArray)];

    return weaponSet.map((item, index) => (
      <div className="row" key={index}>
        <div className="col" style={{ fontWeight: "bold" }}>
          {counts[item.weaponName] > 1 && counts[item.weaponName]}{" "}
          {item.weaponName}
        </div>
        <div className="col">
          <p>Damage, Small: {item.dmgS}</p>
        </div>
        <div className="col">
          <p>Damage, Medium: {item.dmgM}</p>
        </div>
        <div className="col">
          <p>Critical: {item.critical}</p>
        </div>
        <div className="col">
          <p>Range: {item.range}</p>
        </div>
        <div className="col">
          <p>Type: {item.type}</p>
        </div>
      </div>
    ));
  }

  const racialBonus = RaceBonuses[props.selectedRace];

  return (
    <div className="container" ref={ref}>
      <div className="row">
        <div
          className="col-12"
          style={{ textAlign: "center", marginBottom: 20, paddingTop: 50 }}
        >
          <img
            alt="vintage d&d logo"
            style={{ maxWidth: "65%" }}
            src={dndLogo}
          ></img>
          <h4 style={{ marginTop: 10 }}>Character Record Sheet</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-4">Name: {props.charName}</div>
        <div className="col-4">Class: {props.selectedClass}</div>
        <div className="col-4">Race: {props.selectedRace}</div>
      </div>
      <div className="row" style={{ marginBottom: 20 }}>
        <div className="col-4">Alignment: {props.alignment}</div>
        <div className="col-4">Hit Points: {props.hp}</div>
        <div className="col-4">Level: {props.level}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Ability</th>
            <th>Roll</th>
            <th>Racial Bonus</th>
            <th>Total Score</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STR</td>
            <td>{props.str}</td>
            <td>
              {racialBonus.bonusStr <= 0
                ? racialBonus.bonusStr
                : racialBonus.bonusStr}
            </td>
            <td className="totalScore">{props.str + racialBonus.bonusStr}</td>

            <td>{calculateModifier(props.str + racialBonus.bonusStr)}</td>
          </tr>
          <tr>
            <td>DEX</td>
            <td>{props.dex}</td>
            <td>
              {racialBonus.bonusDex <= 0
                ? racialBonus.bonusDex
                : racialBonus.bonusDex}
            </td>
            <td className="totalScore">{props.dex + racialBonus.bonusDex}</td>

            <td>{calculateModifier(props.dex + racialBonus.bonusDex)}</td>
          </tr>
          <tr>
            <td>CON</td>
            <td>{props.con}</td>
            <td>
              {racialBonus.bonusCon <= 0
                ? racialBonus.bonusCon
                : racialBonus.bonusCon}
            </td>
            <td className="totalScore">{props.con + racialBonus.bonusCon}</td>

            <td>{calculateModifier(props.con + racialBonus.bonusCon)}</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>{props.int}</td>
            <td>
              {racialBonus.bonusInt <= 0
                ? racialBonus.bonusInt
                : racialBonus.bonusInt}
            </td>
            <td className="totalScore">{props.int + racialBonus.bonusInt}</td>

            <td>{calculateModifier(props.int + racialBonus.bonusInt)}</td>
          </tr>
          <tr>
            <td>WIS</td>
            <td>{props.wis}</td>
            <td>
              {racialBonus.bonusWis <= 0
                ? racialBonus.bonusWis
                : racialBonus.bonusWis}
            </td>
            <td className="totalScore">{props.wis + racialBonus.bonusWis}</td>

            <td>{calculateModifier(props.wis + racialBonus.bonusWis)}</td>
          </tr>

          <tr>
            <td>CHR</td>
            <td>{props.chr}</td>
            <td>
              {racialBonus.bonusChr <= 0
                ? racialBonus.bonusChr
                : racialBonus.bonusChr}
            </td>
            <td className="totalScore">{props.chr + racialBonus.bonusChr}</td>

            <td>{calculateModifier(props.chr + racialBonus.bonusChr)}</td>
          </tr>
        </tbody>
      </table>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col">
          <p>
            <span style={{ fontSize: 20 }}>Silver:</span> {props.silver}
          </p>
        </div>
      </div>
      <div className="row">
        <h5>Armor</h5>
        {armorHeaderDisplay()}
      </div>
      <div className="row">
        <h5>Weapons</h5>
        {weaponHeaderDisplay()}
      </div>
      <div className="row">
        <h5>Skills</h5>
        {props.learnedSkillsArray.length > 0 && (
          <div>
            <div>
              <span>
                <em>Class</em>
              </span>
              {props.learnedSkillsArray
                .filter((item) => item[props.selectedClass] === true)
                .map((item, index) => (
                  <span key={index}> - {item.skillName}</span>
                ))}
            </div>
            <div>
              <span>
                <em>Cross-class</em>
              </span>
              {props.learnedSkillsArray
                .filter((item) => item[props.selectedClass] === false)
                .map((item, index) => (
                  <span key={index}> - {item.skillName}</span>
                ))}
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <h5>Feats</h5>
        {props.featArray.map((item, index) => (
                  <div key={index}>{item.featName}</div>
                ))}
      </div>
    </div>
  );
});
