import React from "react";
import Herophoto from "../images/Gridphoto.png"

export default function Hero() {

    return (
    <div className="hero--HeroBox">
        <img src={Herophoto} className="hero--photo" />
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
    )
}