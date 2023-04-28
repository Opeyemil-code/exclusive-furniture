import React from "react";
import { ReactDOM } from "react";
import data from "./data";
import Type from "./display";
export default function Productmap(params) {
    const map = data.map(
        (params) => {
            return (
                <Type 
                key={params.id}
                display={params}/>
            )
        }
    )

    return(
        <div className="flex flex-row lg:space-x-5 lg:w-96 lg:mx-auto mt-6 ">
            {map}
        </div>
    )
}