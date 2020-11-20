import React from 'react';
import "./bootstrap.css";
import logo from '../img/englishrepublic_logo_2.png';
import { Link } from 'react-router-dom';

function Navbar(props) {

    const [db,setDb] = React.useState(false);
    const [menu, setMenu] = React.useState([1,0,0,0]);

    React.useEffect(()=>{
        if(props.menuNamber === 1){
            setMenu([1,0,0,0])
        }
        if(props.menuNamber === 2){
            setMenu([0,1,0,0])
        }
        if(props.menuNamber === 3){
            setMenu([0,0,1,0])
        }
        if(props.menuNamber === 4){
            setMenu([0,0,0,1])
        }
    },[])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
        <div className="container">
            <span className="navbar-brand" href="#">
            {/* width="40" */}
                <img src={logo} width="170" alt=""/>  
            </span>
            <button className="navbar-toggler" type="button" onClick={()=>{setDb(!db)}}>
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className={(db)?"navbar-collapse db-tr":"navbar-collapse dn-tr"}>
                <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                    {/* dropdown active */}
                    <li className={(menu[0] === 1)?"nav-item active":"nav-item"}>
                    {/* id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" */}
                    {/* dropdown-toggle */}
                        {/* <a className="nav-link" href="#">Home</a> */}
                    {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="index.html">Homepage 1</a>
                        <a className="dropdown-item active" href="index-2.html">Homepage 2</a>
                    </div> */}
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={(menu[1] === 1)?"nav-item active":"nav-item"}>
                        {/* <a className="nav-link" href="about.html">About</a> */}
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className={(menu[2] === 1)?"nav-item active":"nav-item"}>
                        {/* <a className="nav-link" href="blog.html">Blog</a> */}
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    {/* <li className={(menu[3] === 1)?"nav-item active":"nav-item"}>
                        <a className="nav-link" href="updates.html">What's New</a>
                        <Link className="nav-link" to="news">What's New</Link>
                    </li> */}
                    <li className={(menu[3] === 1)?"nav-item active":"nav-item"}>
                        {/* <a className="nav-link" href="contact.html">Contact</a> */}
                        <Link className="nav-link" to="/contacts">Contact</Link>
                    </li>
                </ul>
                <div className="ml-auto my-2 my-lg-0">
                    <Link to={props.linkHref}>
                        <button className="btn btn-primary rounded-pill">Admin page</button>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
