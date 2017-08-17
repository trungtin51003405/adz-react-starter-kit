import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Posts extends React.Component {
	render() {
		return (
			<div>
				{this.props.posts.map(post => (
					<Link key={post.id} to={'/post/' + post.id}>
						<h3>
							{post.title}&nbsp;
							<button onClick={e => {
								e.preventDefault()
								this.props.deletePost(post.id)
							}} type="button">Delete</button>
						</h3>
					</Link>
				))}
			</div>
		)
	}
}

Posts.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired
		})
	).isRequired
}

