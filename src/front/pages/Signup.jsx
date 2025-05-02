import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) navigate('/login');
        else alert('Error en el registro');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Registrarse</button>
        </form>
    );
}
