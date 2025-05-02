import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Private() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('http://localhost:3001/api/check');  // Asegúrate de que la URL sea correcta
            if (!res.ok) {
                navigate('/login');
            }
        };
        checkAuth();
    }, [navigate]);

    return <div>Private Content</div>;
}
