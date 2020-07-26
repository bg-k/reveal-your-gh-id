import React, {useState} from "react";
import "../style.css"

const Presenter = ({id}) => {
  return(
    <div className="presenter-container">
      {id && <h2>{id}</h2>}
    </div>
  );
}

export default Presenter;