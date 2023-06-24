import React, { useContext } from "react";
import { PostContext } from "../PostContext";

const PostsSection = () => {
	const { state, dispatch } = useContext(PostContext);
	console.log(state[0].upvotes);

	function handleUpvote() {
		dispatch({ type: "UPVOTE", payload: "36635-787-65778" });
	}
	return (
		<div>
			<button onClick={handleUpvote}>Upvote</button>
		</div>
	);
};

export default PostsSection;
