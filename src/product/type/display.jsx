import React from "react";
import { ReactDOM } from "react";

export default function Type(props) {
       return(
            <ul className="lg:text-lg text-md lg:mx-0 mx-auto font-semibold opacity-75">
            <li className="text-center">{props.display.text}</li>
        </ul> 
       )
}