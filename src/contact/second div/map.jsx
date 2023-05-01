import React from "react";
import data from "./data";
import Second from "./display";

export default function MapcontactSecond(params) {
    const mapit = data.map(
        (params) => {
            return(
                <Second 
                display={params}/>
            )
        }
    )

    return(
        <div>{mapit}</div>
    )
}