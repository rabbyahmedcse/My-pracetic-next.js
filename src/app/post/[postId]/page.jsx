import React from 'react';

const ShowDetailPost = async({params}) => {
    const {postId}= await params;
    const res = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await (await res).json();
    return (
        <div>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
        </div>
    );
};

export default ShowDetailPost;