import React from "react"
import "./Score.css"


function Score(props) {
    return (
        <div className="player-score">

           <p>You've earned:  {props.score} WISE point(s)!</p>
           {/* <p>Science: </p>
           <p>Technology:  </p>
           <p>Engineering: </p>
           <p>Math:  </p>
           <p>STEM Stats:  </p> */}
        </div>
    );
}

export default Score;