import React from "react";
import { ReactDOM } from "react";

export default function Firstfoot(props) {
      return(
        <div className="flex flex-col space-y-2 mx-auto text-darkblue">
               <h1 className="text-3xl font-Rochester font-bold">{props.display.heading}</h1>
                <h1 className="text-md font-Inter">{props.display.text}</h1>
                <p className="text-md font-Inter">{props.display.subText}</p>
                <p className="text-md font-Inter">{props.display.number}</p>
        </div>
      )
}