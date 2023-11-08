import React from "react";
import Navbar from "../components/HomeComponents/Navbar/Navbar";
import BlogTitle from "../components/BlogComponents/BlogTitle/BlogTitle";
import BlogPage from "../components/BlogComponents/BlogPage/BlogPage";
import BlogContent from "../components/BlogComponents/BlogContent/BlogContent";
import APIBlog from "../components/BlogComponents/APIBlog/APIBlog";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogTitle />
      <BlogPage />
      <BlogContent />
      <APIBlog />
    </div>
  );
};

export default Blog;
