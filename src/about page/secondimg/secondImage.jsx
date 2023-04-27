import React from "react";
import { ReactDOM } from "react";
import imgData from './data.jsx'
import Simg from "./display";

export default function Secondimage(params) {
     const sec = imgData.map(
         (params) => {
            return (
                <Simg 
                key={params.id}
                display={params}/>
            )
         }
     )

     return(
        <div className="flex flex-col space-y-3">{sec}</div>
     )
}