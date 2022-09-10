import {useEffect, useState} from 'react';
import * as RaceBonuses from '../Races/AbilBonuses';
import { Button } from 'react-bootstrap';


function rando(min, max){
    return Math.floor(Math.random() * max) + min;
}

function roll(){ 
    return (
        rando(1, 6) + rando(1, 6) + rando(1, 6)
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
        <p>STR: {roll() +racialBonus.bonusStr}</p>
        <p>INT: {roll() +racialBonus.bonusInt}</p>
        <p>WIS: {roll() +racialBonus.bonusWis}</p>
        <p>DEX: {roll() +racialBonus.bonusDex}</p>
        <p>CON: {roll() +racialBonus.bonusCon}</p>
        <p>CHR: {roll() +racialBonus.bonusChr}</p>
        <p>{rerollButton}</p>
</div> 
        
    )
}