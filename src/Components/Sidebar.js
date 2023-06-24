import React from "react";
import { AiFillCompass, AiFillHome } from "react-icons/ai";
import { BiSolidBookmarkStar } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { forumData } from "../Data";

const Sidebar = () => {
	const { name, username, picUrl } = forumData;
	return (
		<div className="  w-[20%] flex py-[30px] flex-col justify-between items-center shadow-md shadow-gray-600 rounded-md">
			<div className="flex flex-col gap-5">
				<div className="flex items-center gap-2">
					<AiFillHome size={25} />
					<p className="text-lg">Home</p>
				</div>
				<div className="flex items-center gap-2">
					<AiFillCompass size={25} />
					<p className="text-lg">Explore</p>
				</div>
				<div className="flex items-center gap-2">
					<BiSolidBookmarkStar size={25} />
					<p className="text-lg">Bookmarks</p>
				</div>
				<div className="flex items-center gap-2">
					<FaUserCircle size={25} />
					<p className="text-lg">Profile</p>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<div>
					<img
						src={picUrl}
						alt="my pic"
						className="h-[30px] w-[30px] rounded-[50%]"
					/>
				</div>
				<div>
					<p className="font-semibold">{name}</p>
					<p className="text-purple-500">{username}</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
