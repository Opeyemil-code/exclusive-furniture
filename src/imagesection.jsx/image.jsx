import React ,{useEffect} from "react";
import { ReactDOM } from "react";
import pic from '/Union.png';
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Image(params) {
    useEffect(
        () =>{
            Aos.init({duration : 2000})
        }, []
    )

    return(
        <section className="lg:w-2/3 mx-auto mt-20 bg-blue-40 w-11/12" data-aos="fade-up">
            <div className=" mx-auto flex  absolute justify-center top-80 lg:mt-10 bg-blue-30 mt-6 ">
            <input className="border-2 bg-white lg:px-48 lg:py-4 border-white shadow-md shadow-black lg:ml-60 py-3 px-6 justify-content ml-12 rounded-lg mt-4 z-50" type="text"  placeholder="search your product"/>
           </div>
          <img src={pic} alt="" className="w-11/12 mx-auto h-96 mt-12 rounded-lg" />
        </section>
    )
}