import React, { useState } from "react";

interface defaultStateProps {
    name:string
    password:string
    users:string[]
    addNewUser:(user:string)=> void
}

const defaultState:defaultStateProps = {
  name: "useContext",
  password: "react12345",
  users:[],
  addNewUser: (user: string) => {},
};

export const UserContext = React.createContext(defaultState);

const UserProvider = ({children}: { children: React.ReactNode }) => {
   const [userInfo, setUserInfo] = useState(defaultState);

   return(
    <UserContext.Provider value={{defaultState, setUserInfo}}>
        {children}
    </UserContext.Provider>
   )
};

export default UserProvider;
