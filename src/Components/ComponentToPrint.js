import React, { forwardRef, useRef, useState } from "react";


export const ComponentToPrint = forwardRef((props, ref) => {
    return (
      <div ref={ref}>My cool content here!</div>
    );
  });