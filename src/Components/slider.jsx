import React from 'react';
import Slider from "react-slick";
import "../assets/css/slick.min.css";
import iphone from "../assets/images/iphone.png";
import { 
FaLongArrowAltLeft, 
FaLongArrowAltRight,
FaLongArrowAltDown
 } from "react-icons/fa";
import { Link } from 'react-scroll';
export default function slider() {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{...style}}
                onClick={onClick}
            >
            <FaLongArrowAltLeft/>
            </div>
        );
    }
    const SampleNextvArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            >
            <FaLongArrowAltRight/>
            </div>
        );
    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        padding: 20,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextvArrow/>
    }
    return (
        <div className="container"> 
            <div className="slider-area">
                <div className="slider-activator">
                    <Slider {...settings}>
                        <div className="slide-item">
                            <div className="container pt-130 pl-xl-0 px-0">
                                <div className="row m-0">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                        <div className="slider-left">
                                            <div className="name">
                                                <h1>The American <br /> Game<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.tiktok.com/@theamericangame">TikTok</a> | <a
                                                    href="https://www.youtube.com/channel/UC0uUeB5r8Lx1k3CMSlPuI-g">YouTube</a> <br />
                                                <a href="https://twitter.com/TAG_Football">Twitter</a> | <a
                                                    href="">Instagram</a> 
                                            </div>
                                            <div className="slider-cta">
                                                <Link 
                                                to="contact" 
                                                className="ct-btn" 
                                                smooth={true} 
                                                duration={2000} 
                                                activeClass="active" 
                                                spy={false} 
                                                offset={5}>Work With Me!</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img className="img-fluid" src={iphone} alt="iphone"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">The American Game</h3>
                                                <h2>The Fastest Growing <br /> American Soccer <br /> TikTok </h2>
                                                <p className="pr-20">
                                                    The American Game is dedicated to the telling
                                                    the stories of American Soccer, while covering
                                                    MLS, the USMNT, the USWNT and all levels of American Soccer.</p>
                                            </div>
                                            <div className="intro-button">
                                                <Link
                                                    to="services"
                                                    className="btn-animation mr-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}> Learn more &nbsp; <i><FaLongArrowAltDown /></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
