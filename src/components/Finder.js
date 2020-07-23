import React, {useState} from "react";
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
      <input type="text" 
             name="username"
             placeholder="Enter your GitHub user name"
             onChange={e => setUsername(e.target.value)} />
      <button onClick={() => fetchId()}>Find</button>

      {(!isInitialState && !id) && <NotFound />}
      {(id) && <Presenter id={id} />}
    </div>
  )
}

export default Finder;