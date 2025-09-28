import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/layout/Header';

export default function About() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
  );
}