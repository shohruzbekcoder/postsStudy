import React from 'react'
import "./bootstrap.css";
import "./mobster.css";
// import "./maicons.css";
import logo from '../img/app_showcase-svg.svg';
import Background from '../img/bg_hero_2.svg';
// import { ReactComponent as Logo1 } from '../img/app_showcase.svg';
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Welcome() {

    AOS.init({
        // initialise with other settings
        duration : 1200
      })

    return (
        <div className="page-hero-section bg-image hero-home-2" style={{backgroundImage: "url(" + { Background } + ")"}}>
            <div className="hero-caption">
                <div className="container fg-white h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-6" data-aos="fade-up">
                    <div className="badge badge-soft mb-2">#1 Finances App on 2020</div>
                    <h1 className="mb-4 fw-normal">The best program for modern education</h1>
                    <p className="mb-4">We will work together with the team <br/>
                    and the result is guaranteed</p>

                    <a href="#" className="btn btn-dark">Get Started</a>

                    </div>
                    <div className="col-lg-6 d-none d-lg-block" data-aos="zoom-in">
                    <div className="img-place mobile-preview shadow floating-animate">
                        <img src={logo} alt="lalala" />
                        {/* <Logo1/> */}
                    </div>          
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
