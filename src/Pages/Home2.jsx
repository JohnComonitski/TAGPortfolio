import React from 'react';
import Slider from "../Components/slider";
import SimpleReactLightbox from "simple-react-lightbox";
import Services2 from "../Components/services2";
import Portfolios from "../Components/portfolios";
import Blogs from "../Components/blogs";
import Contact from "../Components/contact";
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function Home2() {
    return (
        <div>
            <Header/>
            <Slider />
            <Services2 />
            <Contact />
            <Footer/>
        </div>
    )
}
