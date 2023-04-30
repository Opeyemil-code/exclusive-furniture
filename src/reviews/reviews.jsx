import React from "react";
import { ReactDOM } from "react";
import image from '/Image.png'
import star from '/Star1.png'
import quote from '/download(1).png'
import Mapreviews from "./firstdiv.jsx/map";
import Map from "./seconddiv.jsx/map";
export default function Reviews(params) {
    return(
        <section className="bg-darkblue lg:w-2/3 mx-auto mt-8 pb-16 pt-2">
            <div className="mt-2">
                <h1 className="text-center  text-white text-3xl font-bold tracking-wide font-Inter">What do customers say...</h1>
            </div>

            <div className="bg-green-90 lg:w-2/3 mx-auto mt-6 flex lg:flex-row lg:space-x-20 flex-col space-y-10 lg:space-y-0">

                <Mapreviews />

               <Map />
                


            </div>
        </section>
    )
}