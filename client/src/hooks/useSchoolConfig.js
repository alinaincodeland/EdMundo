import { useLocalStorage } from "react-use";

export const useSchoolConfig = () => useLocalStorage("school-config");
