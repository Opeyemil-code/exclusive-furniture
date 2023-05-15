import React, {useEffect} from "react";
import { ReactDOM } from "react";
import Type from "./type/display";
import Productmap from "./type/type";
import Mapover from "./firstFlexBoxes/map";
import Mapon from "./secondFlexBoxes/map";
import Aos from "aos";
import 'aos/dist/aos.css'




export default function Product(params) {

    useEffect(
        () =>{
            Aos.init({duration : 2000})
        }, []
    )


   return(
        <section className="bg-green-90 lg:w-2/3 mx-auto mt-8" data-aos="flip-righ">
            <div className="w-2/3 mx-auto ">
                <h2 className="text-center text-5xl text-darkblue font-bold font-roboto">Products</h2>
            </div>


            <div>
            <Productmap />
            <Mapover />
            <Mapon />
            </div>
        </section>
    )
} 