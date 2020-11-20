import React from 'react'
import Blog from './Blog'
import MiniBolgs from './MiniBolgs'

export default function Blogs() {

    const [posts,setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8080/getPosts')
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })
        .catch(error => {
            console.error(error)
        })
    },[]);

    return (
        <div className="page-section">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 py-3">
                    {/* <Blog/> */}
                    {posts.map(post => {
                // console.log(post)
                    return <Blog 
                            key={post._id} 
                            minText={post.postMiniText}
                            text={post.text}
                            src={post.postImage}
                            data={post.data}
                        />
            })}
                </div>
                <div className="col-lg-4 py-3">
                    <MiniBolgs/>
                <div className="widget-wrap">
                    <h3 className="widget-title">Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
