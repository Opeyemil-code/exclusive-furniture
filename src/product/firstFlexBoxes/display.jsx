import React from "react";

export default function DisplayFirst(props) {
      return(

            <div className="flex flex-col bg-yellow-90 mx-auto mt-10">

        <img src={props.display.img} alt="" className="w-60 h-60 z-50" />

               <div className="bg-blue-90  py-16  bg-whit absolute mt-32 px-16 ml-1 flex lg:flex-row space-x-1">
                    <div className="mt-20">
                    <h1 className="">{props.display.text}</h1>
                    <p>{props.display.price}</p>
                    </div>

                    <div className="mt-20">
                        <img src={props.display.arrow} alt="" />
                    </div>
                  </div> 
            </div>
        
      )
}