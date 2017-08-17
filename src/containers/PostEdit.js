import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postActions } from '../store/actions'

import PropTypes from 'prop-types'

class Post extends React.Component {
  state = {
    post: this.props.post != undefined ? { ...this.props.post } : {id: 0, title: '', content: ''}
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      post: this.props.post != undefined ? {...newProps.post} : {id: 0, title: '', content: ''}
    });
  }
  handleChange = field => event => {
    this.setState({
      post: {
        ...this.state.post,
        [field]: event.target.value
      }
    });
  }
  render() {
    return (
      <div>
        <Link to='/posts'>Come back</Link>
        <form onSubmit={e => {
          e.preventDefault()
          this.props.savePost(this.state.post)
        }} noValidate>
          <div>
            <label>Title</label>

            <input
              value={this.state.post.title}
              onChange={this.handleChange('title')}
              type="text"
              placeholder="Post title"
            />
          </div>

          <div>
            <label>Content</label>
            <input
              type="text"
              value={this.state.post.content} 
              onChange={this.handleChange('content')}
            />
          </div>

          <button type="submit">
            {this.state.post.id ? 'Update' : 'Create' } Save
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let postId = props.match.params.id;
  if (postId === undefined) {
    return {
      post: state.posts.filter(post => post.id == props.match.params.id)[0]
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    savePost: post => {
      post.id == 0 ? dispatch(postActions.addPost(post)) : dispatch(postActions.updatePost(post))
    },
  }
}

const PostEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)


export default PostEdit