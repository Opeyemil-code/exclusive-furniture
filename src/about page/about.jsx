import React,{useEffect} from "react";
import { ReactDOM } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import First from "./first";
import Mapfirst from "./map";
import Mapthrough from "./second/mapS";
import FirstImage from "./firstImg/mapImg";
import Secondimage from "./secondimg/secondImage";
export default function About() {

    useEffect(
        () =>{
            Aos.init({duration : 1200})
        }, []
    )

    return(
        <section className="lg:w-2/3 mx-auto bg-green-90 bg mt-10 lg:flex-row flex-col" data-aos='fade-left'>
             <div className="flex flex-col bg-red- text-cente">
                <h1 className="text-3xl font-bold font-Inter text-darkblue lg:ml-28 mx-auto lg:mx-0">
                  About Us
                </h1>
                <p className="lg:ml-28 lg:w-96 opacity-75 lg:text-0 w-80 ml-6 text-center font-Inter">
                Comfort is key and how you feel about your chair will affect how you feel and your mood.
                </p>
             </div>

          <div className="flex lg:flex-row mx-auto flex-col mt-6">

          <div className="flex flex-row space-x-4 lg:ml-32 lg:mx-0 mx-auto"
          
          data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
           <Mapfirst />
           <Mapthrough />
           </div>

           <div className="flex lg:flex-row flex-col  lg:space-x-4 lg:w-96 w-72 mx-auto lg:mt-0 mt-8 space-y-6" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
             <FirstImage />
             <Secondimage />
           </div>

          </div>
        </section>
    )
}