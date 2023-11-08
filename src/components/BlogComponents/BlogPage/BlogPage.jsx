import React, { useRef } from "react";
import "./blogpageStyle.css";

function BlogPage() {
  const blogPostRef = useRef(null);

  const changeColor = () => {
    if (blogPostRef.current) {
      blogPostRef.current.style.color = "red";
    }
  };

  return (
    <div className='blog-page'>
      <h1>My Blog</h1>

      <p ref={blogPostRef}>This is a blog post.</p>

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default BlogPage;
