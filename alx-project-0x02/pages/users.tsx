import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <Header />
      <h1>Users Page</h1>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  );
}