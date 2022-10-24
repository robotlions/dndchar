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

  const featDisplay = Object.values(featsTable).map((item, index) => (
    <div key={index} className="form-check col-3">
      <input
        className="form-check-input"
        type="checkbox"
        value={item.featName}
        onChange={(event) => handleCheck(event, item)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {item.featName} {item.pre ? <p><em>Prerequisite: {item.pre}</em></p> : null}
      </label>
    </div>
  ));

  return <div className="d-flex flex-row flex-wrap">{featDisplay}</div>;
};
