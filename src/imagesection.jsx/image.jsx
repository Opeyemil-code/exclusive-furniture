import React from "react";
import { ReactDOM } from "react";
import pic from '/public/Union.png'

export default function Image(params) {
    return(
        <section className="lg:w-2/3 mx-auto mt-20 bg-blue-40 w-11/12">
            <div className=" mx-auto flex  absolute justify-center top-80 lg:mt-10 bg-blue-30 mt-6 ">
            <input className="border-2 bg-white lg:px-48 lg:py-4 border-white shadow-sm shadow-black lg:ml-60 py-3 px-6 justify-content ml-12 rounded-lg mt-4" type="text"  placeholder="search your product"/>
           </div>
          <img src={pic} alt="" className="w-11/12 mx-auto h-96 mt-12 rounded-lg" />
        </section>
    )
}