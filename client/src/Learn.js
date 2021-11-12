// import React, { useState } from "react"
import React from "react"
import gameData from "./gameQuestions"
import "./Learn.css"
import Card from "./Card"
import img from "./images/2.png"



function Learn() {


    console.log(gameData)
    return (
        <div>

            <img src={img} className="how-to-img"></img>
            <div className="learn-container">
                
                {gameData.map((game, index) => {
                    return <Card Card={Card} game={game} index={index} key={gameData._id}/>
                })}
            </div>
            <div className="extensions">
                <h1>Extensions</h1>
                <h2>Websites with more information:</h2>
                <div>
                    <a href="https://ngcproject.org/" target="_blank"> National Girls Collaboration Project</a>
                    <a href="https://www.nms.org/" target="_blank"> National Math and Science Initiative</a>
                </div>
                <div>
                    <a href="https://www.wepan.org/" target="_blank"> Women in Engineering Network</a>
                    <a href="" target="_blank"> Women in Stem Association</a>
                </div>
                
            </div>
        </div>
    )
}

export default Learn;