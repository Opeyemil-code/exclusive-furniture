import React from "react";
import { ReactDOM } from "react";
import First from "./first";
import Mapfirst from "./map";
import Mapthrough from "./second/mapS";
import FirstImage from "./firstImg/mapImg";
import Secondimage from "./secondimg/secondImage";
export default function About() {
    return(
        <section className="lg:w-2/3 mx-auto bg-green-90 bg mt-10 lg:flex-row flex-col ">
             <div className="flex flex-col bg-red- text-cente">
                <h1 className="text-3xl font-bold font-Roboto text-darkblue lg:ml-28 mx-auto lg:mx-0">
                  About Us
                </h1>
                <p className="lg:ml-28 lg:w-96 opacity-75 lg:text-0 w-80 ml-6">
                Comfort is key and how you feel about your chair will affect how you feel and your mood.
                </p>
             </div>

          <div className="flex lg:flex-row mx-auto flex-col mt-6">

          <div className="flex flex-row space-x-4 lg:ml-32 lg:mx-0 mx-auto">
           <Mapfirst />
           <Mapthrough />
           </div>

           <div className="flex flex-row  space-x-4 lg:w-96 w-72 mx-auto lg:mt-0 mt-8">
             <FirstImage />
             <Secondimage />
           </div>

          </div>
        </section>
    )
}