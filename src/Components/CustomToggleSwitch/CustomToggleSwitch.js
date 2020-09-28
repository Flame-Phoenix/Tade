import React from 'react';
import './CustomToggleSwitch.css'

const CustomToggleSwitch = ({ name, isToggled, onToggled }) => {

  return (

    <div className="toggle-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggled}
        className="toggle-switch-checkbox"
        name={name}
        id={name}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>

  );
}

export default CustomToggleSwitch;