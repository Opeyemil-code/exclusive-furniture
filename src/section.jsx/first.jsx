import React, {useEffect} from "react";
import { ReactDOM } from "react";
import arrow from '/svg/Elements.png'
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Section(props) {
    useEffect(
        () =>{
            Aos.init({duration : 2000})
        }, []
    )

    return(
        <section className="flex lg:w-2/3 mx-auto mt-8 w-11/12 bg-red-0" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
           <div className="text-black text-center lg:w-2/3 mx-auto bg-green-90 flex flex-col" >
           <h1 className="text-center text-darkblue font-bold lg:text-6xl mx-auto tracking-tight text-shadow-xl drop-shadow-2xl text-4xl z-50">{props.display.heading}</h1>
           <p className="bg-red-90 mt-6 lg:text-lg font-semibold drop-shadow-2xl opacity-75 text-md z-50">
            {props.display.subheading}
           </p>
           <img src={arrow} alt="" className="lg:w-60 lg:h-80 absolute lg:right-80 lg:ml-0 ml-52 w-32 h-72" />
           
           </div> 
        </section>
    )
}