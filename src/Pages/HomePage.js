import React from "react";
import PostsSection from "../Components/PostsSection";
import FilterSection from "../Components/FilterSection";

const HomePage = () => {
	return (
		<div className="w-full flex gap-3 p-4">
			<PostsSection />
			<FilterSection />
		</div>
	);
};

export default HomePage;
