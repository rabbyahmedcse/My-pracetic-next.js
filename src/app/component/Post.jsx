import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`}>
                        <button className="btn btn-primary">Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Post;