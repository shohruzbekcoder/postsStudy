import React from 'react'
import MiniBlog from './MiniBlog'

export default function MiniBolgs() {

    const [posts,setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8080/getPosts')
        .then(response => response.json())
        .then(data => {
            console.log(new Date(data[0].postDate).getDay());
            console.log(data);
            setPosts(data);
            // let day = 
        })
        .catch(error => {
            console.error(error)
        })
    },[]);

    return (
        <div className="widget-wrap">
            <h3 className="widget-title">New Blogs</h3>
            {/* <MiniBlog/> */}
            {posts.map(post => {
                // console.log(post)
                return <MiniBlog 
                        key={post._id} 
                        minText={post.postMiniText}
                        text={post.text}
                        src={post.postImage}
                        data={post.data}
                    />
            })}
        </div>
    )
}
