import React from 'react'
import { Link } from "react-router-dom";


export default function MainFooter() {
    return (
        <div className="page-footer-section bg-dark fg-white">
            <div className="container mb-5">
                <div className="row justify-content-center text-center wow fadeInUp">
                    <div className="col-lg-8">
                        <div className="text-center mb-3">
                            <img src="../assets/favicon-light.png" alt="" height="80"/>
                        </div>
                        <h3 className="mb-3"><span className="fg-primary">English</span>Republic</h3>
                        <p className="caption">You will not go astray by choosing us. <br/> Quality knowledge is only with us</p>

                        <ul className="nav justify-content-center py-3">
                            <li className="nav-item"><Link to="/" className="nav-link fg-white px-4">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link fg-white px-4">About</Link></li>
                            <li className="nav-item"><Link to="/blog" className="nav-link fg-white px-4">Blog</Link></li>
                            {/* <li className="nav-item"><Link href="" className="nav-link fg-white px-4">What's New</Link></li> */}
                            <li className="nav-item"><Link to="/contacts" className="nav-link fg-white px-4">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <hr/>
            <p className="text-center mt-4 wow fadeIn">EnglishRepublic &copy; 2020. All right reserved</p>
        </div>
    )
}
