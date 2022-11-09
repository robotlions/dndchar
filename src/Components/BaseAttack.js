import * as BaseAttackTables from '../Classes/BaseAttackTables';

export const BaseAttack = (props) => {

    function calculateModifier(abil){
        return -5 + Math.floor(1*(abil/2))
      }

const attackMod = calculateModifier(props.str)

const displayBaseAttacks = BaseAttackTables[props.selectedClass][props.level].map((item, index)=><span key={index}>+{item+attackMod}   </span>)

    return(<div style={{textAlign: "center"}}>
<h6 style={{fontWeight: "bold"}}>Base Attack Bonus</h6>
        {displayBaseAttacks}
        </div>
    )
}