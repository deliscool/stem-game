// import React, { useState } from "react"
import React from "react"
import gameData from "./gameQuestions"

export default function LearnBack() {
    // const [isFlipped, setIsFlipped] = useState("false")

    function handleClick(e) {
         e.preventDefault();
        //  setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
       }
        return (
            <div className="learn-container">
                {gameData.map((game, index) => (
                    <div className="learn-box" key={game._id} index={index}>
                       <p>{game.question}</p>
                    </div>
                ))}
                <button onClick={handleClick}>Flip Me</button>
           </div>
        )
    } 