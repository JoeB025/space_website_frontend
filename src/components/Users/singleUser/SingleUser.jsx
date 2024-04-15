import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name : 'Bugs Bunny',
    username: 'BigCarrot1940',
    avatar_url: 'https://www.flaticon.com/free-icon/carrot_1514935' 
  });


  // function updateUser(newUser) {
  //   setUser(newUser)
  // }


  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
      </UserContext.Provider>
  );
}


