import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const UsersData = [
    { id: 1, name: 'Ben', username: 'Floppydisk'},
    { id: 2, name: 'Benten', username: 'Taskmaster'},
    { id: 3, name: 'Ben29', username: 'Nightwing'},
  ]

  const [users, setUsers] = useState(UsersData)

  const addUser = (user) => {
    user.id = Math.max(...users.map((user) => user.id)) + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (id, updateUser) =>{
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} users={users}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}

export default App