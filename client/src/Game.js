// import React, {useState} from "react"
import React from "react"
import gameData from "./gameQuestions"
import "./Game.css"

//try react-card-flip???

function Game() {

const handleClick = (index, option) => {
        option.isCorrect === true 
        ? 
        alert("Stellar answer! That's correct!") 
        : 
        alert("Oh, nice try, but that's not the answer.")
    }

return (

     <div>
         {/* <div className="categories">
             <div>S</div>
             
             <div>T</div>

             <div>E</div>

             <div>M</div>

             <div>STATS</div>
         </div> */}

         <div className="game-card-container">
            {gameData.map((game, index)=>(

                <div className="question-text" key={game._id} index={index}>
                    <h3 className="category-title">{game.category}</h3>
                    <h3 id="question">{game.question}</h3>
    
                {game.options.map((option, index)=>(
                    <div key={index} className="answer-btns">
                            <h3>{option.isCorrect}</h3>
                        <button id={index} onClick={()=>handleClick(index, option)}>{option.answer}</button>
                       
                    </div>
            
                ))}
        </div>
     

        ))}
           </div>
    </div>
)}
export default Game;






