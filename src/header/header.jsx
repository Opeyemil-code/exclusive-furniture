import React from "react";


export default function Header(props) {
    return (
        <header className="flex flex-row bg-white lg:w-2/3 mx-auto lg:p-6 space-x-12 text-center shadow-xl w-11/12 rounded-lg">
          <h1 className="text-2xl font-bold font-Rochester lg:mt-0 lg:ml-0 mt-4 ml-6">Exclusive</h1>

          <div className="hidden lg:block">
           <ul className="flex flex-row space-x-8 ml-52 text-lg font-Roboto text-darkblue ">
            <li className="">{props.display.homeBtn}</li>
            <li>{props.display.aboutBtn}</li>
            <li>{props.display.productBtn}</li>
            <li>{props.display.testimonialBtn}</li>
           </ul>
          </div>

          <div className="flex flex-row space-x-8 absolute right-72 invisible lg:visible">
            <h1 className="font-Roboto text-darkblue font-Roboto text-lg">{props.display.contactBtn}</h1>
            <h4 className="border-2 bg-orange px-2 py-1">{props.display.online}</h4>
          </div>

        </header>
    )
}