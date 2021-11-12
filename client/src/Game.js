import React, {useState} from "react"
import gameData from "./gameQuestions"
import "./Game.css"
// import Modal from "./Modal"
import Score from "./Score"

//try react-modal for alerts
//try react-card-flip

function Game() {

const [playerScore, setPlayerScore] = useState(0)

const handleClick = (index, option) => {
     if (option.isCorrect === true) {
        handleCorrectAnswerClicks(option)
        alert("Stellar answer! That's correct!") 
     } else {
         alert("Oh, nice try, but that's not the answer.")
    }
}

const handleCorrectAnswerClicks = (option) => {
     if (option.isCorrect === true){
     setPlayerScore(playerScore + 1)
     }
}    

return (

     <div>
        <div>
        <Score 
            score={playerScore}
        />
        </div>

         <div className="game-card-container">
            {gameData.map((game, index)=>(

                <div className="question-text" key={game._id} index={index}>
                    <h3 className="category-title">{game.category}</h3>
                    <h3 className="question">{game.question}</h3>
    
                {game.options.map((option, index)=>(
                    <div key={index} className="answer-btns">
                            <h3>{option.isCorrect}</h3>
                        <button id={index} className="option-btns" onClick={()=>handleClick(index, option)}>{option.answer}</button>
                       
                    </div>
            
                ))}
        </div>
     

        ))}
           </div>
    </div>
)}

export default Game;






