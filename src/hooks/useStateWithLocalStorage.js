import {useState, useEffect } from 'react';

export function useStateWithLocalStorage (localStorageKey) {
    const [ value, setValue ] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || [] );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value))
    }, [value, localStorageKey]);

    return [value, setValue];
}