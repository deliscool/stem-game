import React, {useState} from "react"
import gameData from "./gameQuestions"
import "./Game.css"
import Score from "./Score"
// import Modal from "./Modal"
// import scienceBadge from "./images/chem-unsplash"
// import techBadge from "./images/tech-unsplash"
// import engBadge from "./images/robot-unsplash"
// import mathBadge from "./images/math-unsplash"


// import BadgeBox from "./BadgeBox"

//try react-modal for alerts
//try react-card-flip

function Game() {

const [playerScore, setPlayerScore] = useState(0)

// const [playerBadges, setPlayerBadges] = useState([])

// const icons = [scienceBadge, techBadge, engBadge, mathBadge]


const handleClick = (index, option) => {
    // console.log("icons:", icons)
     if (option.isCorrect === true) {
        handleCorrectAnswerClicks(option)
        alert("Stellar answer! That's correct!") 
     } else {
         alert("Oh, nice try, but that's not the answer.")
    }
}

const handleCorrectAnswerClicks = (option) => {
     if (option.isCorrect === true){
     setPlayerScore(playerScore + 100)
    //  handleBadges(playerScore)
     }
}

// const handleBadges = () => {
//     if (playerScore % 3 === 0 && playerScore > 0) {
//         // let newBadge = icons[Math.floor(Math.random() * 5)]
//         console.log("newBadge:", newBadge)
//         setPlayerBadges(playerBadges => [...playerBadges, newBadge])
//         console.log("player badges:", playerBadges)
//     }
// }

return (

     <div className="game-board">
        <div className="tallies">
            <div className="score-box">
                <Score 
                    score={playerScore}
                />
            </div>
            <div className="badge-box">
                {/* <BadgeBox
                    badges={playerBadges}
                /> */}
            </div>
        </div>

         <div className="game-card-container">
            
                <div className="s">S</div>
                <div className="t">T</div>
                <div className="e">E</div>
                <div className="t">M</div>

            {gameData.map((game, index)=>(
                <div>
                

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
     </div>

        ))}
           </div>
    </div>
)}

export default Game;



// import React from "react"
// import {Icon} from "@iconify/react"
// import locationIcon from "@iconify/icons-mdi/dog-side"



// const LocationMarker = ({lat, lng, onClick})=> {
//     return(
              
//         <div className="location-marker" onClick={onClick}>
//             <Icon 
//             icon={locationIcon} 
//             className="location-icon"
//             />
//         </div>
//     )}

// export default 