import React from "react";
import { ReactDOM } from "react";

export default function Second(props) {
    return(
        <div className="flex flex-col mt-4 bg-red-90 w-36 lg:w-full">
          <h1 className="text-4xl text-orange font-bold font-Inter">{props.display.number}</h1>
            <h2 className="text-darkblue text-lg font-bold font-Poppins">{props.display.heading}</h2>
            <p className="text-sm text-black lg:w-60 opacity-70  ">{props.display.text}</p>
        </div>
    )
}