import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <Card title="Welcome" content="This is the home page." />
      <Card title="About Us" content="Learn more about our project." />
      <PostModal onAddPost={handleAddPost} />
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}