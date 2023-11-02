import React from 'react';
import "./Hero.css";
import Search from "../Search/Search.jsx";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-text">
				<h1>Your house is waiting for you!</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio mauris, auctor ut varius non, tempus nec nisi. Quisque at tellus risus. 
				</p>
				
			</div>
			<div className="home-img">
				<img src="/images/home.jpg" alt="house" />
			</div>
		</section>
	)
}

export default Hero