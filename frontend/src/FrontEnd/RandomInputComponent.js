import React, { useState } from "react";
import NumberList from "./NumberList";
import "./frontend.css";

export default function RandomInputComponent({ arr, setArr, setItem }) {
  const [inputValue, setInputValue] = useState("");
  //   console.log("ric");
  function handleChange(e) {
    const newValue = e.target.value;
    if (
      /^\d*$/.test(newValue) &&
      Number(newValue) >= 0 &&
      Number(newValue) <= 100
    ) {
      setInputValue(newValue);
      setItem(newValue);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue !== "") {
      setArr((arr) => [...arr, inputValue]); // Update the array
    }
    setInputValue("");
  }

  return (
    <>
      <p className="header">Guess a Number from 1 to 100</p>

      <form onSubmit={handleSubmit} className="formdiv">
        <input
          className="InputClass"
          onChange={handleChange}
          type="text"
          placeholder="Enter a Number"
          value={inputValue}
        />
        <button className="FormButton" type="submit">
          Submit
        </button>
      </form>

      <h1>{inputValue}</h1>
      <NumberList arr={arr} />
    </>
  );
}
