import React, { useContext } from "react";
import { PostContext } from "../PostContext";
import PostComponent from "./PostComponent";

const PostsSection = () => {
	const { state } = useContext(PostContext);

	return (
		<div className=" h-full w-[70%] overflow-y-auto Scroll">
			<p className="text-2xl font-bold pl-3">Latest Posts</p>
			<div className="flex flex-col gap-5 p-3">
				{state?.map((post) => (
					<PostComponent key={post.postId} postData={post} />
				))}
			</div>
		</div>
	);
};

export default PostsSection;
