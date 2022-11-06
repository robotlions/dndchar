import React, { forwardRef} from "react";


export const ComponentToPrint = forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <p>Name: {props.charName}</p>
        <p>Class: {props.selectedClass}</p>
        <p>Race: {props.selectedRace}</p>
        <p>Level: {props.level}</p>
        <p>Str: {props.str}</p>
        <p>Dex: {props.dex}</p>
        <p>Con: {props.con}</p>
        <p>Int: {props.int}</p>
        <p>Wis: {props.wis}</p>
        <p>Chr: {props.chr}</p>
      </div>
    );
  });