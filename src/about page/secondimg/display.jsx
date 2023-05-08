import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


export default function Simg(props) {

    useEffect(
        () => {
            Aos.init()
        }, []
    )


    return(
        <img data-aos="zoom-out-right" className="rounded-lg" src={props.display.parlor} alt="" />
    )
}