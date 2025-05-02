import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "../store/appContext";
import { Home } from "../views/home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Private } from "../pages/Private";
import { Navbar } from "../component/Navbar";

const Layout = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/private" element={<Private />} />
				<Route path="*" element={<h1>Ruta no encontrada</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
