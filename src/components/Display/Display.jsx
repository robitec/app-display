import React, {useEffect, useState} from "react";

import "./display.css";

const Display = ({
  name = "Bascula",
  value = 0,
  id = 0,
  status = false,
  units = "",
  dotStatus = false,
  ...props
}) => {

  const [dotClassName, setdotClassName] = useState('');

  useEffect(() => {
    if(id == 2) {
      if (dotStatus)
        setdotClassName('dot-success');
      else
        setdotClassName('dot-error');
    } else {
      setdotClassName('hidden');
    }
  });
  return (
    <div className={"repetidor-display--container bordered-section" + (status ? "" : " error-section")}>
      <div className="repetidor-display--title">
        <span className="display-title">{name}</span>
        <span class={`dot ${dotClassName}`}></span>
      </div>
      <div className="repetidor-display--content">
        <div className="repetidor-display--value">
          <span className={(status ? "success-value" : "error-value")}>{value} {units}</span>
        </div>
      </div>
    </div>
  );
};

export default Display;
