import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const ContactPage = () => (
	<div>
		<h1>Contact Us</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos rerum unde doloribus aspernatur quod sint, veniam commodi dolor quos cupiditate et, quam totam porro voluptatem. Qui obcaecati placeat reprehenderit.</p>
	</div>
)

const Contact = () => (
	<div>
		<Header />
		<ContactPage />
		<Footer />
	</div>
)
export default Contact