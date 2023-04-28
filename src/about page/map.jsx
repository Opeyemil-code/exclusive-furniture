import React from "react";
import data from "./data";
import First from "./first";

export default function Mapfirst(params) {
      const mapover = data.map(
        (params) => {
            return(
                <First 
                key={params.id}
                display={params}/>
            )
        }
      ) 

      return(
        <div className="">{mapover}</div>
      )
}