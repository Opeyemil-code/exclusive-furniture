import React from "react";
import { ReactDOM } from "react";
import Mapcontact from "./firstdiv/map";
import MapcontactSecond from "./second div/map";
export default function Contact(params) {
     return(
        <section className="lg:w-2/3 mx-auto mt-10 lg:flex-row flex bg-red-90 lg:space-x-20 flex-col w-11/12">
            <div className="flex lg:flex-row flex-col lg:space-x-20 lg:ml-20 space-y-5">
            <Mapcontact />
            <MapcontactSecond />  
            </div>
        </section>
     )
}