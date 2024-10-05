import { useEffect, useState } from 'react';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('checking')
        const checkAuth = async () => {
            const res = await fetch('/api/protected', { credentials: 'include' });
            setIsLoggedIn(res.ok);
        };

        checkAuth();
    }, []);

    return isLoggedIn;
};

export default useAuth;