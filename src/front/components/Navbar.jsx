import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch('http://localhost:3001/api/logout', { method: 'POST' });  // Asegúrate de que la URL sea correcta
        navigate('/login');
    };

    return (
        <nav>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </nav>
    );
}
