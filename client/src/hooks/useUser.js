import { useLocalStorage } from "react-use";
import React from "react";

export const useUser = () => {
  const [value, setValue, remove] = useLocalStorage("user-data");
  const [user, setUser] = React.useState(value);

  const handleSet = (val) => {
    setValue(val);
    setUser(val);
  };

  const handleRemove = () => {
    remove();
    setUser(null);
  };

  return [user, handleSet, handleRemove];
};
