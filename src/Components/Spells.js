import * as SpellLists from "../Spells/SpellLists";
import * as KnownSpells from "../Spells/KnownSpells";
import { useState } from "react";



export const SpellListing = (props) =>{

    let lvlCheck = KnownSpells[props.selectedClass][props.level];
    let spellObject = SpellLists[props.selectedClass];
   const displayList = Object.values(spellObject)
     .filter((item) => lvlCheck[item.level] > 0)
     .map((item, index) => <p key={index}>{item.spellName}</p>)

    return(displayList)
}



export const SpellsMain = (props) => {

    const [level0, setLevel0] = useState(KnownSpells[props.selectedClass][props.level][0]);
    const [level1, setLevel1] = useState(KnownSpells[props.selectedClass][props.level][1]);



  
   
    return(
        <div>
            <p>Available Spells: Lvl 0: {level0} - Lvl 1: {level1}</p>
        <SpellListing selectedClass={props.selectedClass} level={props.level} />
        </div>
    )
};
