let postId = 0

export const addPost = post => {
	return {
		type: 'ADD_POST',
		id: postId++,
		post: post
	}
}

export const updatePost = post => {
	return {
		type: 'UPDATE_POST',
		post
	}
}

export const deletePost = id => {
	return {
		type: 'DELETE_POST',
		id
	}
}