import React from "react";
import Nav from "./header/mapover";
import MapSection from "./section.jsx/mapsection";
import Image from "./imagesection.jsx/image";
export default function App(params) {
      return(
        <div>
        <Nav />
        <MapSection />
        <Image />
      </div>
      )
}