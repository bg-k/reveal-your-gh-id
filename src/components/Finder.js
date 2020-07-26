import React, {useState} from "react";
import "../style.css"
import findId from "../api";
import Presenter from "./Presenter";
import NotFound from "./NotFound";

const Finder = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [isInitialState, setIsInitialState] = useState(true);

  const fetchId = () => {
    setId("");
    findId(username)
    .then(id => setId(id))
    .catch(err => console.log(err))
    .finally(() => setIsInitialState(false));
  }

  return(
    <div>
      <div className="finder-container">
        <input type="text" 
              name="username"
              placeholder="Enter your GitHub user name"
              className="finder-input"
              onChange={e => setUsername(e.target.value)} />
        
        <button onClick={() => fetchId()}
                className="find-button">Find</button>
      </div>

      <div className="finder-fetch-result">
        {(!isInitialState && !id) && <NotFound />}
        {(id) && <Presenter id={id} />}
      </div>
    </div>
  )
}

export default Finder;