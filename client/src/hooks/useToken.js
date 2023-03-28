import React from 'react'
import {useLocalStorage} from "react-use";

export const useToken = () => {
    const [value, setValue, remove] = useLocalStorage('jwt-token');
    const [token, setToken] = React.useState(value);

    const handleSet = (val) => {
        setValue(val);
        setToken(val);
    };

    const handleRemove = () => {
        remove();
        setToken(null)
    }


    return [token, handleSet, handleRemove]
};