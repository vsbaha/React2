import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const SinglePostPage = () => {
	const [post, setPost] = useState({});
	const { postId } = useParams();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${postId}`
			);
			console.log(response.data); // response.data
			setPost(response.data);
		};
		fetchPost();
	}, [postId]);

	return (
		<div>Пост с id {postId}
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	)
};
export default SinglePostPage;