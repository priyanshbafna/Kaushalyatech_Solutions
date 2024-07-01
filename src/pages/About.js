import React, { useState, useEffect } from 'react';
import './About.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import video from '../video/Company Culture Video - A Leadership Motivational Video.mp4';

const About = () => {
    const [chatActive, setChatActive] = useState(false);
    const [chatStep, setChatStep] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [query, setQuery] = useState('');

    const handleChatClick = () => setChatActive(true);

    const handleChatSubmit = () => {
        if (chatStep < 4) {
            setChatStep(chatStep + 1);
        }
    };

    const handleChatClose = () => {
        setChatActive(false);
        setChatStep(0);
        setName('');
        setEmail('');
        setMobile('');
        setQuery('');
    };

    useEffect(() => {
        if (chatStep === 4) {
            const timer = setTimeout(() => {
                handleChatClose();
            }, 3000); // Close the chat after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [chatStep]);

    return (
        <div className="about">
            <div className="container">
                <div className="left">
                    <img src={image1} alt="Team Member 1" />
                    <img src={image2} alt="Team Member 2" />
                    <img src={image3} alt="Team Member 3" className='img3' />
                </div>
                <div className="right">
                    <h1>About Us</h1>
                    <p id="aboutus">
                        Welcome to Kaushalya Infotech, your partner in innovative IT solutions. Founded in 2024, we are a dynamic startup dedicated to propelling your business to new heights through cutting-edge technology and creative design. Our mission is to empower businesses by providing comprehensive IT services that blend technical expertise with imaginative thinking.
                    </p>
                    <p>
                        Our Services:
                    </p>
                    <ul>
                        <li><strong>Web Development:</strong> Our team of skilled developers creates robust, user-friendly, and scalable websites tailored to your business needs. We ensure seamless performance and an engaging user experience.</li>
                        <li><strong>Logo Designing:</strong> A logo is the face of your brand. Our creative designers develop unique and memorable logos that capture the essence of your business and make a lasting impression.</li>
                        <li><strong>Digital Marketing:</strong> In the digital age, visibility is key. Our digital marketing experts devise strategies that enhance your online presence, engage your target audience, and boost your brand’s reach.</li>
                    </ul>
                    <p>
                        <i>Why Choose Us?</i>
                    </p>
                    <ul>
                        <li><strong>Innovative Solutions:</strong> We stay ahead of industry trends to provide innovative solutions that give your business a competitive edge.</li>
                        <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We work closely with you to understand your vision and translate it into reality.</li>
                        <li><strong>Experienced Team:</strong> Our team comprises seasoned professionals with a passion for technology and creativity, committed to delivering excellence.</li>
                        <li><strong>Quality Assurance:</strong> We adhere to the highest standards of quality to ensure that our solutions are reliable, efficient, and impactful.</li>
                    </ul>
                    <p>
                        At Kaushalya Infotech, we believe in the power of technology to transform businesses. Whether you are a startup looking to establish your online presence or an established company seeking to innovate, we are here to support your journey. Let's create something extraordinary together.
                    </p>
                    <p>
                        Join Us:
                    </p>
                    <p>
                        Ready to take your business to the next level? Contact us today and let’s embark on a journey of growth and success. Together, we can achieve greatness.
                    </p>
                </div>
            </div>
            <div className="video-section">
                <video width="100%" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-text">Kaushalya Infotech</div>
            </div>

           
        </div>
    );
};

export default About;
