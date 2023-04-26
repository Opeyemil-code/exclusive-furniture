import React from "react";
import { ReactDOM } from "react";
import sData from "./sData";
import Section from "./first";
export default function MapSection(params) {
    const Mapover = sData.map(
        (params) => {
            return (
                <Section 
            key={params.id}
            display={params}/>
            )
        }
    )

    return(
        <div>
            {Mapover}
        </div>
    )
}