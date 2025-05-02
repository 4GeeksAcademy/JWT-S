import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/api/login', {  // Asegúrate de que la URL sea correcta
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            navigate('/private');
        } else {
            alert('Credenciales inválidas');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}
