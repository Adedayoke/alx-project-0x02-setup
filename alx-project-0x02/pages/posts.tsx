import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: ApiPost[];
}

export default function Posts({ posts }: PostsPageProps) {
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

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const posts = data.slice(0, 10); // Limit to 10 posts

  return {
    props: {
      posts,
    },
  };
}