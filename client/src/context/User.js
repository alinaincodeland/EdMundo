import React from "react";
import { useUser } from "../hooks/useUser";

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [storageUser, updateStorageUser, clearStorage] = useUser();
  const [user, setUser] = React.useState(storageUser);

  const updateUser = (newVal) => {
    setUser(newVal);
    updateStorageUser(newVal);
  };

  const removeUser = () => {
    setUser(null);
    clearStorage();
  };

  const value = React.useMemo(
    () => ({
      user,
      updateUser,
      removeUser,
    }),
    [user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => React.useContext(UserContext);
