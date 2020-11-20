import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Pricing() {

    AOS.init({
        // initialise with other settings
        duration : 1200
      })

    const [active1,setActive1] = React.useState(true);
    const [active2,setActive2] = React.useState(true);

    return (
        <div class="page-section">
            <div class="container">
                <div class="row justify-content-center text-center" data-aos="fade-up">
                    <div class="col-lg-6">
                        <h2 class="mb-3">Get awesome features, without extra charges</h2>
                        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores non magnam, quis aliquid dolor magni</p>

                        <div class="btn-group btn-group-toggle rounded-pill btn-switch" data-toggle="buttons">
                            <label class={ (active1)?"btn active":"btn" }>
                                <input type="radio" name="options" id="option1" checked onClick={()=>{setActive1(true); setActive2(false)}}/> Monthly
                            </label>
                            <label class={ (active2)?"btn active":"btn" }>
                                <input type="radio" name="options" id="option2" onClick={()=>{setActive1(false); setActive2(true)}}/> Annually
                            </label>
                        </div>
                    </div>
                </div>
                <div class="pricing-table mt-5" data-aos="fade-up">
                    <div class="pricing-item active no-transform">
                        <div class="pricing-header">
                            <h5>Business Plan</h5>
                            <h1 class="fw-normal">$49.00</h1>
                        </div>
                        <div class="pricing-body">
                        <ul class="theme-list">
                            <li class="list-item">Push Notification</li>
                            <li class="list-item">Unlimited Bandwith</li>
                            <li class="list-item">Realtime Database</li>
                            <li class="list-item">Monthly Backup</li>
                            <li class="list-item">24/7 Support</li>
                        </ul>
                        </div>
                        <button class="btn btn-dark">Choose Plan</button>
                    </div>
                    <div class="pricing-item">
                        <div class="pricing-header">
                            <h5>Starter Plan</h5>
                            <h1 class="fw-normal">$24.00</h1>
                        </div>
                        <div class="pricing-body">
                        <ul class="theme-list">
                            <li class="list-item">Push Notification</li>
                            <li class="list-item">Unlimited Bandwith</li>
                            <li class="list-item">Realtime Database</li>
                            <li class="list-item">Monthly Backup</li>
                            <li class="list-item">24/7 Support</li>
                        </ul>
                        </div>
                        <button class="btn btn-dark">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
