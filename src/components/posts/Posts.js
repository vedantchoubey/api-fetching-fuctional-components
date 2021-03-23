import React, { useEffect, useState } from 'react';

const Posts = () => {
    
    const [posts, setPosts] = useState([]);
    const [postFormIsVisible, setPostFormIsVisible] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((Response) => Response.json())
        .then((data) => setPosts(data));
    }, []);


    return<div>
        {!postFormIsVisible &&
        <button onClick={() => setPostFormIsVisible(true)}>Add post</button>
        }
        {postFormIsVisible && (
            <form>
                <h3>New post</h3>
                <input type="text" placeholder="Title" />
                <br />
                <textarea placeholder="Body" />
                <br />
                <button onClick={() => setPostFormIsVisible(false)}>cancel</button>
            </form>
        )}


        <h1>Posts</h1>
        <ul>
            {posts.map((post, index) => (
                <li key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
}

export default Posts;