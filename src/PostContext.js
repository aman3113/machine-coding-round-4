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
					return { ...post, downvotes: post.downvotes + 1 };
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
	}
};

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, forumData.posts);

	return (
		<PostContext.Provider value={{ state, dispatch }}>
			{children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;
