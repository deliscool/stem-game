import React, { useState } from 'react'
import img from "./images/question.png"

function Card(props) {
    let [isFlipped, setIsFlipped] = useState(false)

    let game = props.game
    let index = props.index
    let handleClick = props.handleClick


    console.log(isFlipped)
    return (
        <div>
        <div className="question-text" key={game._id} index={index}>
            {!isFlipped &&
            <div onClick={() => setIsFlipped(!isFlipped)}>
                <h3 className="category-title">{game.category}</h3>
                <h1 className="question-mark">?</h1>
            </div>
            } ;
            {isFlipped &&
                <div>
                <h3 className="question" onClick={() => setIsFlipped(!isFlipped)}>{game.question}</h3>
            {game.options.map((option, index)=>(
                    <div key={index} className="answer-btns">
                        <h3>{option.isCorrect}</h3>
                        <button id={index} className="option-btns" onClick={()=>handleClick(index, option)}>{option.answer}</button>
                    </div>
            ))}</div>}
        </div>
        </div>
    )  
}
    
export default Card


