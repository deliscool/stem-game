// import React, {useState} from "react"
import React from "react"
import gameData from "./gameQuestions"
import "./Game.css"

//try react-card-flip???

function Game() {

return (

     <div>
         <div className="categories">
             <div>S</div>
             
             <div>T</div>

             <div>E</div>

             <div>M</div>

             <div>STATS</div>
         </div>

               
            {gameData.map((game, index)=>(
                <div className="question-text" key={game._id} index={index}>
                    <h3>{game.category}</h3>
                    <h3>{game.question}</h3>
    
                {game.options.map((option, index)=>(
                    <div key={index} className="answer-btns">
                        <button>{option.answer}</button>
                        <h3>{option.isCorrect}</h3>
                    </div>
                ))}
        </div>
        ))}
    </div>
)}
export default Game;






