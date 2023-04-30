import React from "react";
import data from "./data";
import DisplaySecond from "./display";
export default function Mapon(params) {
    const mapOver = data.map(
        (params) => {
            return(
               <DisplaySecond 
               key={params.id}
               display={params}/>
            )
        }
    )

    return(
        <div className="flex lg:flex-row flex-col lg:space-x-3 bg-green-90 ">{mapOver}</div>
    )
}