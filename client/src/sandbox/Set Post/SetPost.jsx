import { useState } from 'react';

const SetPost = () => {
	const INITIAL_POST = {
		title: '',
		subtitle: '',
		author: '',
		createAt: '',
	};
	const [post, setPost] = useState(INITIAL_POST);
	const [posts, setPosts] = useState([]);

	const createNewPost = (e) => {
		e.preventDefault();
		setPosts([
			...posts,
			{ ...post, createAt: new Date().toLocaleTimeString() },
		]);
		return setPost(INITIAL_POST);
	};

	return (
		<div>
			<form>
				<h5>
					Post title: {post.title} {post.subtitle} {post.author}
				</h5>
				<input
					type="text"
					onChange={(e) => setPost({ ...post, title: e.target.value })}
					value={post.title}
					placeholder="enter title"
				></input>
				<input
					type="text"
					onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
					value={post.subtitle}
					placeholder="enter subtitle"
				></input>
				<input
					type="text"
					onChange={(e) => setPost({ ...post, author: e.target.value })}
					value={post.author}
					placeholder="enter author"
				></input>
				<button
					onClick={createNewPost}
					disabled={!post.title | !post.subtitle | !post.author}
				>
					Create
				</button>
			</form>
			{!!posts.length && (
				<div>
					<table border={1}>
						<thead>
							<tr>
								<th>no.</th>
								<th>title</th>
								<th>subtitle</th>
								<th>author</th>
								<th>createAt</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post, i) => (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{post.title}</td>
									<td>{post.subtitle}</td>
									<td>{post.author}</td>
									<td>{post.createAt}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default SetPost;
