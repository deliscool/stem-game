import React from "react"
import "./BadgeBox.css" 



function BadgeBox(props) {
    console.log("badgebox props:", props)

    return (
        <div className="badge-display">
        {props.playerBadges.map((badge, index)=>(
            <div className="player-badges" key={index}>
                <h3>Badges You've Earned:</h3>
                <h3 className="badge-icon"><img src={badge} alt="chem-badge"/></h3>

            </div>
        ))}
        </div>
    )}

export default BadgeBox;
