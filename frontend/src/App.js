import React from 'react';
import Features from './komponents/Features';
import Integration from './komponents/Integration';
import IntegrationBottom from './komponents/IntegrationBottom';
import Navbar from "./komponents/Navbar";
import Pricing from "./komponents/Pricing";
import Welcome from './komponents/Welcome';
import AdminCreatePost from './komponents/Admin/AdminCreatePost'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogKomponent from './komponents/BlogKomponent';
import PostMore from './komponents/PostMore';
import MainFooter from './komponents/MainFooter';
import WelcomeRoute from './komponents/WelcomeRoute';
import AboutKomponents from './komponents/AboutKomponents';
import ContactKomponents from './komponents/ContactKomponents'
// import 'aos/dist/aos.css'
// import AOS from 'aos'


function App() {
  // AOS.init()
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar linkHref="/"/>
            <Welcome/>
            <Features/> 
            <Integration/>
            <IntegrationBottom/>
            <hr/>
            <Pricing/>
            <hr/>
            <MainFooter/>
          </Route>
          <Route path="/blog">
            {/* <h1>salom</h1> */}
            <BlogKomponent/>
          </Route>
          <Route path="/onePostMore">
            <PostMore/>
          </Route>
          <Route path="/admin">
            <AdminCreatePost/>
          </Route>
          <Route path="/about">
            <AboutKomponents/>
          </Route>
          <Route path="/contacts">
            <ContactKomponents/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
