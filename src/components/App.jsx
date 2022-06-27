import Button from "./Button";
import React, {useState, useEffect} from 'react';

function App() {
  const [gamePattern, setGamePattern] = useState(["green", "yellow"])
  const [buttonHighlighted, setHighlight] =  useState(false);
  const [userSequence, setUserSequence] = useState([])
  const [activeColor, setActiveColor] = useState("")
  const buttonColors =  ["red", "blue", "green", "yellow"];

  const nextColourSequence = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];

    setGamePattern(prevValue => {
      return ([...prevValue, randomChosenColor])
    })
  };

  const handleSequence = (audioFile) => {
    console.log("entré a sequence")
    gamePattern.forEach((color) => {
      setHighlight(true)
      setTimeout(() => {
        setHighlight(false);
      }, 150)

    })
};

  const handleColorPressedByUser = (id) => {
    setUserSequence(prevValue => {
      return [...prevValue, id ]
    })
  };

  return (
    <div>
      <h1 id="level-title">Press A Key to Start</h1>
      <div className="container">
      <div className="row">
        {buttonColors.map((color, index) => {
          return (
            <Button 
              key={color + index}
              id={color}
              highlight={buttonHighlighted}
              audioFile={color}
              colorPressed={handleColorPressedByUser}
            />
          )
        }
      )}
    </div>
    <button onClick={handleSequence}>handleSequence</button>
  </div>
    </div>
  );
}

export default App;
