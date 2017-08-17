import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

const Comments = ({comments}) => (
	<ul>
		{comments.map(comment => (
			<Comment key={comment.id} {comment}/>
		))}
	</ul>
)



export default Comments