import React from 'react';
import { blogs } from '../data/blogs';
import BlogCard from '@/components/BlogCard';

const BlogsPage = () => {
  return (
    <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((item, index) => (
          <BlogCard key={index} blog={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage