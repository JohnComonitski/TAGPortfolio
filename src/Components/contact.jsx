import React from 'react';
import {
FaEnvelope, 
FaPhone,
FaSkype,
FaTwitter,
FaDribbble,
FaFacebookF } from "react-icons/fa";
import SectionTitle from "./section_title";

export default function Contact() {
    return (
        <div className="contact-area section-ptb" id="contact">
            <div className="container">
                <SectionTitle
                    title="CONTACT"
                    subTitle="Ways To Contact Me"
                    desc="If you represent a brand and would like to work the with The American Game on a collaboration or sponsorship opportunity, send an email to the email below!"
                />
            </div>
            <div className="container mt-20 ">
                <div className="row md-justify-content-center ">
                    <div className="col-xl-5 col-lg-6 col-md-8 mb-10 ml-auto mr-auto">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaEnvelope/></i>
                            </div>
                            <a className="btn-animation small-text" href="/">TheAmericanGameTikTok@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
