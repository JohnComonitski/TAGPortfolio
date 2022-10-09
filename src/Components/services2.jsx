import React from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_03 from "../assets/images/icons/search-yellow.png";
import servicIcon_04 from "../assets/images/icons/marketing.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing-white.png";
import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";

const iframe_container = {
    "left": "0",
    "width": "100%",
    "height": "720px",
    "position": "relative"
    
}

const iframe ={
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "position": "absolute",
    "border": "0"
}

export default function Services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    title="My Content"
                    subTitle="Telling American Soccer Stories"
                    desc="Despite what many think, soccer has a rich history in the US and even more exciting future to come. The American Game his here to relive that history and keep you up to update with the rapid growth of the world's game in the United States!"
                />
            </div>

            <div className="counter-area mt-45">
                <div className="container">
                    <div className="row">
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Followers" start={0} end={5676} duration={2}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Totals Likes" start={0} end={150000} duration={2}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Views This Week" start={0} end={468000} duration={2}/>
                        <SingleCountdown title="Views This Month" start={0} end={1100000} duration={2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
