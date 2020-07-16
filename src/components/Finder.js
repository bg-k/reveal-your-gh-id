import React, {useState} from "react";
import findId from "../api";
import Presenter from "./Presenter";

const Finder = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");

  return(
    <div>
      <input type="text" 
             name="username"
             placeholder="Enter your GitHub user name"
             onChange={e => setUsername(e.target.value)} />
      <button onClick={() => findId(username).then(id => setId(id))}>Find</button>

      <Presenter id={id} />
    </div>
  )
}

export default Finder;