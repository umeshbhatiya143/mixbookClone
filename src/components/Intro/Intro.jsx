import React, {useState} from "react";
import Card from "../Card/Card.jsx";
import Family from '../../img/fm1.jpeg'
import Holiday from '../../img/holiday.jpg'
import Travel from '../../img/travel.jpeg'
import Wedding from '../../img/wedding.webp'
import Calendar from '../../img/calendar.jpg'



import './Intro.css'

export default function Intro() {

    const [image,setImage] = useState(Family);
    

    // const handleClick = ()=>{
    //     setImage(Holiday);
    // }
    
// const image = Family;
    return (
        <div className="Intro">
            <div className="CardsUp">
                <div className="cards">
                    <Card photo={image} />
                </div>
                <div className="cards">
                    <Card photo={image} />
                </div>
                <div className="cards">
                    <Card photo={image} />
                </div>

                <div className="cards">
                    <Card photo={image} />
                </div>
                <div className="cards">
                    <Card photo={image} />
                </div>

                <div className="cards">
                    <Card photo={image} />
                </div>
            </div>

            <div className="CardsMiddle">
                <div className="cards">
                    <Card photo={image} />
                </div>

                <div className="content">
                    <h1>Beautiful Designs Made Easy</h1>
                    <p>Let your creativity run wild with the #1 rated photo book company</p>
                    <div className="button">
                        <button className="btn"
                            onMouseEnter={
                                ()=>{
                                    setImage(Holiday);
                                }
                                }>HOLIDAY</button>
                        <button className="btn"
                        onMouseEnter={
                            ()=>{
                                setImage(Travel);
                            }
                            }
                        >TRAVEL</button>
                        <button className="btn"
                        onMouseEnter={
                            ()=>{
                                setImage(Wedding);
                            }
                            }
                        >WEDDING</button>
                        <button className="btn"
                        onMouseEnter={
                            ()=>{
                                setImage(Family);
                            }
                            }
                        >FAMILY</button>
                        <button className="btn"
                        onMouseEnter={
                            ()=>{
                                setImage(Calendar);
                            }
                            }
                        >CALENDAR</button>
                    </div>
                </div>

                <div className="cards">
                    <Card photo={image} />
                </div>

            </div>

            <div className="CardsUp">
                <div className="cards">
                    <Card photo={image} />
                </div>
                <div className="cards">
                    <Card photo={image} />
                </div>
                <div className="cards">
                    <Card photo={image} />
                </div>

                <div className="cards">
                    <Card photo={image} />
                </div>
                <div className="cards">
                    <Card photo={image} />
                </div>

                <div className="cards">
                    <Card photo={image} />
                </div>
            </div>

        </div>

    )
}