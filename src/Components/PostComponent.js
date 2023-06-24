import React, { useContext } from "react";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";
import {
	BiComment,
	BiShareAlt,
	BiBookmark,
	BiSolidBookmark,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { PostContext } from "../PostContext";

const PostComponent = ({ postData }) => {
	const {
		postId,
		username,
		picUrl,
		post,
		postDescription,
		upvotes,
		downvotes,
		tags,
		isBookmarked,
		createdAt,
	} = postData;

	const createdAtDate = new Date(createdAt);
	const minute = createdAtDate.getMinutes();

	const { handleUpvote, handleDownVote, handleBookMark } =
		useContext(PostContext);

	return (
		<div className="p-4 shadow-md border-1 border-black shadow-gray-500 rounded-md flex gap-2">
			<div className="w-[15%]">
				<div className="flex-col flex gap-2 items-center">
					<TbTriangleFilled
						className="text-purple-600 cursor-pointer"
						size={30}
						onClick={() => handleUpvote(postId)}
					/>
					<p className="text-purple-600 text-sm">
						{downvotes > upvotes ? -downvotes : upvotes}
					</p>

					<TbTriangleInvertedFilled
						className="text-gray-600 cursor-pointer"
						size={30}
						onClick={() => handleDownVote(postId)}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-3 w-[80%]">
				<div className="flex gap-3">
					<img
						src={picUrl}
						alt="my pic"
						className="w-[30px] h-[30px] rounded-[50%]"
					/>
					<span className="text-gray-600">
						Posted by @<span className=" text-purple-400">{username}</span>
					</span>
					<span className="text-gray-600">• {minute}m</span>
				</div>
				<div>
					<p className="text-2xl font-bold mb-2">{post}</p>
					<div className="flex gap-2">
						{tags?.map((tag, idx) => (
							<div
								className="px-1 rounded-md text-xs capitalize text-[#5348C7] bg-purple-300"
								key={idx}
							>
								{tag}
							</div>
						))}
					</div>
				</div>
				<div>{postDescription}</div>
				<div className="flex justify-between text-gray-400 items-center border-t-2 border-gray-400 pt-2">
					<Link to={`/post/${postId}`}>
						<BiComment size={25} className="cursor-pointer" />
					</Link>

					<BiShareAlt size={25} />
					<div
						onClick={() => handleBookMark(postId)}
						className="cursor-pointer"
					>
						{isBookmarked ? (
							<BiSolidBookmark size={25} />
						) : (
							<BiBookmark size={25} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostComponent;
