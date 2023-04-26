import React from "react";
import { ReactDOM } from "react";
import data from "./data";
import Header from "./header";


export default function Nav(params) {
    const Mapover = data.map(
        (params) => {
            return(
                <Header 
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