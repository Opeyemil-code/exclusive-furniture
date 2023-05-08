import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


export default function Fimg(props) {

    useEffect(
        () => {
            Aos.init()
        }, []
    )

    return(
        <img data-aos="flip-right" src={props.display.sittingchair}  alt="" className="rounded-lg" />
    )
}