import React from 'react'
import WelcomeRoute from './WelcomeRoute';
import Navbar from './Navbar';
import AboutMain from './AboutMain'
import MainFooter from './MainFooter'

export default function AboutKomponents() {
    return (
        <>
            <Navbar menuNamber={2} linkHref="/about"/>
                <main class="bg-light">
                    <WelcomeRoute pageName="About Us"></WelcomeRoute>
                    <AboutMain/>
                </main>
            <MainFooter/>
        </>
    )
}
