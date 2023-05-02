import React from "react";
import { ReactDOM } from "react";
import Mapfirstfooter from "./first/map";
import MapSecondfooter from "./second/map";
import MapThirdfooter from "./third/map";
import Mapfourthfooter from "./forth/map";
export default function Footer(params) {
     return(
            <div className="flex lg:flex-row bg-whit mx-auto lg:w-2/3 mt-6 lg:space-x-6 flex-col space-y-">
               <div className="w-5/6 bg-yellow-90 mx-auto flex lg:flex-row lg:space-x-24 mt-6 flex-col space-y-10">
               <Mapfirstfooter />
               <MapSecondfooter />
               <MapThirdfooter />
               <Mapfourthfooter />
               </div>
            </div>
     )
}