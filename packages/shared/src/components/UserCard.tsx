import React from 'react';

export const UserCard = ({name, lastname}: {name?: string, lastname?: string}) => {
  return (
    <div style={{border: '1px solid grey', padding: 15}}>
      <div>
        Name: {name ?? 'name undefined'}
      </div>
      <div>
        Last name: {lastname ?? 'lastname undefined'}
      </div>
    </div>
  )
}
