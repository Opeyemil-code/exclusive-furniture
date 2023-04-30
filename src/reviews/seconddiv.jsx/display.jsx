import React from "react";
import { ReactDOM } from "react";

export default function Second(props) {
   return(
    <div className="flex flex-col  lg:w-96 bg-red-30 w-11/12 mx-auto lg:mt-0 mt-8">
    <div>
    <img src={props.display.quoteImg} alt="" className="w-20"/>
    <h2 className="text-2xl font-bold text-whit font-Poppins">{props.display.header}</h2>
    </div>

    <div className="mt-6">
    <p className="text-md opacity-75 text-white">{props.display.text}</p>
    </div>

    <div className="flex flex-col mt-8">
     <h1 className="text-2xl font-bold text-orange">{props.display.Name}</h1>
     <p className="text-md text-white opacity-75">{props.display.job}</p>
    </div>
 </div>
   )
}