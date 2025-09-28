import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;