import React from "react";
import { AiFillCompass, AiFillHome } from "react-icons/ai";
import { BiSolidBookmarkStar } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
	return (
		<div className="w-[20%] flex justify-center border-2 border-green-500 pt-[50px]">
			<div className="flex flex-col gap-5">
				<div className="flex items-center gap-2">
					<AiFillHome size={20} />
					<p>Home</p>
				</div>
				<div className="flex items-center gap-2">
					<AiFillCompass size={20} />
					<p>Explore</p>
				</div>
				<div className="flex items-center gap-2">
					<BiSolidBookmarkStar size={20} />
					<p>Bookmarks</p>
				</div>
				<div className="flex items-center gap-2">
					<FaUserCircle size={20} />
					<p>Profile</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
