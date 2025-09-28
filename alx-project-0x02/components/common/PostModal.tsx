import React, { useState } from 'react';

interface Post {
  title: string;
  content: string;
}

interface PostModalProps {
  onAddPost: (post: Post) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onAddPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost({ title, content });
    setTitle('');
    setContent('');
    setIsOpen(false);
  };

  if (!isOpen) {
    return <button onClick={() => setIsOpen(true)}>Add Post</button>;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label>Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;