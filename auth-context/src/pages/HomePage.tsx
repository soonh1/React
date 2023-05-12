import { useState } from 'react';
import { UserContext } from '../context/UserContext';
import Login from './Login';

interface User {
    id: number;
    name: string;
    password: string;
  }

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? (
        <div>
          <h1>Welcome {user.name}!</h1>
          <button onClick={() => setUser(null)}>Log Out</button>
        </div>
      ) : (
        <Login />
      )}
    </UserContext.Provider>
  );
};

export default HomePage;
