import React, {useEffect} from "react";
import { ReactDOM } from "react";
import image from '/Image.png'
import star from '/Star1.png'
import quote from '/download(1).png'
import Mapreviews from "./firstdiv.jsx/map";
import Map from "./seconddiv.jsx/map";
import Aos from "aos";
import 'aos/dist/aos.css'


export default function Reviews(params) {

    useEffect(
        () =>{
            Aos.init({duration : 2000})
        }, []
    )


    return(
        <section className="bg-darkblue lg:w-2/3 mx-auto mt-8 pb-16 pt-2" data-aos="fade-right">
            <div className="mt-2">
                <h1 className="text-center  text-white text-3xl font-bold tracking-wide font-Inter">What do customers say...</h1>
            </div>

            <div className="bg-green-90 lg:w-2/3 mx-auto mt-6 flex lg:flex-row lg:space-x-20 flex-col space-y-10 lg:space-y-0">

                <Mapreviews />

               <Map />
                


            </div>
        </section>
    )
}