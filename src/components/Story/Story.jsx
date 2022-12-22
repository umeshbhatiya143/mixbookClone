import React from "react";
import './Story.css'
import storylogo from '../../img/storylogo.png'

export default function Story(){
    return (
        <div className="storyContainer">
            <div className="storyLeft">
                <p className="heading">Your Story, Your Way</p>
                <p>Our editor gives you the creative freedom to fully customize your design — it's free, fun, and easy to use on any device.</p>
                <button className="btn">CREATE NOW</button>
            </div>
            <div className="storyRight">
                <img src={storylogo} alt="" />
            </div>
        </div>
    )
}