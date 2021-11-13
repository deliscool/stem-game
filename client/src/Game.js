import React, {useState} from "react"
import gameData from "./gameQuestions"
import "./Game.css"
import Score from "./Score"
import Box from "./Box"
// import Modal from "./Modal"
// import {GlobalStyle} from "./globalStyles"
// import styled from "styled-components"

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh; 
//     padding:  16px 32px;
//     border-radius: 4px;
//     border: none;
//     background: #141414;
//     color: #fff;
//     font-size: 24px;
//     cursor: pointer;
// `

// const Button = styled.button`
//     min-width: 100px;
// `
// import Modal from "./Modal"
// import scienceBadge from "./images/chem-unsplash"
// import techBadge from "./images/tech-unsplash"
// import engBadge from "./images/robot-unsplash"
// import mathBadge from "./images/math-unsplash"
// import BadgeBox from "./BadgeBox"

//try react-modal for alerts

function Game() {
const [playerScore, setPlayerScore] = useState(0)

// const [showModal, setShowModal] = useState(false)

// const [playerBadges, setPlayerBadges] = useState([])

// const icons = [scienceBadge, techBadge, engBadge, mathBadge]

// const handleModal = () => {
//     setShowModal(prev => !prev)
// }


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
<div>
    <div className="score-box">
        <Score score={playerScore}/>
    </div>



     <div className="game-board">
        <div className="tallies">
            {/* <div className="score-box">
                <Score 
                    score={playerScore}
                />
            </div> */}
            {/* <div className="badge-box"> */}
                {/* <BadgeBox
                    badges={playerBadges}
                /> */}
            {/* </div> */}
        </div>

         <div className="game-card-container">
            
                <div className="s">S</div>
                <div className="t">T</div>
                <div className="e">E</div>
                <div className="m">M</div>

            {gameData.map((game, index)=> {
                return <Box Box={Box} game={game} index={index} handleClick={handleClick}/>
            
            })}
           </div>
    </div>

          {/* <Container>
                <Button onClick={openModal}>It's a Modal!</Button>
                <Modal 
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
                <GlobalStyle/>
         </Container> */}
</div>
)}

export default Game;




