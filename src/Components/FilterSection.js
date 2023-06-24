import React from "react";
import { useDispatch } from "react-redux";

const FilterSection = () => {
	const dispatch = useDispatch();

	function handleFilterChange(e) {
		const { value } = e.target;
		value === "latest"
			? dispatch({ type: "SORTBYDATE", payload: "" })
			: dispatch({ type: "SORTBYUPVOTES", payload: "" });
	}
	return (
		<div className="w-[30%]">
			<p>Sort By</p>
			<select onChange={handleFilterChange}>
				<option value="latest">Latest Posts</option>
				<option value="upvoted">Most UpVoted</option>
			</select>
		</div>
	);
};

export default FilterSection;
