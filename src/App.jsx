import React from "react";
import Nav from "./header/mapover";
import MapSection from "./section.jsx/mapsection";
import Image from "./imagesection.jsx/image";
import About from "./about page/about";
import Productmap from "./product/type/type";
import Product from "./product/section";
import Reviews from "./reviews/reviews";
import Contact from "./contact/contact";
export default function App(params) {
      return(
        <div>
        <Nav />
        <MapSection />
        <Image />
        <About />
        <Product />
        <Reviews />
        <Contact />
      </div>
      )
}