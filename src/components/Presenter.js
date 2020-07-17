import React, {useState} from "react";

const Presenter = (props) => {

  return(
    <div className="aaa">
      <h2>Your GitHub id</h2>
      <h2>{props.id}</h2>
    </div>
  );
}

export default Presenter;