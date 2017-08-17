import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Home from './views/Home'
import About from './views/About'
import News from './views/News'
import Contact from './views/Contact'
import PostEdit from '../containers/PostEdit'

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/posts" component={News} />
			<Route path="/post/new" component={PostEdit} />
			<Route path="/post/:id" component={PostEdit} />
			<Route path="/contact" component={Contact} />
		</Switch>
	</Router>
)

export default App