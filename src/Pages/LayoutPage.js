import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const LayoutPage = () => {
	return (
		<div className="h-screen p-4">
			<header className="h-[10%] p-2 border-2 border-black">
				<p className="text-xl font-bold">MY FORUM</p>
			</header>
			<div className="flex gap-2 h-[90%]">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutPage;
