import React from "react";
import { ReactDOM } from "react";
import secondData from "./secondData";
import Secondfoot from "./display";

export default function MapSecondfooter(params) {
    const Data = secondData.map(
        (params) => {
            return(
                <Secondfoot 
                display={params}/>
            )
        }
    )

    return(
        <div>{Data}</div>
    )
}