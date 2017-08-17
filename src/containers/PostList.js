import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import { postActions } from '../store/actions'


const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deletePost: id => dispatch(postActions.deletePost(id))
	}
}

const PostList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Posts)

export default PostList