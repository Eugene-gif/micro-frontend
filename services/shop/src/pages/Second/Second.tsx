import React from "react";
import { UserCard } from '@packages/shared/src/components/UserCard';

const Second = () => {
  return (
    <div>
      <h1>Second</h1>
      <UserCard name={'Ivan'} lastname={'Eblan'} />
    </div>
  )
}

export default Second;