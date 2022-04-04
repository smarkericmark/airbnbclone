import React from "react";



export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card--Box">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={require(`../images/${props.img}`)} className="card--image" />
            <div className="card--stats">
                <img src={require("../images/Star.png")} className="card--Starpic" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">&nbsp;-{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="boldText"> From ${props.price}</span> / person</p>

        </div>
    )
}