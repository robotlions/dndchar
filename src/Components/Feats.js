import { featsTable } from "../Classes/Skills/FeatsTables";
import { useEffect, useState } from "react";

let featArray = [];


export const FeatsMain = (props) => {
  

  const [featSlots, setFeatSlots] = useState(0);

  useEffect(()=>{
    props.setFeatSlots(featSlots-1)
}, [featSlots]);

  function handleCheck(event, item) {
    if (event.target.checked === true) {
      featArray.push(item);
    props.setFeatArray(featArray)

      setFeatSlots(featSlots-1)
    }
  }

  const featDisplay = Object.values(featsTable).map((item, index) => (
    <div key={index} className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={item.featName}
        onChange={(event) => handleCheck(event, item)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {item.featName}
      </label>
    </div>
  ));

  return featDisplay;
};
