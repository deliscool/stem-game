import React, { useState } from 'react'

function Card(props) {
    let [isFlipped, setIsFlipped] = useState(false)
    let key = props.key
    let game = props.game
    let index = props.index
    
    console.log(isFlipped)
    return (
    <div>
        {!isFlipped && 
           <div className="learn-box" index={index} key={key} onClick={() => setIsFlipped(!isFlipped)}>
                {game.options.filter(item => {
                    return item.isCorrect
                    }).map((option, index)=>(
                        <div key={index}>
                            <h1>{option.answer}</h1>       
                        </div>
                    ))}
            </div> }
        ;
        {isFlipped && 
            <div className="learn-box" key={key} index={index} onClick={() => setIsFlipped(!isFlipped)} >
                <p>{game.question}</p>
            </div>
        }
           
    </div>
    )  
}
    
export default Card