import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
} from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage";
import HomePage from "./Pages/HomePage";
import SinglePostPage from "./Pages/SinglePostPage";
import PostContextProvider from "./PostContext";

function App() {
	const router = createBrowserRouter(
		createRoutesFromChildren(
			<Route path="/" element={<LayoutPage />}>
				<Route index={true} element={<HomePage />} />
				<Route path="post/:postId" element={<SinglePostPage />} />
			</Route>
		)
	);
	return (
		<div>
			<PostContextProvider>
				<RouterProvider router={router} />
			</PostContextProvider>
		</div>
	);
}

export default App;
