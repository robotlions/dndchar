import {useEffect, useState} from 'react';
import * as RaceBonuses from '../Races/AbilBonuses';
import { Button } from 'react-bootstrap';


function rando(min, max){
    return Math.floor(Math.random() * max) + min;
}

function roll(){ 

    return (
        [rando(1,6), rando(1, 6),  rando(1, 6),  rando(1, 6)]
        .sort((a,b) => a-b)
        .slice(1)
        .reduce((a,b) => a+b, 0)
    )
}



export const NewScores = (props) =>{

    useEffect(()=>{
        if(newRoll==true){
            setNewRoll(false)
        }
    });

  const [newRoll, setNewRoll] = useState(false);

    const rerollButton = <Button onClick={()=>setNewRoll(true)}>Reroll</Button>
    const racialBonus = RaceBonuses[props.selectedRace]

    return(
       
        <div>
        <p>Ability - Racial Bonus</p>
        <p>STR: {roll() +racialBonus.bonusStr} {racialBonus.bonusStr <=0 ? `(${racialBonus.bonusStr})` : `(+${racialBonus.bonusStr})`}</p>
        <p>INT: {roll() +racialBonus.bonusInt} {racialBonus.bonusInt <=0 ? `(${racialBonus.bonusInt})` : `(+${racialBonus.bonusInt})`}</p>
        <p>WIS: {roll() +racialBonus.bonusWis} {racialBonus.bonusWis <=0 ? `(${racialBonus.bonusWis})` : `(+${racialBonus.bonusWis})`}</p>
        <p>DEX: {roll() +racialBonus.bonusDex} {racialBonus.bonusDex <=0 ? `(${racialBonus.bonusDex})` : `(+${racialBonus.bonusDex})`}</p>
        <p>CON: {roll() +racialBonus.bonusCon} {racialBonus.bonusCon <=0 ? `(${racialBonus.bonusCon})` : `(+${racialBonus.bonusCon})`}</p>
        <p>CHR: {roll() +racialBonus.bonusChr} {racialBonus.bonusChr <=0 ? `(${racialBonus.bonusChr})` : `(+${racialBonus.bonusChr})`}</p>
        <p>{rerollButton}</p>
</div> 
        
    )
}