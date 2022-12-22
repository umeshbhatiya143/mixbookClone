import React from "react";
import './Brand.css'
import Wirecutter from '../../img/wirecutter.png'
import no1tag from '../../img/no1tag.png'
import Housekeeping from '../../img/housekeeping.png'

export default function Brand(){
    return(
        <div className="brand">
            <div className="leftBrand">
                <p>
                “Mixbook actually makes it fun to create photo books.”
                </p>
                <img src={Wirecutter} alt="" />
            </div>

            <div className="middle">
                <img src={no1tag} alt="" />
            </div>

            <div className="leftBrand">
                <p>
                “You can customize everything to your liking.”
                </p>
                <img src={Housekeeping} alt="" />
            </div>
        </div>
    )
}