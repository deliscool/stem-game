import React from "react"

function QuestionCard(props) {
    console.log("QuestionCard props:", props)
    return(
        <div>
            <p>{props.game.category}</p>
            <p>{props.game.question}</p>
            <p>{props.game.options}</p>
        </div>
    )
}

export default QuestionCard;