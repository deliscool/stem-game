import React, { useState } from "react"
import gameData from "./gameQuestions"

export default function LearnFront() {
    const [isFlipped, setIsFlipped] = useState("false")

    function handleClick(e) {
         e.preventDefault();
         setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
       }
    return (
        <div className="learn-container">
            {gameData.map((game, index) => (
                <div className="learn-box" key={game._id} index={index}>
                    {game.options.filter(item => {
                        return item.isCorrect
                    }).map((option, index)=>(
                        <div key={index}>
                            <h1>{option.answer}</h1>
                        </div>
                    ))}
                    <button onClick={handleClick}>Flip Me</button>
                </div>
            ))}
       </div>
    )
}