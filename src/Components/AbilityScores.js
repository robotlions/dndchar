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

export const NewScores = (props) => {
  useEffect(() => {
    if (newRoll == true) {
      setNewRoll(false);
    }
  });

  const [newRoll, setNewRoll] = useState(false);

  const rerollButton = <Button onClick={() => setNewRoll(true)}>Reroll</Button>;
  const racialBonus = RaceBonuses[props.selectedRace];

  return (
    <div>
      <table>
        <tr>
          <th>Ability</th>
          <th>Score</th>
          <th>Racial Bonus</th>
          <th>Modifier</th>
        </tr>
        <tr>
          <td>STR</td>
          <td>{roll() + racialBonus.bonusStr}</td>
          <td>
            {racialBonus.bonusStr <= 0
              ? racialBonus.bonusStr
              : racialBonus.bonusStr}
          </td>
          <td>TBD</td>
        </tr>
        <tr>
          <td>INT</td>
          <td>{roll() + racialBonus.bonusInt}</td>
          <td>
            {racialBonus.bonusInt <= 0
              ? racialBonus.bonusInt
              : racialBonus.bonusInt}
          </td>
          <td>TBD</td>
        </tr>
        <tr>
          <td>WIS</td>
          <td>{roll() + racialBonus.bonusWis}</td>
          <td>
            {racialBonus.bonusWis <= 0
              ? racialBonus.bonusWis
              : racialBonus.bonusWis}
          </td>
          <td>TBD</td>
        </tr>
        <tr>
          <td>DEX</td>
          <td>{roll() + racialBonus.bonusDex}</td>
          <td>
            {racialBonus.bonusDex <= 0
              ? racialBonus.bonusDex
              : racialBonus.bonusDex}
          </td>
          <td>TBD</td>
        </tr>
        <tr>
          <td>CON</td>
          <td>{roll() + racialBonus.bonusCon}</td>
          <td>
            {racialBonus.bonusCon <= 0
              ? racialBonus.bonusCon
              : racialBonus.bonusCon}
          </td>
          <td>TBD</td>
        </tr>
        <tr>
          <td>CHR</td>
          <td>{roll() + racialBonus.bonusChr}</td>
          <td>
            {racialBonus.bonusChr <= 0
              ? racialBonus.bonusChr
              : racialBonus.bonusChr}
          </td>
          <td>TBD</td>
        </tr>
      </table>
      <p>{rerollButton}</p>
    </div>
  );
};
