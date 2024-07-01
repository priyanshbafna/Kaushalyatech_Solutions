import React from 'react';
import './Portfolio.css';
import image_c1 from '../images/LASHKARE_1.png';
import image_c2 from '../images/LASHKARE_2.png';
import image_c3 from '../images/LASHKARE_3.png';
import image_c4 from '../images/mahaveer_tours.png';
import image_c5 from '../images/LASHKARE_5.png';
import image_c6 from '../images/online_1.png';
import image_c7 from '../images/mahapay1.PNG';
import image_c8 from '../images/mahapay2.PNG';
import image_c9 from '../images/mahapay3.PNG';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h1>Portfolio</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div >
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 h-100" src={image_c1} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lashkare Events</h5>
                                <h6>An Event Management Website with stunning design</h6>
                                <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c2} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lashkare Events</h5>
                                <h6>An Event Management Website with outstanding features</h6>
                                <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c3} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lashkare Events</h5>
                                <h6>One Page Multiple Looks</h6>
                                <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c4} alt="Fourth slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Mahaveer Tour and Travels</h5>
                                <h6>Tour & Travels Website with Modern Design</h6>
                                
                                <a href="https://mahaveertoursandtravels21.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c5} alt="Fifth slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lashkare Events</h5>
                                <h6>New Look Every Time</h6>
                                <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c6} alt="Sixth slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Online Services</h5>
                                <h6>Online Services Provider Website</h6>
                                <a href="https://onlineservices-b05c7.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                   
                    <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c7} alt="Seventh slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Mahapay</h5>
                                <h6>A Payment Integration Gateway Model</h6>
                                {/* <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a> */}
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c8} alt="Eight slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Mahapay</h5>
                                <h6>A Payment Integration Gateway Model</h6>
                                {/* <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a> */}
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src={image_c9} alt="Ninth slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Mahapay</h5>
                                <h6>A Payment Integration Gateway Model</h6>
                                {/* <a href="https://lashkare-event-management.web.app/" target="_blank" rel="noopener noreferrer">View <i class='fas fa-external-link-alt'></i></a> */}
                            </div>
                        </div>
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
