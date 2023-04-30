import React from "react";
import data from "./data";
import Second from "./display";

export default function Map(params) {
    const map = data.map(
        (params) => {
             return(
                <Second 
                display={params}/>
             )
        }
    )

    return(
        <div>{map}</div>
    )
}