import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState("unnu");
  const onaddClick = () => {
    console.log("btnclick");
    if (count >= 10) {
      alert("value is not more than 10");
    } else {
      setCount(count + 1);
    }

    // setCount1(setCount1);
  };
  const onRemoveClick = () => {
    console.log("btnclick");
    console.log("btnclick");
    if (count <= 0) {
      alert("value is not less than 0");
    } else {
      setCount(count - 1);
    }

    // setCount1(setCount1);
  };
  return (
    <div className="container">
      <IconButton aria-label="add" onClick={onaddClick} size="large">
        <AddIcon fontSize="inherit" />
      </IconButton>
      <h1>{count}</h1>
      <IconButton aria-label="remove" onClick={onRemoveClick} size="large">
        <RemoveIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default App;
