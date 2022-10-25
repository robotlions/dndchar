import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { skillTables } from "../Classes/Skills/SkillsTables";

const classSkillPoints = {
  Barbarian: 4,
  Bard: 6,
  Cleric: 2,
  Druid: 4,
  Fighter: 2,
  Monk: 4,
  Paladin: 2,
  Ranger: 6,
  Rogue: 8,
  Sorcerer: 2,
  Wizard: 2,
};

function calculateModifier(abil) {
  return -5 + Math.floor(1 * (abil / 2));
}

let learnedSkills = [];

export const SkillEntry = (props) => {
  let classSkill = props.item[props.selectedClass];
  const [skillRank, setSkillRank] = useState(0);

  function addSkillRank() {
    if (skillRank === 0) {
      learnedSkills.push(props.item);
      props.triggerArray();
    }

    if (classSkill === true && skillRank === props.level + 3) {
      return alert("This skill is maxed out.");
    }

    if (classSkill === false && skillRank === props.level + 1) {
      return alert("This skill is maxed out.");
    }

    if (props.skillPoints === 0) {
      return alert("Not enough skill points");
    }
    if (props.skillPoints <= -1) {
      return alert(
        "Not enough skill points. Did you remember to roll your character's abilities?"
      );
    }
    if (classSkill === true) {
      setSkillRank(skillRank + 1);
      props.setSkillPoints(props.skillPoints - 1);
    } else {
      setSkillRank(skillRank + 1);
      props.setSkillPoints(props.skillPoints - 2);
    }
  }

  function subtractSkillRank() {
    if (skillRank === 1) {
      let i = learnedSkills.indexOf(props.item);
      learnedSkills.splice(i, 1);
      props.triggerArray();
    }

    if (skillRank === 0) {
      return alert("This skill can't go any lower.");
    }
    if (classSkill === true) {
      setSkillRank(skillRank - 1);
      props.setSkillPoints(props.skillPoints + 1);
    } else {
      setSkillRank(skillRank - 1);
      props.setSkillPoints(props.skillPoints + 2);
    }
  }

  return (
    <div style={{fontSize: "small"}}>
      <Button variant="light" onClick={() => addSkillRank()}>
        +
      </Button>{" "}
      {skillRank}{" "}
      <Button variant="light" onClick={() => subtractSkillRank()}>
        -
      </Button>{" "}<em>
      {props.item.skillName}
      </em>
    </div>
  );
};

export const SkillsMain = (props) => {
  const [skillPoints, setSkillPoints] = useState(
    classSkillPoints[props.selectedClass] + calculateModifier(props.int)
  );

  let raceSkillBonus = props.selectedRace === "human" ? 4 : 0;

  useEffect(() => {
    setSkillPoints(
      4 *
        (classSkillPoints[props.selectedClass] + calculateModifier(props.int)) +
        raceSkillBonus
    );
  }, [props.int, props.selectedClass, props.selectedRace, raceSkillBonus]);

  useEffect(() => {
    props.setSkillPoints(skillPoints);
  }, [skillPoints, props]);
  // useEffect(()=>{
  //   props.setLearnedSkillsArray(learnedSkills);
  // }, [learnedSkills])

  function triggerArray() {
    props.setLearnedSkillsArray(learnedSkills);
  }

  const skillDisplayClass = Object.values(skillTables)
    .filter((item) => item[props.selectedClass] === true)
    .map((item, index) => (
      <div key={index} className="col-4">
        <SkillEntry
          triggerArray={triggerArray}
          level={props.level}
          selectedClass={props.selectedClass}
          item={item}
          skillPoints={skillPoints}
          setSkillPoints={setSkillPoints}
        />
      </div>
    ));

  const skillDisplayCrossClass = Object.values(skillTables)
    .filter((item) => item[props.selectedClass] === false)
    .map((item, index) => (
      <div key={index} className="col-4">
        <SkillEntry
          triggerArray={triggerArray}
          level={props.level}
          selectedClass={props.selectedClass}
          item={item}
          skillPoints={skillPoints}
          setSkillPoints={setSkillPoints}
        />
      </div>
    ));

  return (
    <>
      <h5>
        Class Skills - <em>1 point</em>
      </h5>
      <div className="d-flex flex-row flex-wrap">{skillDisplayClass}</div>
      <h5>
        Cross-Class Skills - <em>2 points</em>
      </h5>
      <div className="d-flex flex-row flex-wrap">{skillDisplayCrossClass}</div>

      <div>Skill Points: {skillPoints}</div>
    </>
  );
};
