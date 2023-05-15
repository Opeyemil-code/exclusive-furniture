import React from "react";
import menu from '/icons8-menu-50.png'

export default function Header(props) {

const [menu, setmenu] = React.useState('/icons8-menu-50.png')

function Dropdown(params) {
      
}





    return (
        <header className="flex lg:flex-row bg-white lg:w-2/3 mx-auto lg:p-6 space-x-12 text-center shadow-lg w-11/12 rounded-lg p-3 mt-4">
          <h1 className="text-3xl font-bold font-Rochester lg:mt-0 lg:ml-0 mt-2 ml-2">Exclusive</h1>
         <button className="lg:hidden z-50" onClick={Dropdown}>
         <img className="w-6 h-6 ml-28" src={menu} alt="" />
         </button>

          <div className="hidden lg:block absolute bg-white rounded-lg shadow-xl shadow-black lg:w-full w-60 lg:h-0 h-60 lg:mt-0 mt-16 lg:">
           <ul className="flex flex-col  lg:flex-row lg:space-x-8 lg:ml-52 lg:text-lg font-Roboto text-darkblue absolu text-xl">
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