import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name : 'Bugs Bunny',
    username: 'BigCarrot1940',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/800px-Bugs_Bunny.svg.png' 
  });


  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
      </UserContext.Provider>
  );
}


