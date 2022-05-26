import { useState, useEffect } from 'react';

export function useComparePath (path) {
    const[currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);
        return() => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [currentPath]);

    return (currentPath === path);
}