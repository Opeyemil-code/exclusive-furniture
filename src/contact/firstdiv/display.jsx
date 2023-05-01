import React from "react";

export default function First(props) {
     return(
        <div className="flex flex-row space-x-4 ">
               <div className="flex flex-col space-y-6 mt-6">
                 <img src={props.display.orangechair} alt="" className="w-"/>
                 <img src={props.display.sittingroom} alt="" />
               </div>

               <div className="flex flex-col space-y-4">
                <img src={props.display.light} alt="" />
                <img src={props.display.chair} alt="" />
               </div>
            </div>
     )
}