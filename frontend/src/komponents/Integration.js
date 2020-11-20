import React from 'react'
import logo from '../img/app_preview_4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Integration() {

    AOS.init({
        // initialise with other settings
        duration : 1200
      })

    return (
        <div className="page-section no-scroll">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="img-place" data-aos="zoom-in">
                    <img src={logo} alt="" />
                    </div>
                </div>
                <div className="col-lg-5 pl-lg-5" data-aos="fade-up">
                    <h2 className="mb-4">Innovative lessons based on the experience of the world and Uzbekistan</h2>
                    <p className="mb-4">Our lessons are conducted using innovative and unique methods. Classes are held individually and collectively. Our lessons will be fun and rewarding.</p>
                    <a href="#" className="btn btn-outline-primary rounded-pill">See Addons</a>
                </div>
                </div>
            </div>
            </div>
    )
}
