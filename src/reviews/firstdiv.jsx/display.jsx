import React from "react";

export default function First(props) {
    return(
        <div className="bg-yellow-30">
                    <img src={props.display.starImg} alt="" className="absolute lg:mt-60 mt-48 ml-6 lg:ml-0"/>
                    <img src={props.display.reviewImg} alt="" className="lg:w-72 mx-auto w-60"/>
        </div>
    )
}