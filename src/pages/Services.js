import React from 'react';
import './Services.css';
import image12 from '../images/logo_service.jpg';
import image13 from '../images/webdesign_service.jpg';
import image14 from '../images/digitalmarketing_service.jpg';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <h1>Our Services</h1>
                <div className="service-cards">
                    <div className="service-card">
                        <h2>Logo Design</h2>
                        <img src={image12}  alt="logo_service" srcset="" className='service_img' />
                        <p>At Kaushalyatech Solutions, we provide attractive logo design that captures your brand’s essence, ensuring a memorable and impactful visual identity</p>
                    </div>
                    <div className="service-card">
                        <h2>Website Design</h2>
                        <img src={image13}  alt="website_service" srcset="" className='service_img' />
                        <p>At Kaushalyatech Solutions, we offer stunning website designs that reflect your brand’s identity, creating a remarkable and engaging online experience</p>
                    </div>
                    <div className="service-card">
                        <h2>Digital Marketing</h2>
                        <img src={image14}  alt="digital marketingservice" srcset="" className='service_img' />
                        <p>At Kaushalyatech Solutions, we deliver dynamic digital marketing strategies that enhance your brand's visibility, driving engagement and achieving impactful results</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
