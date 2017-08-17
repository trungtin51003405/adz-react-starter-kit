import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addPost, updatePost } from '../store/actions/post'

const savePost = ({ dispatch }) => {
	let post
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!)
				}}
			>
				<input type="hidden" ref={node => {
					
				}}/>

				<label>Title</label><br/>
				<input type="text" ref={node => {

				}}/>
				<label>Content</label>
				<textarea ref={node => {
				}}></textarea>

			</form>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default savePost