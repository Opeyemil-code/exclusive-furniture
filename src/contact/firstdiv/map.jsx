import React from "react";
import { ReactDOM } from "react";
import data from "./data";
import First from "./display";

export default function Mapcontact(params) {
    const mapping = data.map(
        (params) => {
            return(
                <First 
                display={params}/>
            )
        }
    )

    return(
        <div >{mapping}</div>
    )
}