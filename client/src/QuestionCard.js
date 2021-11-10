import React from "react"
import gameQuestions from "./gameQuestions"


function QuestionCard() {
    {gameQuestions.map((question, index)=>{
    return (
        <div key={question._id}>
            <p>Hey, I'm the QuestionCard component!</p>
            <p>{question.category}</p>
            <p>{question.question}</p>
            <p>{question.options}</p>
        </div>
    )})
}}
export default QuestionCard;