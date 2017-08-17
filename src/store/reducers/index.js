import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'

const starterKit = combineReducers({
	posts,
	comments
})

export default starterKit