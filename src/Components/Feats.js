import { featsTable } from "../Classes/Skills/FeatsTables";
import { useEffect, useState } from "react";

let featArray = [];

export const FeatsMain = (props) => {
  const [featSlots, setFeatSlots] = useState(1);

  // const humanCheck = props.selectedRace==='human' ? 1 : 0

  useEffect(() => {
    if (props.selectedRace === "human") {
      setFeatSlots(featSlots + 1);
    } else {
      if (featSlots > 0) {
        setFeatSlots(featSlots - 1);
      }
    }
  }, [props.selectedRace]);

  const maxFeats = props.selectedRace==='human' ? 2 : 1

  //right now you can game the system by maxing out your feats, then changing the race to something else then back to human to get an extra slot

  useEffect(() => {
    props.setFeatSlots(featSlots);
  }, [featSlots, props]);

  function handleCheck(event, item) {
    if (event.target.checked === true) {
      if(featArray.length===maxFeats){
        return(event.target.checked=false,alert("Your feats are maxed out"))
      }
      featArray.push(item);
      props.setFeatArray(featArray);

      setFeatSlots(featSlots - 1);
    }
    if (event.target.checked === false) {
      let i = featArray.indexOf(item);
      featArray.splice(i, 1);
      props.setFeatArray(featArray);
      setFeatSlots(featSlots + 1);
    }
  }

  function featDisplay(filter) {
    return Object.values(featsTable)
      .sort((a, b) => a.featName.localeCompare(b.featName))
      .filter((item) => item.cat === filter)
      .map((item, index) => (
        <div key={index} className="form-check col-4">
          <input
            className="form-check-input"
            type="checkbox"
            value={item.featName}
            onChange={(event) => handleCheck(event, item)}
          />
          <label
            style={{ fontWeight: "bold" }}
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            {item.featName}
          </label>
          <span style={{ fontSize: "small" }}> {item.effect}</span>
          {item.pre ? (
            <p style={{ fontSize: "small" }}>
              <em>Prerequisite: {item.pre}</em>
            </p>
          ) : null}
        </div>
      ));
  }

  return (
    <div>
      <p>Available feats: {featSlots}</p>
      <h5>General Feats</h5>
      <div className="d-flex flex-row flex-wrap">{featDisplay("general")}</div>
      <h5>Item Creation Feats</h5>
      <div className="d-flex flex-row flex-wrap">{featDisplay("item")}</div>
      <h5>Metamagic Feats</h5>
      <div className="d-flex flex-row flex-wrap">
        {featDisplay("metamagic")}
      </div>
    </div>
  );
};
