import React from "react";
import { ReactDOM } from "react";
import fourthData from "./fourthData";
import Fourthfoot from "./display";

export default function Mapfourthfooter(params) {
    const Data = fourthData.map(
        (params) => {
            return(
                <Fourthfoot 
                display={params}/>
            )
        }
    )

    return(
        <div>{Data}</div>
    )
}