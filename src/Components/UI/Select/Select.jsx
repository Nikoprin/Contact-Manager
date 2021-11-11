import React from "react";
import classes from "./Select.module.css";
export default function Select({ defaultOption, options, value, onChange }) {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" disabled={true}>
        {defaultOption}
      </option>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}