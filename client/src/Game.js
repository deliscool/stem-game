// import React, {useState} from "react"
import React from "react"
import gameData from "./gameQuestions"

function Game() {

return (

     <div>

               
            {gameData.map((game, index)=>(
                <div key={game._id} index={index}>
                    <h3>{game.category}</h3>
                    <h3>{game.question}</h3>
    
                {game.options.map((option, index)=>(
                    <div key={index}>
                        <h3>{option.answer}</h3>
                        <h3>{option.isCorrect}</h3>
                    </div>
                ))}
        </div>
        ))}
    </div>
)}
export default Game;













{/* THIS WORKED
    // <div>{gameData[0].question} </div>
            //<div>{gameData[0].category}</div>
           // <div>{gameData[0].options[0].answer}</div>  */}





