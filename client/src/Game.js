import React from "react"
import gameData from "./gameQuestions"
// import QuestionCard from "QuestionCard"

function Game() {

// const letsPlay = gameData.map((game, index)=>
//    <QuestionCard
//         key={game._id}
//         index={index} 
//         question={game.question}
//     />
// )
    return (
        <div>
            <div>{gameData[0].question} </div>
            <div>{gameData[0].category}</div>
            <div>{gameData[0].options[0].answer}</div>

                {/* <div className="list-answers">
                    {gameData[0].options[0].answers.map((answerChoice, index)=>(
                    <button>{answerChoice[0].answer}</button>     
                ))}
                </div> */}
            </div>
        )}

export default Game;