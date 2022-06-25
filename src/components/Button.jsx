import React, {useState} from "react";

const Button = (props) => {
    const [buttonPressed, setButton] = useState(false);
    
    const playButtonSound = (audioFile) => {
        let audio = new Audio(audioFile);
        audio.play();
    };

    const handleClick = (audioFile) => {
        setButton(true);
        playButtonSound(audioFile)
        setTimeout(() => {
           setButton(false);
        }, 200);
        return props.id
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