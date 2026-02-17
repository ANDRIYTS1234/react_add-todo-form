import React from 'react';
import { UserInfoProps } from '../../interfaces';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  if (!todos) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
