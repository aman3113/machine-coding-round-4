/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from "react";
import { forumData } from "./Data";

const reducerFunction = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "UPVOTE":
			const upvotedArr = state.map((post) => {
				if (post.postId === payload) {
					return { ...post, upvotes: post.upvotes + 1 };
				} else {
					return post;
				}
			});

			return [...upvotedArr];

		case "DOWNVOTE":
			const downvotedArr = state.map((post) => {
				if (post.postId === payload) {
					return {
						...post,
						downvotes: post.downvotes + 1,
						upvotes: post.upvotes - 1,
					};
				} else {
					return post;
				}
			});

			return [...downvotedArr];

		case "BOOKMARK":
			const bookmarkedArr = state.map((post) => {
				if (post.postId === payload) {
					return { ...post, isBookmarked: !post.isBookmarked };
				} else {
					return post;
				}
			});

			return [...bookmarkedArr];

		case "SORTBYDATE":
			const dateSortedArr = [...state].sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
			);
			return [...dateSortedArr];

		case "SORTBYUPVOTES":
			const upvotesSortedArr = [...state].sort((a, b) => a.upvotes - b.upvotes);
			return [...upvotesSortedArr];

		default:
			return [...state];
	}
};

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	function handleUpvote(id) {
		dispatch({ type: "UPVOTE", payload: id });
	}
	function handleDownVote(id) {
		dispatch({ type: "DOWNVOTE", payload: id });
	}
	function handleBookMark(id) {
		dispatch({ type: "BOOKMARK", payload: id });
	}

	const [state, dispatch] = useReducer(reducerFunction, forumData.posts);

	return (
		<PostContext.Provider
			value={{
				state,
				dispatch,
				handleUpvote,
				handleDownVote,
				handleBookMark,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;
