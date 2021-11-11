// import React, {useState} from "react"
import React from "react"
import gameData from "./gameQuestions"

function Game() {

return (
    <div className="questions-here">
        {gameData.map((game, index)=>
            <div key={game._id} index={index}>
               <h3>{game.question}</h3>
            </div>
        )}
    </div>
)}
    
export default Game;






//THIS WORKED
    // <div>{gameData[0].question} </div>
            //<div>{gameData[0].category}</div>
           // <div>{gameData[0].options[0].answer}</div>





