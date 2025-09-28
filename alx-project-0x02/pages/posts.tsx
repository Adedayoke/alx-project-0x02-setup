import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Posts() {
  const [posts, setPosts] = useState<ApiPost[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10))); // Limit to 10 posts
  }, []);

  return (
    <div>
      <Header />
      <h1>Posts Page</h1>
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} content={post.body} userId={post.userId} />
      ))}
    </div>
  );
}