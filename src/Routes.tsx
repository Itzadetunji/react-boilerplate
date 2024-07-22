import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Land from "./pages/Land/Land";

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Land />} />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
};

const ToastContainer: React.FC = () => {
	return (
		<Toaster
			position="bottom-center"
			toastOptions={{
				style: {
					maxWidth: "1000px",
				},
			}}
		/>
	);
};

export default AppRoutes;
