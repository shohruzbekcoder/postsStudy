import React from 'react'
// import img from './../img/blogs/blog_1.jpg'
import { Link } from 'react-router-dom';

export default function MiniBlog(props) {


    return (
        <div className="blog-widget">
            <div className="blog-img">
                {/* <img src={img} alt="mini post img"/> */}
                <img src={props.src} alt="mini post img"/>
            </div>
            <div className="entry-footer">
            
                {/* <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div> */}
                <div className="blog-title mb-2">
                    {/* <a href="#">{props.minText}</a> */}
                    <Link
                        to={{
                            pathname: "/onePostMore",
                            search: "",
                            hash: "",
                            state: { data: props.data }
                        }}
                        data={props.data}
                        >{props.minText}
                    </Link>
                </div>
                <div className="meta">
                    <span><span className="icon-calendar"></span> July 12, 2018</span>
                    <span><span className="icon-person"></span> Admin</span>
                    {/* <span><span className="icon-chat"></span> 19</span> */}
                </div>
            </div>
        </div>
    )
}
