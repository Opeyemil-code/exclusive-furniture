import React from "react";
import Nav from "./header/mapover";
import MapSection from "./section.jsx/mapsection";
import Image from "./imagesection.jsx/image";
import About from "./about page/about";
export default function App(params) {
      return(
        <div>
        <Nav />
        <MapSection />
        <Image />
        <About />
      </div>
      )
}