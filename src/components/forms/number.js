import '../Input.css'
import React, { useState } from "react";

// React.forwardRef allows this component to provide the reference info to the parent calling it
const NumberInput = React.forwardRef(({ label, passedValue }, ref) => {
  return (
    <div>
      <label className='titles'>
        {label}
      </label>
      <br /><br />
      <input
        type="number"
        className='number-styling'
        ref={ref}
        defaultValue={passedValue}
      ></input>
    </div>
  );
});

export default NumberInput;