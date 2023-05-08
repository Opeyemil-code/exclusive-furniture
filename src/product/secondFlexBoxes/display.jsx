import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function DisplaySecond(props) {
    
    useEffect(
        () =>{
            Aos.init({duration : 2000})
        }, []
    )



      return(
        <div className="flex flex-col bg-yellow-90 mx-auto mt-10" data-aos="flip-left">

        <img src={props.display.img} alt="" className="w-55 h-55 z-50 absolute top- ml-12 lg:ml-4" />

               <div className="bg-blue-90  py-4  bg-whit  mt- lg:px-16 ml- flex lg:flex-row space-x-8 lg:space-x-3 shadow-2xl rounded-lg shadow-b-black mt-28 px-16 drop-shadow-xl ">

                   <div className="bg-blue-90  flex flex-row space-x-8  px-5 lg:px-0">

                   <div className="mt-40 flex flex-col ">
                     <h1 className="font-bold text-darkblue font-Inter mt-">{props.display.text}</h1>
                     <p className="text-md font-Inter">{props.display.price}</p>
                    </div>

                    <div className="mt-48">
                        <img src={props.display.arrow} alt="" className="w-5 h-5"/>
                    </div>

                   </div>
                  </div> 
            </div>
      )
}