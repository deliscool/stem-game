// import React, { useState } from "react"
import React from "react"
import gameData from "./gameQuestions"
import ReactCardFlip from 'react-card-flip'
import LearnFront from "./LearnFront"
import LearnBack from "./LearnBack"
import "./Learn.css"



function Learn() {
    // const [isFlipped, setIsFlipped] = useState("false")

//    function handleClick(e) {
//         e.preventDefault();
        // setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
    //   }

    console.log(gameData)
    return (
        <div>
            <ReactCardFlip>
                <LearnFront >
                </LearnFront>
                <LearnBack >
                </LearnBack>
            </ReactCardFlip>
           

        </div>
    )
    }

export default Learn;