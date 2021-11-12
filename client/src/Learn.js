import React, { useState } from "react"
import gameData from "./gameQuestions"

import "./Learn.css"
import Card from "./Card"



function Learn() {

    console.log(gameData)
    return (
        <div>
                
            <div className="learn-container">
                
                {gameData.map((game, index) => {
                    return <Card Card={Card} game={game} index={index} key={gameData._id}/>
                })}
            </div>
                
        </div>
    )
}

export default Learn;