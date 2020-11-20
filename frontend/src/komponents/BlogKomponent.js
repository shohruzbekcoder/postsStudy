import React from 'react'
import WelcomeRoute from './WelcomeRoute';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from './Blogs';
// import Footer from './Footer';
import MainFooter from './MainFooter';

export default function BlogKomponent() {
    return (
        <>
            <Navbar menuNamber={3} linkHref="/admin"/>
            <main>
                <WelcomeRoute pageName="Blog"/>
                <Blogs/>
            </main>
            {/* <Footer/> */}
            <MainFooter/>
        </>
    )
}
