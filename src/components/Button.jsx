import React, {useState} from "react";
import sounds from "../sounds/sounds";

const Button = (props) => {
    const [buttonPressed, setButton] = useState(false);
    
    const playButtonSound = (color) => {
        let sound = sounds[color]
        let audio = new Audio(sound);
        audio.play();
    };

    const handleClick = (audioFile) => {
        setButton(true);
        playButtonSound(audioFile)
        setTimeout(() => {
           setButton(false);
        }, 200);

        return props.colorPressed(props.id)
    };

    return (
    <div 
        type="button" 
        id={props.id}
        className={`btn ${props.id} ${buttonPressed ? "pressed" : "" } ${props.highlight ? "highlight" : ""}`} 
        onClick={() => {handleClick(props.audioFile)}}
    >
    </div>
    );
};


export default Button;