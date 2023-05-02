import React from "react";
import { ReactDOM } from "react";
import Thirdfoot from "./display";
import Third from "./Third";

export default function MapThirdfooter(params) {
    const Data = Third.map(
        (params) => {
            return(
                <Thirdfoot 
                display={params}/>
            )
        }
    )

    return(
        <div>{Data}</div>
    )
}