import { useLocalStorage } from "react-use";
import React from "react";

export const useUser = () => useLocalStorage("user-data", null);
