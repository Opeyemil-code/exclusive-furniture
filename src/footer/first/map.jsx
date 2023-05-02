import React from "react";
import { ReactDOM } from "react";
import firstData from "./firstData";
import Firstfoot from "./display";

export default function Mapfirstfooter(params) {
    const Data = firstData.map(
        (params) => {
            return(
                <Firstfoot 
                display={params}/>
            )
        }
    )

    return(
        <div>{Data}</div>
    )
}