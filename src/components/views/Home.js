import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const HomePage = () => (
	<div>
		<h1>Homepage</h1>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aut! Vitae ut aut cupiditate similique enim adipisci nam pariatur, repellat culpa molestiae optio qui ipsa? Quae mollitia dolorum eligendi quas?</p>
	</div>
)

const Home = () => (
	<div>
		<Header />
		<HomePage />
		<Footer />
	</div>
)
export default Home