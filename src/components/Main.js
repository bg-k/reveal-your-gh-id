import React, {Component} from "react";
import Finder from "./Finder"

class Main extends Component {
  render() {
    return(
      <div>
        <h1>Reveal your GitHub ID</h1>
        <Finder />
      </div>
    )
  }
}

export default Main;
