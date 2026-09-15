import React from 'react';
const blogsData = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      category: "React",
      description:
        "Learn the basics of React and how to build modern user interfaces using components.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      id: 2,
      title: "Why Learn TypeScript?",
      author: "Sarah Smith",
      category: "TypeScript",
      description:
        "TypeScript helps developers write safer and more maintainable JavaScript applications.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    },
    {
      id: 3,
      title: "Understanding JavaScript ES6",
      author: "Alex Johnson",
      category: "JavaScript",
      description:
        "Explore useful ES6 features such as arrow functions, destructuring, spread operators, and more.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
    },
    {
      id: 4,
      title: "CSS Flexbox Explained",
      author: "Michael Brown",
      category: "CSS",
      description:
        "A beginner-friendly guide to creating responsive layouts using CSS Flexbox.",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19",
    },
    {
      id: 5,
      title: "Building Responsive Websites",
      author: "Emily Wilson",
      category: "Web Development",
      description:
        "Learn how to create websites that look great on desktops, tablets, and mobile devices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];
  
const PostDetailPage = async ({ params }) => {
    const { postid } = await params;
    const post = blogsData.find(post=> post.id === parseInt(postid));

    return (
        <div>
            <h2>Post details page {postid}</h2>
            {
                post && <div>
                    <h2>{post.title}</h2>
                    <p>By {post.author}</p>
                    <p>{post.description}</p>
                </div>
            }
        </div>
    );
};

export default PostDetailPage;