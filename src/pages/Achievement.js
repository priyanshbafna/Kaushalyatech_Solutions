import React from "react";
// import {image5,image6,image7,image8,image9,image10,image11} from './images';
import image4 from '../images/website.jpg';
import image5 from '../images/website1.jpg';
import image6 from '../images/digitalmarketing1.jpg';
import image7 from '../images/diggity-marketing-SB0WARG16HI-unsplash.jpg';
import image8 from '../images/application.jpg';
import image9 from '../images/application1.jpg';
import image10 from '../images/android.jpg';
import image11 from '../images/android1.jpg';
import './Achievement.css';

const Achievement = () => {
    return (
        <>
<div className="extra-section">
                <h2>Our Achievements</h2>
                <div className="achievement-images">
                    <img src={image4} alt="Achievement 1" />
                    <img src={image5} alt="Achievement 2" />
                    <img src={image6} alt="Achievement 3" />
                    <img src={image7} alt="Achievement 4" />
                    <img src={image8} alt="Achievement 4" />
                    <img src={image9} alt="Achievement 4" />
                    <img src={image10} alt="Achievement 4" />
                    <img src={image11} alt="Achievement 4" />
                    
                </div>
            </div>
</>
    )};
export default Achievement;