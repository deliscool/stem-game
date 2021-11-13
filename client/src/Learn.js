// import React, { useState } from "react"
import React from "react"
import gameData from "./gameQuestions"
import "./Learn.css"
import Card from "./Card"
// import Modal from "./Modal"  //remember to take this out of here & put into Game componet



function Learn() {


    console.log(gameData)
    return (
        <div>
            {/* <Modal /> */}
                
            <div className="learn-container">
                
                {gameData.map((game, index) => {
                    return <Card Card={Card} game={game} index={index} key={gameData._id}/>
                })}
            </div>
        </div>
    )
}

export default Learn;


