import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

import PostList from '../../containers/PostList'

const Newspage = () => (
	<div>
		<h1>News page <Link to='post/new'>Add</Link></h1>
		<PostList />
	</div>
)

const News = () => (
	<div>
		<Header />
		<Newspage />
		<Footer />
	</div>
)
export default News