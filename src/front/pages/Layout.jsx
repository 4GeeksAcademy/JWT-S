import { Outlet } from "react-router-dom";  // Importa Outlet desde react-router-dom
import ScrollToTop from "../components/ScrollToTop";  // Componente que hace scroll al inicio
import { Navbar } from "../components/Navbar";  // Barra de navegación
import { Footer } from "../components/Footer";  // Pie de página

// Componente base que mantiene la navbar y el footer a lo largo de la página 
// y la funcionalidad de hacer scroll al inicio.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar /> {/* Barra de navegación */}
            <main>
                <Outlet /> {/* Aquí se renderizan las rutas hijas */}
            </main>
            <Footer /> {/* Pie de página */}
        </ScrollToTop>
    );
};
