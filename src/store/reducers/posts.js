const posts = (posts = [], action) => {
	switch (action.type) {
		case 'ADD_POST':
			return [
				...posts,
				{
					id: action.id,
					title: action.post.title,
					content: action.post.content,
					comment: []
				} 
			]
		case 'UPDATE_POST':
			return posts.map(post => {
				return (post.id == action.post.id) ? Object.assign({}, action.post) : post
			})
		case 'DELETE_POST':
			return posts.filter(post => {
				return post.id != action.id
			})
		default:
			return posts
	}
}

export default posts