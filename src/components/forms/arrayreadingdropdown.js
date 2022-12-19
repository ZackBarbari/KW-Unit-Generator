import '../Input.css'
import React, { useState } from "react";

// React.forwardRef allows this component to provide the reference info to the parent calling it
const ArrayReadingDropdown = React.forwardRef(
  ({ label, passedValue, passedOptions, onChange, invalid, excludedItems }, ref) => {
    const [options, setOptions] = useState(passedOptions);
    const [value, setValue] = useState(passedValue);
    let excludedMap = new Map();

    if (excludedItems !== undefined) {
      excludedMap.set("None.", 0)
      Object.keys(excludedItems).forEach(key => {
        excludedMap.set(excludedItems[key].name, excludedItems[key]);
        console.log(excludedItems[key].name, excludedItems[key])
      });
    }

    return (
      <div>
        <label className='titles'>
          {label}
        </label>
        <br /><br />
        {!invalid && (
        <select
          className='dropdown-styling'
          ref={ref}
          defaultValue={value}
          onChange={onChange}
        >
          {Object.entries(options).map(([k, v]) => (
            excludedMap.get(v.name) !== undefined ? null : 
            <option value={k} key={k}>
              {v.name}
            </option>
          ))}
        </select>
        )}
        {invalid && (
          <>
          {value !== ref.current.value ? setValue(ref.current.value) : null}
          <select
          className='greydropdown-styling'
          ref={ref}
        >
          <option value={ref.current.value} key={ref.current.value}>
            {""}
          </option>
        </select>
        </>
        )}
      </div>
    );
  }
);

export default ArrayReadingDropdown;