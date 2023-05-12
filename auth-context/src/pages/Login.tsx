import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0); // counter fra 0
  const { setUser } = useContext(UserContext);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'Sarah' && password === '2') {
      const user = { id: 42, name: username, password: password };
      setUser(user);
    } else {
      setAttempts(attempts + 1); // tæller op
      alert('Wrong username or password');
    }
  };

  const disableForm = attempts >= 3; // efter 3 forsøg disable form

  return (
    <form className='loginForm' onSubmit={handleLogin}>
      <input className='loginInput' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} disabled={disableForm} />
      <input className='loginInput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={disableForm} />
      <button type="submit" disabled={disableForm}>Log In</button>
      {disableForm && <p>Too many failed attempts. Please try again later.</p>}
    </form>
  );
};

export default Login;
