import React from "react";
import data from "./data";
import First from "./display";
export default function Mapreviews(params) {
    const mapviews = data.map(
        (params) => {
            return(
                <First 
                display={params}/>
            )
        }
    )

    return(
        <div>{mapviews}</div>
    )
}