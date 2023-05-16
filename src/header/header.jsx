import React,{useState} from "react";
import menu from '/icons8-menu-50.png'
import  {useEffect} from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import Aos from "aos";
import 'aos/dist/aos.css'


export default function Header(props) {

  useEffect(
    () =>{
        Aos.init({duration : 2000})
    }, []
)



const [open, setopen] = useState(false)

function handleMenu(params) {
  setopen(
    (prev) => !prev
  )
}




    return (
        <header className="flex lg:flex-row bg-white lg:w-2/3 mx-auto lg:p-6 lg:space-x-12 text-center shadow-lg w-11/12 rounded-lg p-3 mt-4 ">
          <h1 className="text-3xl font-bold font-Rochester lg:mt-0 lg:ml-0 mt-2 ml-2">Exclusive</h1>

          <div className="hidden  lg:block absolut bg-white rounded-lg shadow-xl shadow-black lg:w-full w-60 lg:h-0 h-60 lg:mt-0 mt-1 lg:">
          <nav  className="flex flex-col  lg:flex-row lg:space-x-8 lg:ml-52 lg:text-lg font-Roboto text-darkblue absolu text-xl mt-6 lg:mt-0 space-y-4 lg:space-y-0">
           <a href="http://">{props.display.homeBtn}</a>
           <a href="http://">{props.display.aboutBtn}</a>
           <a href="http://">{props.display.productBtn}</a>
           <a href="http://">{props.display.testimonialBtn}</a>
          </nav>

         </div>
         
          {open ? (
          <div className="hidde lg:block absolute bg-white rounded-lg shadow-md shadow-black lg:w-full  lg:h-0 h-64 lg:mt-0 mt-16 z-50 w-5/6" data-aos="flip-right">
          <nav  className="flex flex-col  lg:flex-row lg:space-x-8 lg:ml-52 lg:text-lg font-Roboto text-darkblue absolu text-xl mt-6 space-y-4 lg:space-y-0">
           <a href="http://">{props.display.homeBtn}</a>
           <a href="http://">{props.display.aboutBtn}</a>
           <a href="http://">{props.display.productBtn}</a>
           <a href="http://">{props.display.testimonialBtn}</a>
          </nav>

         </div>
        ) : null}
         

          

          <div className="flex flex-row space-x-8 absolute right-72 invisible lg:visible">
            <h1 className="font-Roboto text-darkblue font-Roboto text-lg">{props.display.contactBtn}</h1>
            <h4 className="border-2 bg-orange px-2 py-1">{props.display.online}</h4>
          </div>

          


        <div className="">
         <button className="lg:hidden z-50 ml-40 " onClick={handleMenu}>
            <span className="sr-only">Open Main Menu</span>
            {open == true ? <FaTimes className="w-4 h-6"/> : <FaBars className="w-4 h-6"/> }
         </button>

        </div>
 
        

        </header>
    )
}


