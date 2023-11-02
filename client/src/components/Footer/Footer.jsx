import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer-content">
				<h1>Homex</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio mauris, auctor ut varius non, tempus nec nisi.</p>
				<div className="social">
				   <button className="c-icon"><AiFillFacebook /></button>
				   <button className="c-icon"><AiOutlineInstagram /> </button>
				   <button className="c-icon"><AiOutlineTwitter /></button>
				  <button className="c-icon"><FaPinterest /> </button>
				   <button className="c-icon"><AiOutlineGoogle /> </button>
			</div>
			</div>
			<div className="footer-content">
				<h4>Projects</h4>
				<li><a href="#">Houses</a></li>
				<li><a href="#">Rooms</a></li>
				<li><a href="#">Flats</a></li>
				<li><a href="#">Apartment</a></li>
			</div>
			<div className="footer-content">
				<h4>Projects</h4>
				<li><a href="#">Houses</a></li>
				<li><a href="#">Rooms</a></li>
				<li><a href="#">Flats</a></li>
				<li><a href="#">Apartment</a></li>
			</div>
			<div className="footer-content">
				<h4>Projects</h4>
				<li><a href="#">Houses</a></li>
				<li><a href="#">Rooms</a></li>
				<li><a href="#">Flats</a></li>
				<li><a href="#">Apartment</a></li>
			</div>
			<div className="footer-content">
				<h4>Projects</h4>
				<li><a href="#">Houses</a></li>
				<li><a href="#">Rooms</a></li>
				<li><a href="#">Flats</a></li>
				<li><a href="#">Apartment</a></li>
			</div>
		</section>
	)
}

export default Footer