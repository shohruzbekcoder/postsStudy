import React from 'react'
// payment customizable concept
import payment from '../img/icons/payment.png'
import customizable from '../img/icons/customizable.png'
import concept from '../img/icons/concept.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Features() {

    AOS.init({
        // initialise with other settings
        duration : 1200
      })

    return (
        <div class="page-section no-scroll">
            <div class="container">
                <h2 class="text-center" data-aos="zoom-in">Our Main Features</h2>

                <div class="row justify-content-center mt-5">
                <div class="col-lg-10">
                    <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 py-3" data-aos="fade-right">
                        <div class="card card-body border-0 text-center shadow pt-5">
                        <div class="svg-icon mx-auto mb-4">
                            <img src={payment} alt="paynet"/>
                        </div>
                        <h5 class="fg-gray">Effective payment</h5>
                        <p class="fs-small">An effective payment for your future and useful knowledge</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 py-3" data-aos="fade-up">
                        <div class="card card-body border-0 text-center shadow pt-5">
                        <div class="svg-icon mx-auto mb-4">
                            <img src={customizable} alt="customizable"/>
                        </div>
                        <h5 class="fg-gray">Learning without difficulty</h5>
                        <p class="fs-small">A modern and tested learning process by qualified teachers</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 py-3" data-aos="fade-left">
                        <div class="card card-body border-0 text-center shadow pt-5">
                        <div class="svg-icon mx-auto mb-4">
                            <img src={concept} alt="concept" />
                        </div>
                        <h5 class="fg-gray">Powerful Concept</h5>
                        <p class="fs-small">Opportunity to connect with us on social media</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}
