import { createContext } from 'react';

export interface User {
  id: number;
  name: string;
  password: string;
}

interface UserContextInterface {
  user: User | null;
  setUser: (value: User | null) => void;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  setUser: () => {}
});
