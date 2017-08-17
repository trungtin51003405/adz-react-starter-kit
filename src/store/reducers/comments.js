const comments = (comments = [], action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...comments,
				{
					id: action.id,
					postId: action.post.id,
					comment: action.comment
				}
			]
		case 'UPDATE_COMMENT':
			return comments.map(comment => {
				return (comment.postId == action.post.id && comment.id == action.comment.id) ?
					Object.assign({}, action.comment) : comment
			})
		case 'DELETE_COMMENT':
			return comments.filter(comment => {
				return (comment.postId != action.post.id || comment.id != action.comment.id)
			})
		default:
			return comments
	}
}

export default comments