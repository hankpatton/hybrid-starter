import React from 'react';

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user, i) => {
        return (
          <div className='list-item' key={user.id}>{user.name}</div>
        )
      })}
    </div>
  )
}

export default Users;
