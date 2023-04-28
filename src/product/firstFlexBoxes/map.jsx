import React from "react";
import data from "./data";
import DisplayFirst from "./display";
export default function Mapover(params) {
    const mapOver = data.map(
        (params) => {
            return(
               <DisplayFirst 
               key={params.id}
               display={params}/>
            )
        }
    )

    return(
        <div className="flex lg:flex-row flex-col space-x-6 bg-green-90">{mapOver}</div>
    )
}