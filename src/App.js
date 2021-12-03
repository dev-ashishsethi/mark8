import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "🔥": "Fire",
  "🦍": "Gorilla",
  "😉": "Winking Face",
  "🙂": "Slightly Smiling Face"
};

var emoji = Object.keys(emojiDict); //converts dictionary to array
export default function App() {
  var [meaning, setmeaning] = useState("");

  function inputHandler(event) {
    var input = event.target.value;
    setmeaning(emojiDict[input]); //accessing value from dictionary and setting it
  }

  function clickHandler(emoji) {
    setmeaning(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji Interpretor</h1>

      <input onChange={inputHandler}></input>

      <h2>Meaning will be shown below</h2>
      <h3>{meaning}</h3>
      <ul>
        {emoji.map((item) => {
          return (
            <li
              onClick={() => clickHandler(item)}
              style={{
                margin: "0.5rem",
                cursor: "pointer",
                display: "inline",
                fontSize: "2rem"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
