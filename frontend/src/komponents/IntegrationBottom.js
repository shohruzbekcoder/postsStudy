import React from 'react'
import './maicons.css'
import logo from '../img/app_preview_2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

// data-aos-delay="50"

export default function IntegrationBottom() {

    AOS.init({
        // initialise with other settings
        duration : 1200
      })

    
    return (
        <div class="page-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 py-3">
                        <div class="iconic-list">
                            <div class="iconic-item" data-aos="fade-up">
                                <div class="iconic-content">
                                    <h5>Powerful Features</h5>
                                    <p class="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                </div>
                                <div class="iconic-md iconic-text bg-warning fg-white rounded-circle">
                                    <span class="mai-analytics"></span>
                                </div>
                            </div>
                            <div class="iconic-item" data-aos="fade-up">
                                <div class="iconic-content">
                                    <h5>Fully Secured</h5>
                                    <p class="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                </div>
                                <div class="iconic-md iconic-text bg-info fg-white rounded-circle">
                                    <span class="mai-shield-checkmark"></span>
                                </div>
                                
                            </div>
                            <div class="iconic-item" data-aos="fade-up">
                                <div class="iconic-content">
                                    <h5>Easy Monitoring</h5>
                                    <p class="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                </div>
                                <div class="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                                    <span class="mai-desktop-outline"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 py-3" data-aos="zoom-in">
                        <div class="img-place mobile-preview shadow">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-4 py-3">
                        <div class="iconic-list">
                            <div class="iconic-item" data-aos="fade-up">
                                <div class="iconic-md iconic-text bg-warning fg-white rounded-circle">
                                    <span class="mai-speedometer-outline"></span>
                                </div>
                                <div class="iconic-content">
                                    <h5>Powerful Features</h5>
                                    <p class="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                </div>
                            </div>
                            <div class="iconic-item" data-aos="fade-up">
                                <div class="iconic-md iconic-text bg-success fg-white rounded-circle">
                                    <span class="mai-aperture"></span>
                                </div>
                                <div class="iconic-content">
                                    <h5>Fully Secured</h5>
                                    <p class="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                </div>
                            </div>
                            <div class="iconic-item" data-aos="fade-up">
                                <div class="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                                    <span class="mai-stats-chart-outline"></span>
                                </div>
                                <div class="iconic-content">
                                    <h5>Easy Monitoring</h5>
                                    <p class="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
