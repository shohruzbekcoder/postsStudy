import React from 'react'
import WelcomeRoute from './WelcomeRoute'
import Navbar from './Navbar';
import MainFooter from './MainFooter'
import Address from './Address'
import ContactForm from './ContactForm';
import GoogleMapCard from './GoogleMapCard';

export default function ContactKomponents() {
    return (
        <div>
            <Navbar menuNamber={4} linkHref="/contacts"/>
                <main class="bg-light">
                    <WelcomeRoute pageName="Contact"></WelcomeRoute>
                    <div class="page-section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <Address/>
                                <ContactForm/>
                                <div class="col-md-6 col-lg-7 my-3 wow fadeInUp">
                                    <div class="card-page">
                                        <div class="maps-container">
                                        {/* <div id="myMap"></div> */}
                                        <GoogleMapCard/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <MainFooter/>
        </div>
    )
}
