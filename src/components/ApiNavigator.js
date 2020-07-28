import React, {useState} from "react";
import {SEARCH_URL} from "../api";

const ApiNavigator = () => {
  return(
    <p >
      Don't believe? Let's check it in the <a href={SEARCH_URL} target="_blank">GitHub api with your user name.</a>
    </p>
  );
};

export default ApiNavigator;