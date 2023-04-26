import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  const UsersData = [
    { id: 1, name: 'Ben', username: 'Floppydisk'},
    { id: 2, name: 'Benten', username: 'Taskmaster'},
    { id: 3, name: 'Ben29', username: 'Nightwing'},
  ]

  const [users, setUsers] = useState(UsersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App