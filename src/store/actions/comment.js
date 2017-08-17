let commentId = 0

export const addComment = (post, comment) => {
	return {
		type: 'ADD_COMMENT',
		post: post, 
		id: commentId++,
		comment
	}
}

export const updateComment = (post, comment) => {
	return {
		type: 'UPDATE_COMMENT',
		post: post,
		comment
	}
}

export const deleteComment = (post, commentId) => {
	return {
		type: 'DELETE_COMMENT',
		post: post,
		id
	}
}