import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../PostContext";
import PostComponent from "../Components/PostComponent";

import { BiComment, BiShareAlt, BiHeart } from "react-icons/bi";

const SinglePostPage = () => {
	const { postId } = useParams();
	const { state } = useContext(PostContext);

	const postData = state.find((post) => post.postId === postId);
	const { username, comments } = postData;

	return (
		<div className=" h-full w-[50%] overflow-y-auto Scroll p-4 ">
			<PostComponent postData={postData} />
			<div className="w-full p-4 shadow-md border-1 border-black shadow-gray-500 rounded-md">
				<p className="text-xl font-bold p-3">Comments</p>
				<div>
					{comments.length > 0 &&
						comments.map((comment) => (
							<SingleComment
								key={comment.commentId}
								commentDetails={comment}
								postUsername={username}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default SinglePostPage;

function SingleComment({ commentDetails, postUsername }) {
	const { username, picUrl, likes, comment, createdAt } = commentDetails;
	const createdAtDate = new Date(createdAt);
	const minute = createdAtDate.getMinutes();

	return (
		<div className="flex gap-2">
			<div className="w-[15%] flex justify-center">
				<img
					src={picUrl}
					alt="my pic"
					className="w-[50px] h-[50px] rounded-[50%]"
				/>
			</div>
			<div className="w-[80%] flex flex-col gap-3">
				<div>
					<span className="text-gray-600">
						Posted by @<span className=" text-purple-400">{username}</span>
					</span>
					<span className="text-gray-600">• {minute}m</span>
				</div>
				<p>
					Replying to @ <span>{postUsername}</span>{" "}
				</p>
				<p>{comment}</p>
				<div className="flex justify-between text-gray-400 items-center border-t-2 border-gray-400 pt-2">
					<span className="flex gap-2">
						<BiHeart size={25} />
						{likes}
					</span>
					<BiComment size={25} />
					<BiShareAlt size={25} />
				</div>
			</div>
		</div>
	);
}
