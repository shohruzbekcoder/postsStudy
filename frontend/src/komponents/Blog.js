import React from 'react'
// import img from './../img/blogs/blog_4.jpg'
import { Link } from 'react-router-dom';

export default function Blog(props) {


    return (
        <article className="blog-entry">
            <div className="entry-header">
                <div className="post-thumbnail">
                    <img src={props.src} alt=""/>
                </div>
                <div className="post-date">
                    <h3>20</h3>
                    <span>Feb</span>
                </div>
            </div>
            <div className="post-title">
                {/* <a href="blog-details.html">{props.minText}</a> */}
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
            <div className="entry-meta mb-2">
                <div className="meta-item entry-author">
                    <div className="icon">
                        <span className="mai-person"></span>  
                    </div>
                    by Admin
                </div>
            </div>
            <div className="entry-content">
                <p>{props.text}</p>
            </div>
            <Link
                to={{
                    pathname: "/onePostMore",
                    search: "",
                    hash: "",
                    state: { data: props.data }
                }}
                data={props.data}
            >
                <span className="btn btn-primary">Continue Reading</span>

            </Link>
            {/* <a href="#" className="btn btn-primary">Continue Reading</a> */}
        </article>
    )
}
