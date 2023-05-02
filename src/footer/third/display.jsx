import React from "react";
import { ReactDOM } from "react";

export default function Thirdfoot(props) {
      return(
        <div className="flex flex-col space-y-2 mx-auto text-darkblue">
               <h1 className="text-lg font-Poppins">{props.display.heading}</h1>
                <h1>{props.display.text}</h1>
                <p>{props.display.subText}</p>
                <p>{props.display.number}</p>
        </div>
      )
}