import React from 'react'
// import Background from '../img/hero_mini.svg';
import Background from '../img/hero_mini.svg';
import { Link } from "react-router-dom";


export default function WelcomeRoute(props) {
    return (
        <div class="page-hero-section bg-image hero-mini" style={{backgroundImage: `url(${Background})`}}>
            <div class="hero-caption">
                <div class="container fg-white h-100">
                    <div class="row justify-content-center align-items-center text-center h-100">
                        <div class="col-lg-6">
                            <h3 class="mb-4 fw-medium">{props.pageName}</h3>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">{props.pageName}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
