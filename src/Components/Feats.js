import { featsTable } from "../Classes/Skills/FeatsTables";
import { useEffect, useState } from "react";

let featArray = [];


export const FeatsMain = (props) => {
  

  const [featSlots, setFeatSlots] = useState(0);

  useEffect(()=>{
    props.setFeatSlots(featSlots-1)
}, [featSlots, props]);

  function handleCheck(event, item) {
    if (event.target.checked === true) {
      featArray.push(item);
    props.setFeatArray(featArray)

      setFeatSlots(featSlots-1)
    }
    if (event.target.checked === false){
      let i = featArray.indexOf(item);
      featArray.splice(i, 1);
      props.setFeatArray(featArray)
      setFeatSlots(featSlots+1);
    }
  }

  function featDisplay(filter){
    return(
    Object.values(featsTable).sort((a,b)=>a.featName.localeCompare(b.featName)).filter((item)=>item.cat===filter).map((item, index) => (
    <div key={index} className="form-check col-4">
      <input
        className="form-check-input"
        type="checkbox"
        value={item.featName}
        onChange={(event) => handleCheck(event, item)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        <span style={{fontWeight:"bold"}}>{item.featName}<br/></span><span style={{fontSize: "small"}}> {item.effect}</span>{item.pre ? <p style={{fontSize: "small"}}><em>Prerequisite: {item.pre}</em></p> : null}
      </label>
    </div>
  )))};

  return (
  <div>
    <h5>General Feats</h5>
  <div className="d-flex flex-row flex-wrap">
    {featDisplay("general")}</div>
    <h5>Item Creation Feats</h5>
  <div className="d-flex flex-row flex-wrap">
    {featDisplay("item")}</div>
    <h5>Metamagic Feats</h5>
  <div className="d-flex flex-row flex-wrap">
    {featDisplay("metamagic")}</div>
    </div>
)};
