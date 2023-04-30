import React from "react";
import { ReactDOM } from "react";
import Type from "./type/display";
import Productmap from "./type/type";
import Mapover from "./firstFlexBoxes/map";
import Mapon from "./secondFlexBoxes/map";
export default function Product(params) {
    return(
        <section className="bg-green-90 lg:w-2/3 mx-auto mt-8">
            <div className="w-2/3 mx-auto ">
                <h2 className="text-center text-5xl text-darkblue font-bold font-roboto">Products</h2>
            </div>


            <div>
            <Productmap />
            <Mapover />
            <Mapon />
            </div>
        </section>
    )
} 