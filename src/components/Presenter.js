import React, {useState} from "react";
import NotFound from "./NotFound";

const Presenter = ({id}) => {
  return(
    <div className="aaa">
      {id &&  
        <div>
          <h2>Your GitHub id</h2>
          <h2>{id}</h2>
        </div>
      }
    </div>
  );
}

export default Presenter;