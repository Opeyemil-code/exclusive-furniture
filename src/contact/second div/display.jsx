import React from "react";

export default function Second(props) {
    return(
        <div className="flex flex-col mt-6">
               <div>
                <h1 className="text-2xl text-darkblue font-bold tracking-wide text-left">{props.display.heading}</h1>
                <p>{props.display.text}</p>
               </div>

             <div className="flex flex-col space-y-5">

                <div className="lg:flex-row flex-col flex lg:space-x-6 mt-6 space-y-4 lg:space-y-0">
                  <input type="text" className="border-2 px-4 py-2 border-darkblue rounded-md" placeholder="First Name"/>
                  <input type="text" className="border-2 px-4 py-2 border-darkblue rounded-md" placeholder="Last name"/>
                 </div>

                  <div className="flex flex-col space-y-4">
                    <input type="email" name="" id=""  className="border-2 py-2 border-black rounded-md" placeholder="Email Address"/>
                    <input type="text"  className="border-2 py-14 border-darkblue rounded-lg" placeholder="Message"/>
                  </div>

                  <div className="text-center bg-orange py-2 px-2 rounded-md">
                    <a href="">{props.display.link}</a>
                  </div>

                </div>

            </div>
    )
}