import React, { useContext } from "react";
import { PostContext } from "../PostContext";

const FilterSection = () => {
	const { handleFilterChange } = useContext(PostContext);

	return (
		<div className="w-[30%] p-5">
			<p className="text-lg font-bold mb-3">Sort By</p>
			<select
				onChange={handleFilterChange}
				className="border-1 border-black p-1 text-purple-800 bg-purple-200 cursor-pointer rounded-md font-semibold"
			>
				<option className="p-1" value="latest">
					Latest Posts
				</option>
				<option className="p-1" value="upvoted">
					Most UpVoted
				</option>
			</select>
		</div>
	);
};

export default FilterSection;
