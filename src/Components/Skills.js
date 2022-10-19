import { skillTables } from "../Classes/Skills/SkillsTables"



export const SkillList = (props) => {

    return(
        <p>Skill list</p>
    )
}

export const SkillSelect = (props) => {

    const skillDisplay = Object.values(skillTables).map((item, index) => 
    <div class="form-check">
  <input onClick={()=>alert(item.skillName)} class="form-check-input" type="checkbox" value="" id={item.skillName} />
  <label class="form-check-label" for="flexCheckDefault">
    {item.skillName}
  </label>
</div>
    )

    return(
        skillDisplay
    )
}