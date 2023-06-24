import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const LayoutPage = () => {
	return (
		<div className="h-screen p-4">
			<header className="h-[10%] p-2 shadow-md shadow-gray-600 ">
				<Link to="/" className="text-2xl text-blue-800 font-bold">
					MY FORUM
				</Link>
			</header>
			<div className="flex gap-2 h-[90%]">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutPage;
