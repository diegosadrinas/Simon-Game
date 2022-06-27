import React from "react";
import sounds from "../sounds/sounds";

const Sound = (props) => {
    const handleSound = (id) => {
        const playButtonSound = () => {
            let soundToPlay = sounds[id]
            let audio = new Audio(soundToPlay);
            audio.play();
        }
    }

    return (
        <>
            onClick={handleSound(props.id)}
        </>
    )
}

export default Sound;