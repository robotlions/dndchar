import { useEffect, useState } from "react";
import * as RaceBonuses from "../Races/AbilBonuses";
import { Button } from "react-bootstrap";

function rando(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function roll() {
  return [rando(1, 6), rando(1, 6), rando(1, 6), rando(1, 6)]
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((a, b) => a + b, 0);
}



function calculateModifier(abil){
  return -5 + Math.floor(1*(abil/2))
}

export const NewScores = (props) => {
  useEffect(() => {
    if (newRoll === true) {
      let conRoll=roll();
      let dexRoll=roll();
      setStr(roll());
      setInt(roll());
      setWis(roll());
      setDex(dexRoll);
      setCon(conRoll);
      props.setCon(conRoll);
      props.setDex(dexRoll);
      setChr(roll());
      setNewRoll(false);
    }
  });

  const [newRoll, setNewRoll] = useState(false);
  const [str, setStr] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [con, setCon] = useState(0);
  const [dex, setDex] = useState(0);
  const [chr, setChr] = useState(0);


  const rerollButton = <Button onClick={() => rollButton()}>Roll Dice</Button>;
  const racialBonus = RaceBonuses[props.selectedRace];

  function rollButton(){
    if(props.selectedRace==="Select"){
      return alert("Please select a race first")
    }
    else{
      setNewRoll(true)
    }
  }


  return (
    <div>
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
          <td>{str}</td>
          <td>
            {racialBonus.bonusStr <= 0
              ? racialBonus.bonusStr
              : racialBonus.bonusStr}
          </td>
          <td className="totalScore">{str + racialBonus.bonusStr}</td>

          <td>{calculateModifier(str+racialBonus.bonusStr)}</td>
        </tr>
        <tr>
          <td>INT</td>
          <td>{int}</td>
          <td>
            {racialBonus.bonusInt <= 0
              ? racialBonus.bonusInt
              : racialBonus.bonusInt}
          </td>
          <td className="totalScore">{int + racialBonus.bonusInt}</td>

          <td>{calculateModifier(int+racialBonus.bonusInt)}</td>
        </tr>
        <tr>
          <td>WIS</td>
          <td>{wis}</td>
          <td>
            {racialBonus.bonusWis <= 0
              ? racialBonus.bonusWis
              : racialBonus.bonusWis}
          </td>
          <td className="totalScore">{wis + racialBonus.bonusWis}</td>

          <td>{calculateModifier(wis+racialBonus.bonusWis)}</td>
        </tr>
        <tr>
          <td>DEX</td>
          <td>{dex}</td>
          <td>
            {racialBonus.bonusDex <= 0
              ? racialBonus.bonusDex
              : racialBonus.bonusDex}
          </td>
          <td className="totalScore">{dex + racialBonus.bonusDex}</td>

          <td>{calculateModifier(dex+racialBonus.bonusDex)}</td>
        </tr>
        <tr>
          <td>CON</td>
          <td>{con}</td>
          <td>
            {racialBonus.bonusCon <= 0
              ? racialBonus.bonusCon
              : racialBonus.bonusCon}
          </td>
          <td className="totalScore">{con + racialBonus.bonusCon}</td>

          <td>{calculateModifier(con+racialBonus.bonusCon)}</td>
        </tr>
        <tr>
          <td>CHR</td>
          <td>{chr}</td>
          <td>
            {racialBonus.bonusChr <= 0
              ? racialBonus.bonusChr
              : racialBonus.bonusChr}
          </td>
          <td className="totalScore">{chr + racialBonus.bonusChr}</td>

          <td>{calculateModifier(chr+racialBonus.bonusChr)}</td>
        </tr>
        </tbody>
      </table>
      <p>{rerollButton}</p>
    </div>
  );
};
