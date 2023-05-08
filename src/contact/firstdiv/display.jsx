import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


export default function First(props) {
    useEffect(
        () =>{
            Aos.init({duration : 2000})
        }, []
    )


     return(
        <div className="flex flex-row space-x-4 ">
               <div className="flex flex-col space-y-6 mt-6" data-aos="flip-right">
                 <img src={props.display.orangechair} alt="" className="w-"/>
                 <img src={props.display.sittingroom} alt="" />
               </div>

               <div className="flex flex-col space-y-4" data-aos='flip-left'>
                <img src={props.display.light} alt="" />
                <img src={props.display.chair} alt="" />
               </div>
            </div>
     )
}