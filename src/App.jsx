import React from "react";
import Nav from "./header/mapover";
import MapSection from "./section.jsx/mapsection";
import Image from "./imagesection.jsx/image";
import About from "./about page/about";
import Product from "./product/section";
import Reviews from "./reviews/reviews";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
export default function App(params) {
      return(
        <div className="">
        <Nav />
        <MapSection />
        <Image />
        <About />
        <Product />
        <Reviews />
        <Contact />
        <Footer />
      </div>
      )
}