import React from "react";
import { ReactDOM } from "react";
import sData from "./sData";
import Second from "./second";
export default function Mapthrough(params) {
    const mapping = sData.map(
        (params) => {
            return(
                <Second 
                key={params.id}
                display={params}/>
            )
        }
    )

    return(
        <div>{mapping}</div>
    )
}