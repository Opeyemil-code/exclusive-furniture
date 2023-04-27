import React from "react";
import { ReactDOM } from "react";
import imgData from './imageData.jsx'
import Fimg from "./display";
export default function FirstImage(params) {
    const fimg = imgData.map(
        (params) => {
            return(
               <Fimg 
               key={params.id}
               display={params}/> 
            )
        }
    )

    return(
        <div className="flex  flex-col space-y-4 lg:mt-12">{fimg}</div>
    )
}