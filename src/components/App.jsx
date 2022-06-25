import Button from "./Button";
import React, {useState, useEffect} from 'react';

function App() {
  const [gamePattern, setGamePattern] = useState(["green", "yellow"])
  const [buttonHighlighted, setHighlight] =  useState(false);
  const [activeColour, setActiveColour] = useState("")

  const buttonColours =  ["red", "blue", "green", "yellow"];

  const nextColourSequence = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];

    setGamePattern(prevValue => {
      return ([...prevValue, randomChosenColour])
    })
  };

  const handleSequence = () => {
    console.log("entré a sequence")
    gamePattern.forEach((colour) => {
      setHighlight(true)
      setTimeout(setHighlight(true), 1000)
      console.log(colour)

    })
};

  return (
    <div>
      <h1 id="level-title">Press A Key to Start</h1>
      <div className="container">
      <div className="row">
        {buttonColours.map((colour, index) => {
          return ( 
            <Button 
            key={colour + index}
            id={colour}
            highlight={buttonHighlighted}
            audioFile={`../sounds/${colour}.mp3`}
            />
          )
        }
      )}
    </div>
    <button onClick={handleSequence}>Click</button>

  </div>
    </div>
  );
}

export default App;
