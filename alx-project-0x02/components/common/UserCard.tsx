import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;