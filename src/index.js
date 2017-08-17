import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import starterKit from './store/reducers'
import initialState from './store/reducers/initialState'

import App from './components/App'

let store = createStore(
	starterKit,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('app')
)