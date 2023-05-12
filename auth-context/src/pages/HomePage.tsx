import { useState } from 'react';
import { User, UserContext } from '../context/UserContext';
import Login from './Login';
import { Users, UserTable } from '../tables/UserTable';
import { AddUserForm } from '../forms/AddUserForm';


const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const usersData: Users[] = [
    { id: 1, name: 'Khadijah Clayton', username: 'Amphibian Child'},
    { id: 2, name: 'Caroline Mayer', username: 'Bioborn'},
    { id: 3, name: 'Bailey Norton', username: 'Hunt Baron'},
    { id: 4, name: 'Vanessa Gay', username: 'Sonic Howler'},
  ]

  const [users, setUsers] = useState<Users[]>(usersData)
  const [editing, setEditing] = useState<boolean>(false)

  const deleteUser = (id:number) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const addUser = (user: Users) => {
    user.id = Math.max(...users.map((user) => user.id)) + 1
    setUsers([...users, user])
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? (
        <div className="container">
            <h1>Welcome {user.name}</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>View List</h2>
                    <UserTable users={users} deleteUser={deleteUser}/>
                </div>
                <div className="flex-large">
                    {editing ? (
                    <div>
                        <h2>Edit user</h2>
                        {/* <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/> */}
                    </div>
                    ) : (
                    <div>
                        <h2>Add user</h2>
                        <AddUserForm users={users} addUser={addUser}/>
                    </div>
                    )}
                </div>
                <button onClick={() => setUser(null)}>Log Out</button>
            </div>
        </div>
      ) : (
        <Login />
      )}
    </UserContext.Provider>
  );
};

export default HomePage;
